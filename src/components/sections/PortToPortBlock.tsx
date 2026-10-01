import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PORT_TO_PORT } from "@/lib/data"
import { cn } from "@/lib/utils"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Eyebrow } from "@/components/shared/Eyebrow"

export function PortToPortBlock({ tone = "ink", headingLevel = "h2" }: { tone?: "ink" | "paper"; headingLevel?: "h2" | "h3" }) {
  const p = PORT_TO_PORT
  const dark = tone === "paper"
  const Title = headingLevel
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Eyebrow tone={dark ? "paper" : "ocean"}>{p.eyebrow}</Eyebrow>
        <Title className="mt-5 font-serif text-4xl leading-[1.05] md:text-5xl">{p.h2}</Title>
        <p className={cn("mt-5 leading-relaxed", dark ? "text-paper/75" : "text-ink-soft")}>{p.body}</p>
        <ul className="mt-6 grid gap-2.5 text-[15px] sm:grid-cols-2">
          {p.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5">
              <Check className={cn("mt-1 size-4 shrink-0", dark ? "text-[#e9a27f]" : "text-spice")} aria-hidden />
              {pt}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ArrowLink href={p.cta.href} variant="spice">
            {p.cta.label}
          </ArrowLink>
          <ArrowLink href={p.more.href} variant={dark ? "ghost" : "outline"}>
            {p.more.label}
          </ArrowLink>
        </div>
      </div>
      <div className="lg:col-span-7">
        <p className={cn("font-mono text-[11px] uppercase tracking-[0.2em]", dark ? "text-paper/55" : "text-ink-soft")}>{p.lanesLabel}</p>
        <ul className={cn("mt-4 grid border-l border-t sm:grid-cols-2", dark ? "border-paper/25" : "border-ink")}>
          {p.lanes.map((l) => (
            <li key={`${l.from}-${l.to}`} className={cn("border-b border-r", dark ? "border-paper/25" : "border-ink")}>
              <Link
                href={l.href}
                className={cn(
                  "group flex h-full flex-col gap-2 p-5 transition-colors",
                  dark ? "hover:bg-paper hover:text-ink" : "hover:bg-ocean-deep hover:text-paper"
                )}
              >
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 font-serif text-2xl leading-tight">
                  {l.from}
                  <ArrowRight className={cn("size-4 shrink-0", dark ? "text-[#e9a27f] group-hover:text-spice" : "text-spice group-hover:text-[#e9a27f]")} aria-hidden />
                  {l.to}
                </span>
                <span
                  className={cn(
                    "font-mono text-[10.5px] uppercase tracking-[0.14em]",
                    dark ? "text-paper/55 group-hover:text-ink-soft" : "text-ink-soft group-hover:text-paper/65"
                  )}
                >
                  {l.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
