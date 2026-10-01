import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BRAND, NEWS, NEWS_DESKS, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { Breadcrumbs } from "@/components/shared/Breadcrumbs"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { Figure } from "@/components/shared/Figure"
import { CoverPlate } from "@/components/shared/CoverPlate"
import { SpecTable } from "@/components/shared/SpecTable"
import { ArticleSections } from "@/components/shared/ArticleSections"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { JsonLd } from "@/components/shared/JsonLd"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const n = NEWS.find((x) => x.slug === slug)
  if (!n) return {}
  return {
    title: n.title,
    description: n.metaDescription,
    keywords: n.keywords,
    alternates: { canonical: `/news/${n.slug}` },
    openGraph: { type: "article", title: n.title, description: n.metaDescription, images: [n.image?.src ?? BRAND.og.src], publishedTime: n.date },
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const n = NEWS.find((x) => x.slug === slug)
  if (!n) notFound()
  const d = NEWS_DESKS[n.division]
  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).filter((x) => x.slug !== n.slug)
  // Same-desk stories first, then the latest from the rest of the group
  const others = [...sorted.filter((x) => x.division === n.division), ...sorted.filter((x) => x.division !== n.division)].slice(0, 6)

  return (
    <>
      <article>
        <header className="paper-grain border-b border-ink">
          <Container className="pb-14 pt-8 md:pb-20 md:pt-10">
            <Breadcrumbs
              items={[
                { label: "News", href: "/news" },
                { label: n.kicker, href: `/news/${n.slug}` },
              ]}
            />
            <div className="mt-10 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Eyebrow tone="ocean">
                  {n.kicker} · <time dateTime={n.date}>{n.dateLabel}</time>
                </Eyebrow>
                <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.03] sm:text-5xl md:text-6xl">{n.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{n.lede}</p>
              </div>
              <div className="lg:col-span-5">
                <SpecTable specs={n.manifest} title={n.manifestTitle ?? "Shipment manifest"} tone="ink" />
              </div>
            </div>
          </Container>
        </header>

        <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {n.image ? (
              <Figure image={n.image} aspect="aspect-[16/10]" />
            ) : (
              n.plate && <CoverPlate plate={n.plate} label={d.name} size="figure" aspect="aspect-[16/10] sm:aspect-[16/8]" />
            )}
            <div className="prose-ledger mt-6 text-[17px]">
              <ArticleSections sections={n.body} />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="border border-ink p-6">
                <p className="font-serif text-2xl leading-tight">{d.ctaTitle}</p>
                <p className="mt-3 text-[15px] text-ink-soft">{d.ctaBody}</p>
                <ArrowLink href={d.cta.href} external={d.cta.external} className="mt-5 w-full">
                  {d.cta.label}
                </ArrowLink>
              </div>
              <nav aria-label="More news" className="border border-ink">
                <p className="border-b border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">More news</p>
                <ul>
                  {others.map((o) => (
                    <li key={o.slug} className="border-b border-rule last:border-b-0">
                      <Link href={`/news/${o.slug}`} className="block px-5 py-4 text-[15px] font-medium leading-snug hover:bg-paper-2">
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </Container>
      </article>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: n.title,
          description: n.metaDescription,
          image: [`${SITE.url}${n.image?.src ?? BRAND.og.src}`],
          keywords: n.keywords.join(", "),
          articleSection: d.name,
          datePublished: n.date,
          dateModified: n.date,
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: `${SITE.url}/news/${n.slug}`,
        }}
      />
    </>
  )
}
