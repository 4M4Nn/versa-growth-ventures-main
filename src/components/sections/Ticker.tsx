import { TICKER } from "@/lib/data"

export function Ticker() {
  const items = [...TICKER, ...TICKER]
  return (
    <div className="overflow-hidden border-b border-ink bg-spice py-4 text-paper" aria-label="What we move and trade">
      <ul className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.18em]">
        {items.map((t, i) => (
          <li key={`${t}-${i}`} className="flex items-center gap-10" aria-hidden={i >= TICKER.length}>
            {t}
            <span className="inline-block size-1.5 rotate-45 bg-paper" aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  )
}
