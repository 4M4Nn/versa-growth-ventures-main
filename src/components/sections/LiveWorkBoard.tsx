import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { LIVE_WORK } from "@/lib/data"
import { Headline } from "@/components/shared/Headline"

export function LiveWorkBoard({ headingLevel = "h3", showLink = true }: { headingLevel?: "h2" | "h3"; showLink?: boolean }) {
  const Title = headingLevel
  return (
    <div className="grid border border-ink bg-ink text-paper lg:grid-cols-12">
      <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:col-span-5">
        <div>
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/65">
            <span className="relative flex size-2.5" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-leaf" />
            </span>
            {LIVE_WORK.status} · {LIVE_WORK.asOf}
          </p>
          <Title className="mt-6 font-serif text-4xl leading-[1.02] md:text-5xl">
            <Headline value={LIVE_WORK.title} />
          </Title>
          <p className="mt-4 max-w-md leading-relaxed text-paper/70">{LIVE_WORK.body}</p>
        </div>
        {showLink && (
          <Link
            href={LIVE_WORK.href}
            className="group inline-flex min-h-12 w-fit items-center gap-3 border border-paper/40 px-5 text-sm font-semibold transition-colors hover:border-spice hover:bg-spice"
          >
            {LIVE_WORK.linkLabel}
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" aria-hidden />
          </Link>
        )}
      </div>
      <dl className="grid grid-cols-2 gap-px border-t border-paper/20 bg-paper/20 lg:col-span-7 lg:border-l lg:border-t-0">
        {LIVE_WORK.items.map((item) => (
          <div key={item.label} className="flex flex-col-reverse justify-end gap-3 bg-ink p-6 md:p-8">
            <dt>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-paper">{item.label}</span>
              <span className="mt-1.5 block text-sm leading-snug text-paper/60">{item.detail}</span>
            </dt>
            <dd className="font-serif text-6xl leading-none md:text-7xl">{item.count}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
