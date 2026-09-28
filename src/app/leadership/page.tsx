import type { Metadata } from "next"
import { FOUNDERS, HOME, PAGE_COPY, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { FounderCards } from "@/components/sections/FounderCards"

const copy = PAGE_COPY.leadership

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/leadership" },
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Leadership", href: "/leadership" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      <section className="py-16 md:py-24">
        <Container>
          <FounderCards full headingLevel="h2" />
        </Container>
      </section>
      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
      <JsonLd
        data={FOUNDERS.map((f) => ({
          "@context": "https://schema.org",
          "@type": "Person",
          name: f.name,
          jobTitle: `${f.role}, ${SITE.name}`,
          description: f.bio.join(" "),
          worksFor: { "@id": `${SITE.url}/#organization` },
        }))}
      />
    </>
  )
}
