import type { ImageAsset } from "@/types"
import { cn } from "@/lib/utils"
import { Breadcrumbs, type Crumb } from "./Breadcrumbs"
import { Container } from "./Container"
import { Eyebrow } from "./Eyebrow"
import { Figure } from "./Figure"

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lede,
  image,
  answer,
  accent = "spice",
  children,
}: {
  crumbs: Crumb[]
  eyebrow: string
  title: string
  lede: string
  image?: ImageAsset
  answer?: string
  accent?: "spice" | "ocean"
  children?: React.ReactNode
}) {
  return (
    <header className="paper-grain border-b border-ink">
      <Container className="pb-14 pt-8 md:pb-20 md:pt-10">
        <Breadcrumbs items={crumbs} />
        <div className={cn("mt-10 grid gap-12 md:mt-14", image && "lg:grid-cols-12 lg:gap-14")}>
          <div className={cn(image ? "lg:col-span-7" : "max-w-4xl")}>
            <Eyebrow tone={accent}>{eyebrow}</Eyebrow>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-ink sm:text-5xl md:text-[4.1rem]">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{lede}</p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
          {image && (
            <div className="lg:col-span-5">
              <Figure image={image} priority aspect="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
            </div>
          )}
        </div>
        {answer && (
          <div
            className={cn(
              "mt-12 grid gap-4 border-l-2 bg-paper-2/70 p-6 md:grid-cols-[180px_1fr] md:p-8",
              accent === "ocean" ? "border-ocean" : "border-spice"
            )}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">In short</p>
            <p className="text-[17px] leading-relaxed text-ink">{answer}</p>
          </div>
        )}
      </Container>
    </header>
  )
}
