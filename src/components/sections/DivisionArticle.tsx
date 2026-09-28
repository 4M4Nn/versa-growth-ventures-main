import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"
import type { DivisionPage } from "@/types"
import { DIVISION_COPY, PHONES, SITE, whatsappLink } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { SpecTable } from "@/components/shared/SpecTable"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { ArticleSections } from "@/components/shared/ArticleSections"

export function DivisionArticle({ page, siblings }: { page: DivisionPage; siblings: DivisionPage[] }) {
  const d = DIVISION_COPY[page.division]
  const url = `${SITE.url}${d.hub}/${page.slug}`
  const related = page.related
    .map((slug) => siblings.find((s) => s.slug === slug))
    .filter((p): p is DivisionPage => Boolean(p))

  const schema =
    page.division === "logistics"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.navLabel,
          serviceType: page.navLabel,
          description: page.summary,
          url,
          areaServed: ["India", "United Arab Emirates", "Worldwide"],
          provider: { "@type": "Organization", name: d.name, parentOrganization: { "@id": `${SITE.url}/#organization` } },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Product",
          name: page.navLabel,
          description: page.summary,
          image: `${SITE.url}${page.image.src}`,
          url,
          brand: { "@type": "Brand", name: d.name },
          countryOfOrigin: "IN",
          additionalProperty: (page.specs ?? []).map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
        }

  return (
    <>
      <PageHero
        crumbs={[
          { label: d.name, href: d.hub },
          { label: page.navLabel, href: `${d.hub}/${page.slug}` },
        ]}
        eyebrow={page.eyebrow}
        title={page.h1}
        lede={page.lede}
        image={page.image}
        answer={page.summary}
        accent={d.accent}
      />

      <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        <aside className="order-2 lg:order-1 lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            {page.specs && <SpecTable specs={page.specs} title={d.specTitle} />}
            <div className="border border-ink bg-ink p-6 text-paper">
              <p className="font-serif text-2xl leading-tight">{d.ctaTitle}</p>
              <Link
                href={d.cta.href}
                className="mt-5 flex min-h-12 items-center justify-between bg-spice px-4 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
              >
                {d.cta.label}
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <a
                href={whatsappLink(d.whatsapp + page.navLabel)}
                target="_blank"
                rel="noopener"
                className="mt-2 flex min-h-12 items-center justify-between border border-paper/30 px-4 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
              >
                WhatsApp us
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                {PHONES.map((p) => (
                  <li key={p.href}>
                    <a href={`tel:${p.href}`} className="flex items-center gap-2 hover:text-spice">
                      <Phone className="size-3.5" aria-hidden />
                      {p.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <nav aria-label={`More from ${d.name}`} className="border border-ink">
              <p className="border-b border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">More from {d.name}</p>
              <ul>
                {siblings.map((s) => (
                  <li key={s.slug} className="border-b border-rule last:border-b-0">
                    <Link
                      href={`${d.hub}/${s.slug}`}
                      aria-current={s.slug === page.slug ? "page" : undefined}
                      className="flex items-center justify-between px-5 py-3 text-[15px] font-medium transition-colors hover:bg-paper-2 aria-[current=page]:text-spice"
                    >
                      {s.navLabel}
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <article className="order-1 lg:order-2 lg:col-span-8">
          <div className="prose-ledger max-w-3xl text-[17px]">
            {page.intro.map((p) => (
              <p key={p.slice(0, 32)} className="first:mt-0">
                {p}
              </p>
            ))}
            <ArticleSections sections={page.sections} />
          </div>

          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="mb-6 font-serif text-4xl leading-tight">
              {page.navLabel}: frequently asked questions
            </h2>
            <FAQList items={page.faqs} />
          </section>

          {related.length > 0 && (
            <section className="mt-16" aria-labelledby="related-heading">
              <h2 id="related-heading" className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                Related
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`${d.hub}/${r.slug}`} className="group flex h-full flex-col justify-between border border-ink p-5 transition-colors hover:bg-ink hover:text-paper">
                      <span className="font-serif text-2xl leading-tight">{r.navLabel}</span>
                      <ArrowUpRight className="mt-6 size-4 self-end transition-transform group-hover:rotate-45" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </Container>

      <CTABand title={d.ctaTitle} body={d.ctaBody} primary={d.cta} secondary={{ label: `${d.name} overview`, href: d.hub }} />
      <JsonLd data={schema} />
    </>
  )
}
