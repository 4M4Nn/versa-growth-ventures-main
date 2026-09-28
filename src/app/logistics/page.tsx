import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { IMAGES, LOGISTICS_FAQS, LOGISTICS_HUB, NEWS, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { Figure } from "@/components/shared/Figure"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { ShipmentLog } from "@/components/sections/ShipmentLog"
import { RouteMap } from "@/components/sections/RouteMap"

export const metadata: Metadata = {
  title: { absolute: LOGISTICS_HUB.metaTitle },
  description: LOGISTICS_HUB.metaDescription,
  keywords: LOGISTICS_HUB.keywords,
  alternates: { canonical: "/logistics" },
  openGraph: { title: LOGISTICS_HUB.metaTitle, description: LOGISTICS_HUB.metaDescription, images: [IMAGES.shipAerial.src], url: "/logistics" },
}

export default function LogisticsPage() {
  const c = LOGISTICS_HUB.copy
  const news = NEWS.filter((n) => n.division === "logistics").sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <PageHero
        crumbs={[{ label: "Versa Logistics", href: "/logistics" }]}
        eyebrow={LOGISTICS_HUB.eyebrow}
        title={LOGISTICS_HUB.h1}
        lede={LOGISTICS_HUB.lede}
        image={IMAGES.shipAerial}
        answer={LOGISTICS_HUB.answer}
        accent="ocean"
      >
        <ArrowLink href="/contact?enquiry=logistics">{c.heroCta}</ArrowLink>
        <ArrowLink href="/news" variant="outline">
          {c.heroSecondary}
        </ArrowLink>
      </PageHero>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="01" tone="ocean">
            {c.servicesEyebrow}
          </Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{c.servicesH2}</h2>
          <ul className="mt-12 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
            {LOGISTICS_HUB.services.map((s, i) => (
              <li key={s.href} className="border-b border-r border-ink">
                <Link href={s.href} className="group flex h-full flex-col justify-between gap-8 p-7 transition-colors hover:bg-ocean-deep hover:text-paper">
                  <span>
                    <span className="font-mono text-[11px] text-ocean group-hover:text-[#e9a27f]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-serif text-3xl leading-none">{s.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-ink-soft group-hover:text-paper/75">{s.body}</p>
                  </span>
                  <ArrowUpRight className="size-5 self-end transition-transform group-hover:rotate-45" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ocean-deep py-16 text-paper md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="02" tone="paper">
              {c.laneEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.laneH2}</h2>
            <p className="mt-5 leading-relaxed text-paper/75">{c.laneBody}</p>
            <div className="mt-8 border border-paper/25 p-5">
              <RouteMap />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow index="03" tone="paper">
              {c.processEyebrow}
            </Eyebrow>
            <ol className="mt-6 border-t border-paper/25">
              {LOGISTICS_HUB.process.map((p) => (
                <li key={p.step} className="grid grid-cols-[48px_1fr] gap-4 border-b border-paper/25 py-5">
                  <span className="font-mono text-sm text-[#e9a27f]">{p.step}</span>
                  <span>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-paper/70">{p.body}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow index="04" tone="ocean">
              {c.reasonsEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.reasonsH2}</h2>
            <ul className="prose-ledger mt-4 text-[17px]">
              {LOGISTICS_HUB.reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Figure image={IMAGES.khorfakkanCranes} />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container>
          <Eyebrow index="05" tone="ocean">
            {c.logEyebrow}
          </Eyebrow>
          <h2 className="mb-10 mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.logH2}</h2>
          <ShipmentLog items={news} />
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="06" tone="ocean">
              {c.faqEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.faqH2}</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={LOGISTICS_FAQS} />
          </div>
        </Container>
      </section>

      <CTABand
        title={c.ctaTitle}
        body={c.ctaBody}
        primary={{ label: c.heroCta, href: "/contact?enquiry=logistics" }}
        secondary={c.ctaSecondary}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Versa Logistics",
          url: `${SITE.url}/logistics`,
          description: LOGISTICS_HUB.answer,
          parentOrganization: { "@id": `${SITE.url}/#organization` },
          address: { "@type": "PostalAddress", streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`, addressLocality: SITE.address.city, postalCode: SITE.address.postalCode, addressCountry: "IN" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Logistics services",
            itemListElement: LOGISTICS_HUB.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body } })),
          },
        }}
      />
    </>
  )
}
