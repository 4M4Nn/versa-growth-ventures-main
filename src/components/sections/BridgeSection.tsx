import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { INTERNATIONAL } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"

// Product categories buyers can source through Versa International Traders
export function SourcingCategories({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <ul className="grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
      {INTERNATIONAL.categories.map((c, i) => (
        <li key={c.title} className="bg-paper">
          <Link href={c.href} className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-spice hover:text-paper">
            <span>
              <span className="font-mono text-[11px] text-spice group-hover:text-paper/80">{String(i + 1).padStart(2, "0")}</span>
              <Title className="mt-2 font-serif text-2xl leading-tight">{c.title}</Title>
              <span className="mt-2 block text-[15px] leading-relaxed text-ink-soft group-hover:text-paper/80">{c.body}</span>
            </span>
            <ArrowUpRight className="size-4 self-end transition-transform group-hover:rotate-45" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function BridgeSection() {
  const b = INTERNATIONAL
  return (
    <section className="border-b border-ink py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="spice">{b.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{b.h2}</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{b.body}</p>
            <ArrowLink href={b.cta.href} variant="spice" className="mt-8">
              {b.cta.label}
            </ArrowLink>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{b.stepsH2}</h3>
            <ol className="mt-4 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
              {b.steps.map((s) => (
                <li key={s.step} className="border-b border-r border-ink p-5">
                  <span className="font-serif text-4xl leading-none text-spice">{s.step}</span>
                  <h4 className="mt-4 font-bold">{s.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <h2 className="mt-16 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{b.categoriesH2}</h2>
        <div className="mt-10">
          <SourcingCategories />
        </div>

        <div className="mt-12 grid gap-8 border border-ink bg-ocean-deep p-7 text-paper md:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-tight">{b.servicesH2}</h2>
            <p className="mt-4 leading-relaxed text-paper/75">{b.servicesBody}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {b.services.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-[15px]">
                <Check className="mt-1 size-4 shrink-0 text-[#e9a27f]" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <SupplierInvite />
      </Container>
    </section>
  )
}

// Invitation to Indian suppliers who want to export regularly
export function SupplierInvite({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const s = INTERNATIONAL.suppliers
  const Title = headingLevel
  return (
    <div className="mt-12 grid gap-8 border border-ink p-7 md:p-10 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <Eyebrow tone="spice">{s.eyebrow}</Eyebrow>
        <Title className="mt-4 font-serif text-4xl leading-tight">{s.h2}</Title>
        <p className="mt-4 leading-relaxed text-ink-soft">{s.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ArrowLink href={s.cta.href}>{s.cta.label}</ArrowLink>
          <ArrowLink href={s.more.href} variant="outline">
            {s.more.label}
          </ArrowLink>
        </div>
      </div>
      <ul className="grid content-start gap-3 lg:col-span-5 lg:col-start-8">
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 border-b border-rule pb-3 text-[15px]">
            <Check className="mt-1 size-4 shrink-0 text-spice" aria-hidden />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
