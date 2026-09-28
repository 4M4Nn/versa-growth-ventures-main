import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { HOME_SECTIONS, VENTURES } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ConnectedVentures({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  const external = VENTURES.filter((v) => v.external)
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {external.map((v) => (
        <article
          key={v.slug}
          className={cn("flex flex-col border border-ink p-7 md:p-10", v.accent === "brass" ? "bg-[#efe3c6]" : "bg-ink text-paper")}
        >
          <div className="flex items-start justify-between gap-6">
            <span
              className={cn(
                "grid size-16 place-items-center border font-serif text-3xl",
                v.accent === "brass" ? "border-ink" : "border-paper/40"
              )}
              aria-hidden
            >
              {v.code}
            </span>
            <span className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", v.accent === "brass" ? "text-ink-soft" : "text-paper/55")}>
              {v.sector}
            </span>
          </div>
          <Title className="mt-10 font-serif text-4xl leading-none md:text-5xl">{v.name}</Title>
          <p className={cn("mt-5 flex-1 leading-relaxed", v.accent === "brass" ? "text-ink-2" : "text-paper/75")}>{v.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {v.highlights.map((h) => (
              <li
                key={h}
                className={cn(
                  "border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em]",
                  v.accent === "brass" ? "border-ink/40" : "border-paper/30"
                )}
              >
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={v.liveUrl}
              target="_blank"
              rel="noopener"
              className={cn(
                "inline-flex min-h-12 items-center gap-3 border px-5 text-sm font-semibold transition-colors",
                v.accent === "brass" ? "border-ink bg-ink text-paper hover:bg-spice hover:border-spice" : "border-paper bg-paper text-ink hover:bg-spice hover:text-paper hover:border-spice"
              )}
            >
              {HOME_SECTIONS.labels.visitSite} {v.liveLabel}
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <Link href={v.href} className="text-sm font-semibold underline underline-offset-4">
              About {v.name}
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
