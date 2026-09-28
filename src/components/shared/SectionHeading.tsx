import { cn } from "@/lib/utils"
import { Eyebrow } from "./Eyebrow"

export function SectionHeading({
  index,
  eyebrow,
  title,
  body,
  className,
  tone = "ink",
  stacked = false,
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  body?: string
  className?: string
  tone?: "ink" | "paper"
  stacked?: boolean
}) {
  return (
    <div className={cn("grid gap-6", !stacked && "lg:grid-cols-12", className)}>
      <div className={cn(!stacked && "lg:col-span-4")}>
        <Eyebrow index={index} tone={tone === "paper" ? "paper" : "ink"}>
          {eyebrow}
        </Eyebrow>
      </div>
      <div className={cn(!stacked && "lg:col-span-8")}>
        <h2 className={cn("font-serif text-[2.4rem] leading-[1.02] md:text-6xl", tone === "paper" ? "text-paper" : "text-ink")}>{title}</h2>
        {body && (
          <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed", tone === "paper" ? "text-paper/70" : "text-ink-soft")}>{body}</p>
        )}
      </div>
    </div>
  )
}
