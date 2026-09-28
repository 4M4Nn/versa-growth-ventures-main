import type { Metadata } from "next"
import { HOME, NEWS, PAGE_COPY } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { CTABand } from "@/components/shared/CTABand"
import { ShipmentLog } from "@/components/sections/ShipmentLog"

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
      <section className="py-16 md:py-24">
        <Container>
          <ShipmentLog items={items} headingLevel="h2" />
        </Container>
      </section>
      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
    </>
  )
}
