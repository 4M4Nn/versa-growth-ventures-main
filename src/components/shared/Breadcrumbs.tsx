import Link from "next/link"
import { SITE } from "@/lib/data"
import { cn } from "@/lib/utils"
import { JsonLd } from "./JsonLd"

export interface Crumb {
  label: string
  href: string
}

export function Breadcrumbs({ items, tone = "ink" }: { items: Crumb[]; tone?: "ink" | "paper" }) {
  const all = [{ label: "Home", href: "/" }, ...items]
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={cn("font-mono text-[11px] uppercase tracking-[0.16em]", tone === "ink" ? "text-ink-soft" : "text-paper/60")}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className={tone === "ink" ? "text-ink" : "text-paper"}>
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} className="underline-offset-4 hover:underline">
                  {c.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </>
  )
}
