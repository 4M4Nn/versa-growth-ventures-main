"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, Phone } from "lucide-react"
import { BRAND, LOGISTICS_PAGES, NAV_LINKS, PHONES, SITE, TRADERS_PAGES } from "@/lib/data"
import type { NavLink } from "@/types"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// Division menus are built from the page data so new service/product pages appear automatically.
const MENU: NavLink[] = NAV_LINKS.map((link) => {
  if (link.href === "/logistics")
    return { ...link, children: [{ label: "Versa Logistics overview", href: "/logistics" }, { label: "Get a freight quote", href: "/logistics/freight-quote" }, ...LOGISTICS_PAGES.map((p) => ({ label: p.navLabel, href: `/logistics/${p.slug}` }))] }
  if (link.href === "/traders")
    return { ...link, children: [{ label: "Versa International Traders overview", href: "/traders" }, ...TRADERS_PAGES.map((p) => ({ label: p.navLabel, href: `/traders/${p.slug}` }))] }
  if (link.href === "/ventures" && link.children)
    return { ...link, children: [{ label: "All ventures", href: "/ventures", description: "The six businesses of Versa Growth Ventures" }, ...link.children] }
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
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const closeMenus = () => setOpenMenu(null)

  // Close an open dropdown on outside click or Escape.
  useEffect(() => {
    if (!openMenu) return
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [openMenu])
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between gap-6 px-5 md:px-10">
        <Wordmark />

        <nav ref={navRef} aria-label="Main" className="hidden items-center xl:flex">
          <ul className="flex items-center">
            {MENU.map((link) =>
              link.children ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === link.label}
                    aria-controls={`menu-${link.href.slice(1)}`}
                    onClick={() => setOpenMenu((current) => (current === link.label ? null : link.label))}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-[14px] font-semibold text-ink transition-colors hover:text-spice",
                      (isActive(link.href) || openMenu === link.label) && "text-spice"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("size-3.5 transition-transform duration-300", openMenu === link.label && "rotate-180")} aria-hidden />
                  </button>
                  <div
                    id={`menu-${link.href.slice(1)}`}
                    className={cn(
                      "absolute left-0 top-full pt-3 transition-all duration-200",
                      openMenu === link.label ? "visible translate-y-0 opacity-100" : "invisible pointer-events-none translate-y-2 opacity-0",
                      link.children.length > 6 ? "w-[600px]" : "w-[380px]"
                    )}
                  >
                    <ul className={cn("border border-ink bg-paper shadow-[6px_6px_0_0_#15130f]", link.children.length > 6 && "grid grid-cols-2")}>
                      {link.children.map((c) => {
                        const itemClass = cn(
                          "group/item flex items-start justify-between gap-4 px-5 transition-colors hover:bg-ink hover:text-paper",
                          c.description ? "py-4" : "py-3",
                          pathname === c.href && "text-spice"
                        )
                        const inner = (
                          <>
                            <span>
                              <span className="block text-[15px] font-semibold">{c.label}</span>
                              {c.description && <span className="mt-1 block text-[13px] text-ink-soft group-hover/item:text-paper/70">{c.description}</span>}
                            </span>
                            <ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden />
                          </>
                        )
                        return (
                          <li key={c.href} className={cn("border-b border-rule", link.children!.length > 6 ? "odd:border-r" : "last:border-b-0")}>
                            {c.external ? (
                              <a href={c.href} target="_blank" rel="noopener" onClick={closeMenus} className={itemClass}>
                                {inner}
                              </a>
                            ) : (
                              <Link href={c.href} onClick={closeMenus} className={itemClass}>
                                {inner}
                              </Link>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenus}
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
            href="/logistics/freight-quote"
            onClick={closeMenus}
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
                              <Link
                                href={c.href}
                                onClick={() => setOpen(false)}
                                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                                className="flex items-center justify-between py-2 text-[15px] font-medium text-ink-soft hover:text-spice"
                              >
                                {c.label}
                                {c.external && <ArrowUpRight className="size-4" aria-hidden />}
                              </Link>
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
