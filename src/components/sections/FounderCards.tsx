import { FOUNDERS } from "@/lib/data"

export function FounderCards({ full = false, headingLevel = "h3" }: { full?: boolean; headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <ul className="grid border-l border-t border-ink md:grid-cols-3">
      {FOUNDERS.map((f, i) => (
        <li key={f.name} className="flex flex-col border-b border-r border-ink p-7 md:p-8">
          <div className="flex items-center justify-between">
            <span className="grid size-20 place-items-center border border-ink bg-paper-2 font-serif text-4xl text-ink" aria-hidden>
              {f.monogram}
            </span>
            <span className="font-mono text-sm text-spice">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <Title className="mt-8 font-serif text-3xl leading-none md:text-4xl">{f.name}</Title>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            {f.role} — {f.focus}
          </p>
          <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-2">
            {(full ? f.bio : f.bio.slice(0, 1)).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
