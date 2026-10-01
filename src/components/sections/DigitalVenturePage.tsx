import type { Venture } from "@/types"
import { BLOG_POSTS, DIGITAL_FAQS, DIGITAL_PAGE, HOME_SECTIONS, NEWS, PAGE_COPY, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { LiveWorkBoard } from "@/components/sections/LiveWorkBoard"
import { ShipmentLog } from "@/components/sections/ShipmentLog"
import { PostCard } from "@/components/sections/PostCard"

export function DigitalVenturePage({ venture }: { venture: Venture }) {
  const d = DIGITAL_PAGE
  const url = `${SITE.url}/ventures/${d.slug}`
  const news = NEWS.filter((n) => n.division === "digital").sort((a, b) => b.date.localeCompare(a.date))
  const guides = BLOG_POSTS.filter((p) => p.category === "Digital").sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Ventures", href: "/ventures" },
          { label: venture.name, href: `/ventures/${d.slug}` },
        ]}
        eyebrow={venture.sector}
        title={d.h1}
        lede={d.lede}
        answer={d.answer}
      >
        <ArrowLink href={d.cta.href}>{d.cta.label}</ArrowLink>
        {venture.liveUrl && (
          <ArrowLink href={venture.liveUrl} external variant="outline">
            {PAGE_COPY.ventures.externalLead} — {venture.liveLabel}
          </ArrowLink>
        )}
      </PageHero>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="01" tone="spice">
            {d.servicesEyebrow}
          </Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{d.servicesH2}</h2>
          <ul className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s, i) => (
              <li key={s.title} className="bg-paper p-7">
                <span className="font-mono text-[11px] text-spice">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                <ul className="mt-5 space-y-2 border-t border-rule pt-4 text-sm">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-spice" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-ink bg-paper-2 py-16 md:py-24">
        <Container>
          <Eyebrow index="02">{d.liveWorkEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{d.liveWorkH2}</h2>
          <div className="mt-12">
            <LiveWorkBoard />
          </div>
          <div className="mt-10">
            <ShipmentLog items={news} />
          </div>
        </Container>
      </section>

      {venture.stats && (
        <section className="border-b border-ink py-16 md:py-20">
          <Container>
            <Eyebrow index="03">{d.trackRecordEyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{d.trackRecordH2}</h2>
            <dl className="mt-12 grid grid-cols-2 border-l border-t border-ink md:grid-cols-4">
              {venture.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse justify-end gap-3 border-b border-r border-ink p-6 md:p-8">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">{s.label}</dt>
                  <dd className="font-serif text-6xl leading-none">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="04">{d.processEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{d.processH2}</h2>
          <ol className="mt-12 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {d.process.map((p) => (
              <li key={p.step} className="border-b border-r border-ink p-6">
                <span className="font-serif text-5xl leading-none text-spice">{p.step}</span>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="05">{d.faqEyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight">{d.faqH2}</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={DIGITAL_FAQS} />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container>
          <Eyebrow index="06">{d.guidesEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{d.guidesH2}</h2>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ArrowLink href="/blog" variant="outline">
              {HOME_SECTIONS.labels.viewAllPosts}
            </ArrowLink>
          </div>
        </Container>
      </section>

      <CTABand title={d.cta.title} body={d.cta.body} primary={{ label: d.cta.label, href: d.cta.href }} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${url}#service`,
          name: venture.name,
          url: venture.liveUrl,
          mainEntityOfPage: url,
          description: d.answer,
          parentOrganization: { "@id": `${SITE.url}/#organization` },
          telephone: `+${SITE.whatsapp}`,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.countryCode,
          },
          areaServed: ["Kochi", "Kerala", "India"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: d.servicesH2,
            itemListElement: d.services.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.title, description: s.body },
            })),
          },
        }}
      />
    </>
  )
}
