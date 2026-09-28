import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_SECTIONS, VENTURES } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { Headline } from "@/components/shared/Headline"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

export function VenturesLedger({ showHeading = true }: { showHeading?: boolean }) {
  const Title = showHeading ? "h3" : "h2"
  return (
    <section className="py-20 md:py-28">
      <Container>
        {showHeading && (
          <SectionHeading
            index={HOME_SECTIONS.ventures.index}
            eyebrow={HOME_SECTIONS.ventures.eyebrow}
            title={<Headline value={HOME_SECTIONS.ventures.title} />}
            body={HOME_SECTIONS.ventures.body}
          />
        )}
        <ol className={showHeading ? "mt-14 border-t border-ink" : "border-t border-ink"}>
          {VENTURES.map((v, i) => (
            <li key={v.slug} className="group relative border-b border-ink transition-colors duration-300 hover:bg-ink hover:text-paper">
              <Reveal delay={i * 60}>
                  <Link href={v.href} className="grid gap-4 px-2 py-8 md:grid-cols-12 md:items-center md:gap-6 md:px-4">
                    <span className="font-mono text-sm text-spice md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="md:col-span-4">
                      <Title className="font-serif text-3xl leading-none md:text-[2.6rem]">{v.name}</Title>
                      <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft group-hover:text-paper/60">
                        {v.sector}
                      </span>
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft group-hover:text-paper/75 md:col-span-5">{v.summary}</span>
                    <span className="flex items-center justify-between gap-3 md:col-span-2 md:justify-end">
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                        {v.external ? v.liveLabel : "Explore"}
                      </span>
                      <span className="grid size-10 place-items-center border border-current transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </span>
                  </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
