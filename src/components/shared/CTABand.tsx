import { Phone } from "lucide-react"
import { PHONES } from "@/lib/data"
import { Container } from "./Container"
import { ArrowLink } from "./ArrowLink"

export function CTABand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string; external?: boolean }
}) {
  return (
    <section className="bg-ink text-paper">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl leading-[1.05] md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-paper/70">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowLink href={primary.href} variant="spice">
              {primary.label}
            </ArrowLink>
            {secondary && (
              <ArrowLink href={secondary.href} external={secondary.external} variant="ghost">
                {secondary.label}
              </ArrowLink>
            )}
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Call the desk</p>
          <ul className="mt-4 divide-y divide-paper/15 border-y border-paper/15">
            {PHONES.map((p) => (
              <li key={p.href}>
                <a href={`tel:${p.href}`} className="flex items-center justify-between py-4 font-mono text-lg transition-colors hover:text-spice">
                  {p.display}
                  <Phone className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
