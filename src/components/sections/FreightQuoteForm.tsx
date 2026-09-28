"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react"
import { FREIGHT_QUOTE_PAGE, whatsappLink } from "@/lib/data"
import { saveLead } from "@/lib/supabase"
import { cn } from "@/lib/utils"

type Form = {
  name: string
  company: string
  phone: string
  email: string
  origin: string
  destination: string
  cargo: string
  container: string
  quantity: string
  readyDate: string
  extras: string[]
  notes: string
}

type Errors = Partial<Record<keyof Form | "form", string>>

const EMPTY: Form = {
  name: "",
  company: "",
  phone: "",
  email: "",
  origin: "",
  destination: "",
  cargo: "",
  container: "",
  quantity: "",
  readyDate: "",
  extras: [],
  notes: "",
}

const field =
  "h-12 w-full border border-ink bg-paper px-4 text-base text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-spice"
const label = "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft"

function validate(f: Form): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = "Please enter your name."
  const digits = f.phone.replace(/[^\d]/g, "")
  if (digits.length < 8 || digits.length > 15) e.phone = "Please enter a valid phone number with country code."
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address."
  if (f.origin.trim().length < 2) e.origin = "Where should we pick up the cargo?"
  if (!f.destination) e.destination = "Please choose a destination."
  if (f.cargo.trim().length < 2) e.cargo = "What are you shipping?"
  if (!f.container) e.container = "Please choose a container type."
  return e
}

function summary(f: Form) {
  return [
    `Freight quote request`,
    `Cargo: ${f.cargo}`,
    `Pickup: ${f.origin}`,
    `Destination: ${f.destination}`,
    `Container: ${f.container}`,
    f.quantity && `Quantity / weight: ${f.quantity}`,
    f.readyDate && `Cargo ready: ${f.readyDate}`,
    f.extras.length > 0 && `Extras: ${f.extras.join(", ")}`,
    f.notes && `Notes: ${f.notes}`,
  ]
    .filter(Boolean)
    .join("\n")
}

export function FreightQuoteForm() {
  const [form, setForm] = useState<Form>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const set = (key: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }
  const toggleExtra = (x: string) =>
    setForm((f) => ({ ...f, extras: f.extras.includes(x) ? f.extras.filter((v) => v !== x) : [...f.extras, x] }))

  const waHref = whatsappLink(
    `Hello Versa Logistics,\n${summary(form)}\nName: ${form.name}${form.company ? ` (${form.company})` : ""}\nPhone: ${form.phone}`
  )

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    setStatus("sending")
    try {
      await saveLead({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        company: form.company.trim() || undefined,
        service_interested: `Freight quote — ${form.container} to ${form.destination}`,
        message: summary(form),
      })
      setStatus("sent")
    } catch {
      setStatus("idle")
      setErrors({ form: "We could not submit the form just now. Send it on WhatsApp instead — your shipment details are already filled in." })
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink bg-paper p-8" role="status">
        <CheckCircle2 className="size-8 text-leaf" aria-hidden />
        <p className="mt-4 font-serif text-3xl leading-tight">Quote request received, {form.name.split(" ")[0]}.</p>
        <p className="mt-3 text-ink-soft">
          Our freight desk is comparing carriers and routes for {form.cargo} to {form.destination}. We will call or WhatsApp you on {form.phone} with your
          itemised quote.
        </p>
      </div>
    )
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`fq-${k}-error`} className="mt-1.5 text-sm font-medium text-destructive">
        {errors[k]}
      </p>
    ) : null
  const aria = (k: keyof Form) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `fq-${k}-error` : undefined })

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-ink bg-paper p-6 sm:grid-cols-2 md:p-8">
      <fieldset className="contents">
        <legend className="sr-only">Shipment details</legend>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-spice sm:col-span-2">01 — Shipment</p>
        <div className="sm:col-span-2">
          <label htmlFor="fq-cargo" className={label}>
            What are you shipping? *
          </label>
          <input id="fq-cargo" className={field} placeholder="e.g. Green coffee beans in 60 kg jute bags" value={form.cargo} onChange={set("cargo")} {...aria("cargo")} />
          {err("cargo")}
        </div>
        <div>
          <label htmlFor="fq-origin" className={label}>
            Pickup location *
          </label>
          <input id="fq-origin" className={field} placeholder="City / district, e.g. Kalpetta, Wayanad" value={form.origin} onChange={set("origin")} {...aria("origin")} />
          {err("origin")}
        </div>
        <div>
          <label htmlFor="fq-destination" className={label}>
            Destination port *
          </label>
          <select id="fq-destination" className={cn(field, "appearance-none")} value={form.destination} onChange={set("destination")} {...aria("destination")}>
            <option value="">Select…</option>
            {FREIGHT_QUOTE_PAGE.destinations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {err("destination")}
        </div>
        <div>
          <label htmlFor="fq-container" className={label}>
            Container type *
          </label>
          <select id="fq-container" className={cn(field, "appearance-none")} value={form.container} onChange={set("container")} {...aria("container")}>
            <option value="">Select…</option>
            {FREIGHT_QUOTE_PAGE.containers.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {err("container")}
        </div>
        <div>
          <label htmlFor="fq-quantity" className={label}>
            Quantity / weight
          </label>
          <input id="fq-quantity" className={field} placeholder="e.g. 2 × 40ft, 19 tonnes, 12 CBM" value={form.quantity} onChange={set("quantity")} />
        </div>
        <div>
          <label htmlFor="fq-ready" className={label}>
            Cargo ready date
          </label>
          <input id="fq-ready" type="date" className={field} value={form.readyDate} onChange={set("readyDate")} />
        </div>
        <div className="sm:col-span-2">
          <p className={label}>Also quote for</p>
          <div className="flex flex-wrap gap-2">
            {FREIGHT_QUOTE_PAGE.extras.map((x) => {
              const on = form.extras.includes(x)
              return (
                <button
                  key={x}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleExtra(x)}
                  className={cn(
                    "min-h-10 border px-4 text-sm font-medium transition-colors",
                    on ? "border-ink bg-ink text-paper" : "border-ink/40 bg-paper text-ink hover:border-ink"
                  )}
                >
                  {on ? "✓ " : "+ "}
                  {x}
                </button>
              )
            })}
          </div>
        </div>
      </fieldset>

      <fieldset className="contents">
        <legend className="sr-only">Your details</legend>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-spice sm:col-span-2">02 — Your details</p>
        <div>
          <label htmlFor="fq-name" className={label}>
            Name *
          </label>
          <input id="fq-name" autoComplete="name" className={field} value={form.name} onChange={set("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="fq-company" className={label}>
            Company
          </label>
          <input id="fq-company" autoComplete="organization" className={field} value={form.company} onChange={set("company")} />
        </div>
        <div>
          <label htmlFor="fq-phone" className={label}>
            Phone / WhatsApp *
          </label>
          <input id="fq-phone" type="tel" autoComplete="tel" placeholder="+91 or +971 …" className={field} value={form.phone} onChange={set("phone")} {...aria("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="fq-email" className={label}>
            Email
          </label>
          <input id="fq-email" type="email" autoComplete="email" className={field} value={form.email} onChange={set("email")} {...aria("email")} />
          {err("email")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="fq-notes" className={label}>
            Anything else?
          </label>
          <textarea
            id="fq-notes"
            rows={4}
            className={cn(field, "h-auto py-3")}
            placeholder="Incoterm, packing, special handling, consignee city…"
            value={form.notes}
            onChange={set("notes")}
          />
        </div>
      </fieldset>

      {errors.form && (
        <div className="border border-destructive p-4 text-sm sm:col-span-2" role="alert">
          <p>{errors.form}</p>
          <a href={waHref} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
            Send on WhatsApp <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:border-spice hover:bg-spice disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <ArrowUpRight className="size-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Get my freight quote"}
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-12 items-center gap-3 border border-ink px-6 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
        >
          Send on WhatsApp instead
        </a>
      </div>
    </form>
  )
}
