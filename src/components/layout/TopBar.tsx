import { MapPin } from "lucide-react"
import { PHONES, SITE } from "@/lib/data"

export function TopBar() {
  return (
    <div className="hidden bg-ink text-paper md:block">
      <div className="mx-auto flex h-9 w-full max-w-[1320px] items-center justify-between gap-6 px-5 font-mono text-[11px] uppercase tracking-[0.14em] md:px-10">
        <p className="flex items-center gap-2 text-paper/70">
          <MapPin className="size-3.5" aria-hidden />
          {SITE.address.line2}, {SITE.address.city} {SITE.address.postalCode}
        </p>
        <ul className="flex items-center gap-5">
          {PHONES.map((p) => (
            <li key={p.href}>
              <a href={`tel:${p.href}`} className="transition-colors hover:text-spice">
                {p.display}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
