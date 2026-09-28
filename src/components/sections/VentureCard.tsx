import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Venture } from "@/types"
import { cn } from "@/lib/utils"
import { VENTURE_ACCENT } from "./HomeHero"

export function VentureCard({ venture: v }: { venture: Venture }) {
  return (
    <article className="flex flex-col border border-ink bg-paper p-7 md:p-10">
      <div className="flex items-start justify-between gap-6">
        <span className={cn("grid size-16 place-items-center font-serif text-3xl", VENTURE_ACCENT[v.accent])} aria-hidden>
          {v.code}
        </span>
        <span className="text-right font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">{v.sector}</span>
      </div>
      <h3 className="mt-10 font-serif text-4xl leading-none md:text-5xl">{v.name}</h3>
      <p className="mt-5 flex-1 leading-relaxed text-ink-2">{v.summary}</p>
      {v.stats && (
        <dl className="mt-6 grid grid-cols-2 gap-px border border-ink bg-ink">
          {v.stats.map((s) => (
            <div key={s.label} className="bg-paper-2 p-4">
              <dd className="font-serif text-4xl leading-none">{s.value}</dd>
              <dt className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      )}
      <ul className="mt-6 flex flex-wrap gap-2">
        {v.highlights.map((h) => (
          <li key={h} className="border border-ink/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em]">
            {h}
          </li>
        ))}
      </ul>
      <Link
        href={v.href}
        className="mt-8 inline-flex min-h-12 items-center justify-between gap-3 self-start border border-ink bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:border-spice hover:bg-spice"
      >
        Explore {v.name}
        <ArrowUpRight className="size-4" aria-hidden />
      </Link>
    </article>
  )
}
