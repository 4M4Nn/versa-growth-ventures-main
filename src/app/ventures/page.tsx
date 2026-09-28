import type { Metadata } from "next"
import { HOME, PAGE_COPY } from "@/lib/data"
import { PageHero } from "@/components/shared/PageHero"
import { CTABand } from "@/components/shared/CTABand"
import { VenturesLedger } from "@/components/sections/VenturesLedger"

const copy = PAGE_COPY.ventures

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/ventures" },
}

export default function VenturesPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Ventures", href: "/ventures" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} answer={copy.answer} />
      <VenturesLedger showHeading={false} />
      <CTABand title={copy.ctaTitle} body={copy.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
    </>
  )
}
