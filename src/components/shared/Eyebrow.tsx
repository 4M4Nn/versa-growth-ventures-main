import { cn } from "@/lib/utils"

export function Eyebrow({
  children,
  index,
  className,
  tone = "ink",
}: {
  children: React.ReactNode
  index?: string
  className?: string
  tone?: "ink" | "paper" | "spice" | "ocean"
}) {
  const tones = {
    ink: "text-ink-soft",
    paper: "text-paper/70",
    spice: "text-spice",
    ocean: "text-ocean",
  }
  return (
    <p className={cn("flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]", tones[tone], className)}>
      {index && <span className="text-spice">{index}</span>}
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      <span>{children}</span>
    </p>
  )
}
