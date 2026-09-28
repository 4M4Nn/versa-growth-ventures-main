"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react"
import { ENQUIRY_TYPES, whatsappLink } from "@/lib/data"
import { saveLead } from "@/lib/supabase"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type FormState = {
  name: string
  company: string
  phone: string
  email: string
  enquiry: string
  message: string
}

type Errors = Partial<Record<keyof FormState | "form", string>>

const fieldClass =
  "h-12 rounded-none border-ink bg-paper px-4 text-base shadow-none focus-visible:border-spice focus-visible:ring-0 focus-visible:ring-offset-0"

function validate(f: FormState): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = "Please enter your name."
  const digits = f.phone.replace(/[^\d]/g, "")
  if (digits.length < 8 || digits.length > 15) e.phone = "Please enter a valid phone number with country code."
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = "Please enter a valid email address."
  if (!f.enquiry) e.enquiry = "Please choose what your enquiry is about."
  if (f.message.trim().length < 10) e.message = "Please tell us a little more (at least 10 characters)."
  return e
}

export function ContactForm({ defaultEnquiry }: { defaultEnquiry?: string }) {
  const initialEnquiry = ENQUIRY_TYPES.some((t) => t.value === defaultEnquiry) ? (defaultEnquiry as string) : ""
  const [form, setForm] = useState<FormState>({ name: "", company: "", phone: "", email: "", enquiry: initialEnquiry, message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const enquiryLabel = ENQUIRY_TYPES.find((t) => t.value === form.enquiry)?.label ?? "General enquiry"
  const whatsappFallback = whatsappLink(
    `Hello Versa Growth Ventures,\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEnquiry: ${enquiryLabel}\n${form.message}`
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
        service_interested: enquiryLabel,
        message: form.message.trim(),
      })
      setStatus("sent")
    } catch {
      setStatus("idle")
      setErrors({ form: "We could not submit the form just now. Please send it on WhatsApp instead — your details are already filled in." })
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-ink bg-paper p-8" role="status">
        <CheckCircle2 className="size-8 text-ocean" aria-hidden />
        <p className="mt-4 font-serif text-3xl leading-tight">Thank you, {form.name.split(" ")[0]}.</p>
        <p className="mt-3 text-ink-soft">Your enquiry has reached our team. We will call or WhatsApp you on {form.phone} shortly.</p>
      </div>
    )
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm font-medium text-destructive">
        {errors[k]}
      </p>
    ) : null

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Name *
        </label>
        <Input id="name" autoComplete="name" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={fieldClass} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Company
        </label>
        <Input id="company" autoComplete="organization" value={form.company} onChange={update("company")} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Phone / WhatsApp *
        </label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 or +971 …"
          value={form.phone}
          onChange={update("phone")}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={fieldClass}
        />
        {err("phone")}
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Email
        </label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
        {err("email")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="enquiry" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Enquiry about *
        </label>
        <select
          id="enquiry"
          value={form.enquiry}
          onChange={update("enquiry")}
          aria-invalid={!!errors.enquiry}
          aria-describedby={errors.enquiry ? "enquiry-error" : undefined}
          className={cn(fieldClass, "w-full appearance-none border outline-none")}
        >
          <option value="">Select…</option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {err("enquiry")}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          Message *
        </label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Commodity or cargo, quantity, origin, destination port, required date…"
          value={form.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "h-auto py-3")}
        />
        {err("message")}
      </div>

      {errors.form && (
        <div className="border border-destructive bg-paper p-4 text-sm sm:col-span-2" role="alert">
          <p>{errors.form}</p>
          <a href={whatsappFallback} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
            Send on WhatsApp <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-6 text-sm font-semibold text-paper transition-colors hover:border-spice hover:bg-spice disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <ArrowUpRight className="size-4" aria-hidden />}
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-ink-soft">* Required. Our team will get back to you by phone or WhatsApp.</p>
      </div>
    </form>
  )
}
