import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { BRAND, EXTERNAL, LOGISTICS_PAGES, PHONES, SITE, TRADERS_PAGES } from "@/lib/data"

const GROUP_LINKS = [
  { label: "About the group", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "All ventures", href: "/ventures" },
  { label: "Versa BPO", href: "/bpo" },
  { label: "Versa Financial", href: "/financial" },
  { label: "News & shipments", href: "/news" },
  { label: "Insights", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Glossary", href: "/glossary" },
  { label: "Site map", href: "/site-map" },
  { label: "Contact", href: "/contact" },
  { label: "Image credits", href: "/image-credits" },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <div className="grid gap-12 border-b border-paper/15 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block bg-paper p-5" aria-label={`${SITE.name} — home`}>
              <Image src={BRAND.logo.src} alt={BRAND.logo.alt} width={BRAND.logo.width} height={BRAND.logo.height} className="h-28 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-paper/65">{SITE.tagline}</p>
            <address className="mt-8 not-italic leading-relaxed text-paper/80">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}, {SITE.address.country}
            </address>
            <ul className="mt-6 space-y-1 font-mono text-sm">
              {PHONES.map((p) => (
                <li key={p.href}>
                  <a href={`tel:${p.href}`} className="hover:text-spice">
                    {p.display}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={`mailto:${SITE.email}`} className="hover:text-spice">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Versa Logistics</p>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                <li>
                  <Link href="/logistics" className="hover:text-spice">
                    Overview
                  </Link>
                </li>
                {LOGISTICS_PAGES.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/logistics/${p.slug}`} className="text-paper/75 hover:text-spice">
                      {p.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Versa Traders</p>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                <li>
                  <Link href="/traders" className="hover:text-spice">
                    Overview
                  </Link>
                </li>
                {TRADERS_PAGES.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/traders/${p.slug}`} className="text-paper/75 hover:text-spice">
                      {p.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Group</p>
              <ul className="mt-4 space-y-2.5 text-[15px]">
                {GROUP_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-paper/75 hover:text-spice">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Also from Versa</p>
              <ul className="mt-4 space-y-4 text-[15px]">
                {[EXTERNAL.digital, EXTERNAL.global].map((e) => (
                  <li key={e.url}>
                    <a href={e.url} target="_blank" rel="noopener" className="group inline-flex items-start gap-2 hover:text-spice">
                      <span>
                        {e.name}
                        <span className="block font-mono text-[11px] text-paper/50">{e.label}</span>
                      </span>
                      <ArrowUpRight className="mt-1 size-3.5 shrink-0" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/50 md:flex-row">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>Kakkanad · Kochi · Kerala · India</p>
        </div>
      </div>
    </footer>
  )
}
