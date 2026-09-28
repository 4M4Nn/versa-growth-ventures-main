import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME, STATS, VENTURES } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { cn } from "@/lib/utils"

export const VENTURE_ACCENT: Record<string, string> = {
  ink: "bg-navy text-paper",
  ocean: "bg-ocean text-paper",
  spice: "bg-spice text-paper",
  green: "bg-leaf text-paper",
  brass: "bg-brass text-ink",
}

export function HomeHero() {
  return (
    <section className="paper-grain border-b border-ink">
      <Container className="grid gap-12 pb-14 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-20">
        <div className="lg:col-span-7">
          <Eyebrow index="00">{HOME.eyebrow}</Eyebrow>
          <h1 className="mt-8 font-serif text-[2.6rem] leading-[1] tracking-[-0.015em] text-ink sm:text-6xl md:text-[4rem] xl:text-[4.4rem]">
            {HOME.h1.map(([plain, emphasis]) => (
              <span key={plain + (emphasis ?? "")} className="sm:block">
                {plain}
                {emphasis && <em className="text-leaf">{emphasis}</em>}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-ink-soft md:text-lg">{HOME.lede}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href={HOME.primaryCta.href}>{HOME.primaryCta.label}</ArrowLink>
            <ArrowLink href={HOME.secondaryCta.href} variant="outline">
              {HOME.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>

        <nav aria-label={HOME.gridLabel} className="lg:col-span-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{HOME.gridLabel}</p>
          <ul className="grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2">
            {VENTURES.map((v) => (
              <li key={v.slug} className="bg-paper">
                <Link href={v.href} className="group flex h-full flex-col gap-4 p-5 transition-colors hover:bg-ink hover:text-paper">
                  <span className="flex items-start justify-between gap-3">
                    <span className={cn("grid size-11 place-items-center font-serif text-xl", VENTURE_ACCENT[v.accent])} aria-hidden>
                      {v.code}
                    </span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-serif text-2xl leading-tight">{v.name}</span>
                    <span className="mt-1.5 block font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.12em] text-ink-soft group-hover:text-paper/65">
                      {v.sector}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-l border-t border-ink md:grid-cols-3 xl:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.label} className="border-b border-r border-ink p-5 md:p-6">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-soft">{s.label}</dt>
              <dd className="mt-2 font-serif text-5xl leading-none text-ink">{s.value}</dd>
              <dd className="mt-3 text-[13px] leading-snug text-ink-soft">{s.note}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <div className="h-14 md:h-20" aria-hidden />
    </section>
  )
}
