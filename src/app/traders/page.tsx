import type { Metadata } from "next"
import { IMAGES, SITE, TRADERS_FAQS, TRADERS_HUB, TRADERS_MARKETS } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { Figure } from "@/components/shared/Figure"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { ProductCards } from "@/components/sections/TradersFeature"
import { TradingDesk } from "@/components/sections/TradingDesk"
import { RouteMap } from "@/components/sections/RouteMap"

export const metadata: Metadata = {
  title: { absolute: TRADERS_HUB.metaTitle },
  description: TRADERS_HUB.metaDescription,
  keywords: TRADERS_HUB.keywords,
  alternates: { canonical: "/traders" },
  openGraph: { title: TRADERS_HUB.metaTitle, description: TRADERS_HUB.metaDescription, images: [IMAGES.coffeeSack.src], url: "/traders" },
}

export default function TradersPage() {
  const c = TRADERS_HUB.copy
  return (
    <>
      <PageHero
        crumbs={[{ label: "Versa Traders", href: "/traders" }]}
        eyebrow={TRADERS_HUB.eyebrow}
        title={TRADERS_HUB.h1}
        lede={TRADERS_HUB.lede}
        image={IMAGES.coffeeSack}
        answer={TRADERS_HUB.answer}
      >
        <ArrowLink href="/contact?enquiry=samples">{c.heroCta}</ArrowLink>
        <ArrowLink href="/traders/quality-certification" variant="outline">
          {c.heroSecondary}
        </ArrowLink>
      </PageHero>

      <section className="border-b border-ink py-16 md:py-24">
        <Container>
          <Eyebrow tone="spice">{c.deskEyebrow}</Eyebrow>
          <h2 className="mb-12 mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{c.deskH2}</h2>
          <TradingDesk />
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="01" tone="spice">
            {c.productsEyebrow}
          </Eyebrow>
          <h2 className="mb-12 mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{c.productsH2}</h2>
          <ProductCards />
        </Container>
      </section>

      <section className="border-y border-ink bg-paper-2 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="02" tone="spice">
              {c.promisesEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.promisesH2}</h2>
            <Figure image={IMAGES.pepperMacro} className="mt-10" aspect="aspect-[16/10]" />
          </div>
          <ul className="grid gap-px self-start border border-ink bg-ink sm:grid-cols-2 lg:col-span-7">
            {TRADERS_HUB.promises.map((p, i) => (
              <li key={p.title} className="bg-paper p-6">
                <span className="font-mono text-[11px] text-spice">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="03" tone="spice">
            {c.processEyebrow}
          </Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{c.processH2}</h2>
          <ol className="mt-12 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-5">
            {TRADERS_HUB.process.map((p) => (
              <li key={p.step} className="border-b border-r border-ink p-6">
                <span className="font-serif text-5xl leading-none text-spice">{p.step}</span>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-ink bg-paper-2 py-16 md:py-24">
        <Container>
          <Eyebrow tone="spice">{c.marketsEyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{c.marketsH2}</h2>
          <ul className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {TRADERS_MARKETS.map((item) => (
              <li key={item.title} className="bg-paper p-7">
                <h3 className="font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ocean-deep py-16 text-paper md:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow index="04" tone="paper">
              {c.freightEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.freightH2}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-paper/75">{c.freightBody}</p>
            <div className="mt-8">
              <ArrowLink href="/logistics" variant="paper">
                {c.freightCta}
              </ArrowLink>
            </div>
          </div>
          <div className="border border-paper/25 p-5 lg:col-span-5 lg:col-start-8">
            <RouteMap />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="05" tone="spice">
              {c.faqEyebrow}
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{c.faqH2}</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={TRADERS_FAQS} />
          </div>
        </Container>
      </section>

      <CTABand title={c.ctaTitle} body={c.ctaBody} primary={{ label: c.heroCta, href: "/contact?enquiry=samples" }} secondary={c.ctaSecondary} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Versa Traders",
          url: `${SITE.url}/traders`,
          description: TRADERS_HUB.answer,
          parentOrganization: { "@id": `${SITE.url}/#organization` },
          makesOffer: TRADERS_HUB.products.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: p.name, description: p.body, url: `${SITE.url}${p.href}` },
          })),
        }}
      />
    </>
  )
}
