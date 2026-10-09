import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { TRADING_DESK } from "@/lib/data"

// Onion trading and coffee bean trading — the two headline Versa International Traders desks
export function TradingDesk({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {TRADING_DESK.map((desk) => (
        <article key={desk.cta.href} className="group flex flex-col border border-ink bg-ink text-paper">
          <div className="relative aspect-[16/8] overflow-hidden border-b border-ink">
            <Image
              src={desk.image.src}
              alt={desk.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute left-4 top-4 bg-paper px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink">{desk.kicker}</span>
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-8">
            <Title className="font-serif text-4xl leading-[1.02] md:text-[2.6rem]">{desk.title}</Title>
            <p className="mt-4 leading-relaxed text-paper/75">{desk.body}</p>
            <dl className="mt-6 grid grid-cols-2 gap-px border border-paper/20 bg-paper/20">
              {desk.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse justify-end gap-2 bg-ink p-4">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-paper/60">{s.label}</dt>
                  <dd className="font-serif text-4xl leading-none text-[#e9a27f]">{s.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {desk.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-[#e9a27f] hover:underline">
                    {l.label}
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={desk.cta.href}
              className="mt-8 inline-flex min-h-12 w-fit items-center gap-3 border border-spice bg-spice px-5 text-sm font-semibold transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              {desk.cta.label}
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
