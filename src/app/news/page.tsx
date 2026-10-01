import type { Metadata } from "next"
import { HOME, NEWS, PAGE_COPY, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { CTABand } from "@/components/shared/CTABand"
import { ShipmentLog } from "@/components/sections/ShipmentLog"
import { LiveWorkBoard } from "@/components/sections/LiveWorkBoard"
import { JsonLd } from "@/components/shared/JsonLd"

const copy = PAGE_COPY.news

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/news" },
}

export default function NewsPage() {
  const items = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      <PageHero crumbs={[{ label: "News", href: "/news" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} accent="ocean" />
      <section className="pt-16 md:pt-24">
        <Container>
          <LiveWorkBoard headingLevel="h2" />
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">{copy.logH2}</h2>
          <ShipmentLog items={items} />
        </Container>
      </section>
      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: copy.h1,
          itemListElement: items.map((n, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE.url}/news/${n.slug}`,
            name: n.title,
          })),
        }}
      />
    </>
  )
}
