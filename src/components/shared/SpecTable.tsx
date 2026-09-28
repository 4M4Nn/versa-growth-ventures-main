import type { Spec } from "@/types"
import { cn } from "@/lib/utils"

export function SpecTable({ specs, title = "Specification", tone = "paper" }: { specs: Spec[]; title?: string; tone?: "paper" | "ink" }) {
  const dark = tone === "ink"
  return (
    <div className={cn("border", dark ? "border-paper/25 bg-ink text-paper" : "border-ink bg-paper")}>
      <p
        className={cn(
          "border-b px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em]",
          dark ? "border-paper/25 text-paper/60" : "border-ink text-ink-soft"
        )}
      >
        {title}
      </p>
      <dl>
        {specs.map((s) => (
          <div
            key={s.label}
            className={cn(
              "grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 border-b px-5 py-3 last:border-b-0",
              dark ? "border-paper/15" : "border-rule"
            )}
          >
            <dt className={cn("font-mono text-[11px] uppercase tracking-[0.12em]", dark ? "text-paper/60" : "text-ink-soft")}>{s.label}</dt>
            <dd className="text-sm font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
