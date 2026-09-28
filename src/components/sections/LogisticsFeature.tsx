import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_SECTIONS, LOGISTICS_HUB } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Headline } from "@/components/shared/Headline"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { RouteMap } from "./RouteMap"

export function LogisticsFeature() {
  const copy = HOME_SECTIONS.logistics
  return (
    <section className="bg-ocean-deep text-paper">
      <Container className="py-20 md:py-28">
        <SectionHeading
          tone="paper"
          index={copy.index}
          eyebrow={copy.eyebrow}
          title={<Headline value={copy.title} emClassName="text-[#e9a27f]" />}
          body={copy.body}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="border border-paper/25 p-5">
              <RouteMap />
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap gap-3">
                <ArrowLink href="/logistics/freight-quote" variant="spice">
                  Get a freight quote
                </ArrowLink>
                <ArrowLink href="/logistics" variant="ghost">
                  {HOME_SECTIONS.labels.exploreLogistics}
                </ArrowLink>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/55">{HOME_SECTIONS.labels.logisticsServices}</p>
            <ul className="mt-4 grid border-l border-t border-paper/25 sm:grid-cols-2">
              {LOGISTICS_HUB.services.map((s, i) => (
                <li key={s.href} className="border-b border-r border-paper/25">
                  <Link href={s.href} className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-paper hover:text-ink">
                    <span>
                      <span className="font-mono text-[11px] text-[#e9a27f] group-hover:text-spice">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-paper/70 group-hover:text-ink-soft">{s.body}</p>
                    </span>
                    <ArrowUpRight className="size-4 self-end transition-transform group-hover:rotate-45" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
