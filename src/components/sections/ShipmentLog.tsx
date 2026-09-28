import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { NewsItem } from "@/types"

export function ShipmentLog({ items, headingLevel = "h3" }: { items: NewsItem[]; headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <ol className="border-t border-ink">
      {items.map((n) => {
        const equipment = n.manifest.find((m) => m.label === "Equipment")?.value
        const destination = n.manifest.find((m) => m.label === "Destination" || m.label === "UAE ports")?.value
        return (
          <li key={n.slug} className="border-b border-ink">
            <Link href={`/news/${n.slug}`} className="group grid gap-3 py-7 transition-colors hover:bg-paper-2 md:grid-cols-12 md:items-center md:gap-6 md:px-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:col-span-2">
                <time dateTime={n.date}>{n.dateLabel}</time>
              </span>
              <span className="md:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-spice">{n.kicker}</span>
                <Title className="mt-1 font-serif text-2xl leading-tight md:text-[1.9rem]">{n.title}</Title>
              </span>
              <span className="font-mono text-[12px] uppercase leading-relaxed tracking-[0.1em] text-ink md:col-span-2">
                {equipment}
                <span className="block text-ink-soft">{destination}</span>
              </span>
              <span className="hidden justify-end md:col-span-1 md:flex">
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" aria-hidden />
              </span>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
