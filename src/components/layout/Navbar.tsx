"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react"
import { BRAND, LOGISTICS_PAGES, NAV_LINKS, PHONES, SITE, TRADERS_PAGES } from "@/lib/data"
import type { NavLink } from "@/types"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Division menus are built from the page data so new service/product pages appear automatically.
const MENU: NavLink[] = NAV_LINKS.map((link) => {
  if (link.href === "/logistics")
    return { ...link, children: [{ label: "Versa Logistics overview", href: "/logistics" }, ...LOGISTICS_PAGES.map((p) => ({ label: p.navLabel, href: `/logistics/${p.slug}` }))] }
  if (link.href === "/traders")
    return { ...link, children: [{ label: "Versa Traders overview", href: "/traders" }, ...TRADERS_PAGES.map((p) => ({ label: p.navLabel, href: `/traders/${p.slug}` }))] }
  return link
})

function Wordmark() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label={`${SITE.name} — home`}>
      <Image
        src={BRAND.mark.src}
        alt={BRAND.mark.alt}
        width={BRAND.mark.width}
        height={BRAND.mark.height}
        priority
        className="h-10 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-11"
      />
      <span className="leading-none">
        <span className="block whitespace-nowrap font-serif text-[18px] tracking-tight text-ink sm:text-[22px]">Versa Growth Ventures</span>
        <span className="mt-1 block font-mono text-[9.5px] uppercase tracking-[0.22em] text-ink-soft">Est. {SITE.founded} · Kochi</span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between gap-6 px-5 md:px-10">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center xl:flex">
          <ul className="flex items-center">
            {MENU.map((link) =>
              link.children ? (
                <li key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-[14px] font-semibold text-ink transition-colors hover:text-spice",
                      isActive(link.href) && "text-spice"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
                  </Link>
                  <div className={cn("invisible absolute left-0 top-full translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100", link.children.length > 6 ? "w-[600px]" : "w-[380px]")}>
                    <ul className={cn("border border-ink bg-paper", link.children.length > 6 && "grid grid-cols-2")}>
                      {link.children.map((c) => (
                        <li key={c.href} className={cn("border-b border-rule", link.children!.length > 6 ? "odd:border-r" : "last:border-b-0")}>
                          <a
                            href={c.href}
                            {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                            className={cn("group/item flex items-start justify-between gap-4 px-5 transition-colors hover:bg-ink hover:text-paper", c.description ? "py-4" : "py-3")}
                          >
                            <span>
                              <span className="block text-[15px] font-semibold">{c.label}</span>
                              {c.description && <span className="mt-1 block text-[13px] text-ink-soft group-hover/item:text-paper/70">{c.description}</span>}
                            </span>
                            <ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-[14px] font-semibold text-ink transition-colors hover:text-spice",
                      isActive(link.href) && "text-spice"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center gap-2 border border-ink bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:border-spice hover:bg-spice sm:inline-flex"
          >
            Get a quote
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid size-11 place-items-center border border-ink text-ink transition-colors hover:bg-ink hover:text-paper xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm overflow-y-auto border-l border-ink bg-paper p-0 sm:max-w-sm">
              <SheetHeader className="border-b border-ink px-6 py-5 text-left">
                <SheetTitle className="flex items-center gap-3 font-serif text-2xl font-normal">
                  <Image src={BRAND.mark.src} alt="" width={BRAND.mark.width} height={BRAND.mark.height} className="h-9 w-auto" />
                  Versa Growth Ventures
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-6 py-4">
                <ul>
                  {MENU.map((link) => (
                    <li key={link.label} className="border-b border-rule">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn("block py-4 font-serif text-2xl", isActive(link.href) ? "text-spice" : "text-ink")}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <ul className="pb-4">
                          {link.children.map((c) => (
                            <li key={c.href}>
                              <a
                                href={c.href}
                                onClick={() => setOpen(false)}
                                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                                className="flex items-center justify-between py-2 text-[15px] font-medium text-ink-soft hover:text-spice"
                              >
                                {c.label}
                                {c.external && <ArrowUpRight className="size-4" aria-hidden />}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  <li className="border-b border-rule">
                    <Link href="/contact" onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl text-ink">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 space-y-2">
                  {PHONES.map((p) => (
                    <a key={p.href} href={`tel:${p.href}`} className="flex items-center gap-3 font-mono text-sm text-ink hover:text-spice">
                      <Phone className="size-4" aria-hidden />
                      {p.display}
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 flex min-h-12 items-center justify-between bg-spice px-5 text-sm font-semibold text-paper"
                >
                  Request a quote
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
