import type { Plate } from "@/types"
import { cn } from "@/lib/utils"

// Typographic cover for posts and news that have no photograph
export function CoverPlate({
  plate,
  label,
  aspect = "aspect-[16/10]",
  size = "card",
  className,
}: {
  plate: Plate
  label?: string
  aspect?: string
  size?: "card" | "figure"
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden border border-ink bg-ink text-paper",
        size === "figure" ? "p-6 md:p-10" : "p-5",
        aspect,
        className
      )}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">{label}</span>
      <span>
        <span
          className={cn(
            "block break-words font-serif leading-[0.95]",
            size === "figure" ? "text-5xl sm:text-6xl md:text-7xl" : "text-4xl sm:text-[2.6rem]"
          )}
        >
          {plate.title}
        </span>
        <span className="mt-3 block max-w-md border-t border-paper/25 pt-3 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.14em] text-paper/65">
          {plate.note}
        </span>
      </span>
      <span className="pointer-events-none absolute -right-6 -top-10 size-40 rounded-full border border-paper/10" aria-hidden />
      <span className="pointer-events-none absolute -right-14 -top-16 size-64 rounded-full border border-paper/10" aria-hidden />
    </div>
  )
}
