import type { Metadata } from "next"
import Link from "next/link"
import { BLOG_POSTS, EXTERNAL, LOGISTICS_PAGES, NEWS, PAGE_COPY, TRADERS_PAGES, VENTURES } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"

const copy = PAGE_COPY.siteMap

export const metadata: Metadata = {
  title: copy.metaTitle,
  description: copy.metaDescription,
  alternates: { canonical: "/site-map" },
}

export default function SiteMapPage() {
  const groups = [
    {
      title: "Versa Logistics",
      links: [{ label: "Versa Logistics overview", href: "/logistics" }, ...LOGISTICS_PAGES.map((p) => ({ label: p.navLabel, href: `/logistics/${p.slug}` }))],
    },
    {
      title: "Versa Traders",
      links: [{ label: "Versa Traders overview", href: "/traders" }, ...TRADERS_PAGES.map((p) => ({ label: p.navLabel, href: `/traders/${p.slug}` }))],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Versa Growth Ventures", href: "/about" },
        { label: "Leadership", href: "/leadership" },
        { label: "All ventures", href: "/ventures" },
        { label: "Versa BPO", href: "/bpo" },
        { label: "Versa Financial", href: "/financial" },
        ...VENTURES.filter((v) => v.external).map((v) => ({ label: v.name, href: `/ventures/${v.slug}` })),
        { label: "FAQ", href: "/faq" },
        { label: "Glossary", href: "/glossary" },
        { label: "Contact", href: "/contact" },
        { label: "Image credits", href: "/image-credits" },
      ],
    },
    { title: "News & shipments", links: [{ label: "All news", href: "/news" }, ...NEWS.map((n) => ({ label: n.title, href: `/news/${n.slug}` }))] },
    { title: "Insights", links: [{ label: "All insights", href: "/blog" }, ...BLOG_POSTS.map((p) => ({ label: p.title, href: `/blog/${p.slug}` }))] },
  ]

  return (
    <>
      <PageHero crumbs={[{ label: "Site map", href: "/site-map" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24 lg:grid-cols-3">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="border-b border-ink pb-3 font-serif text-3xl">{g.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[15px] leading-snug underline-offset-4 hover:text-spice hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section>
          <h2 className="border-b border-ink pb-3 font-serif text-3xl">Other Versa websites</h2>
          <ul className="mt-4 space-y-2.5">
            {[EXTERNAL.digital, EXTERNAL.global].map((e) => (
              <li key={e.url}>
                <a href={e.url} target="_blank" rel="noopener" className="text-[15px] underline-offset-4 hover:text-spice hover:underline">
                  {e.name} — {e.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  )
}
