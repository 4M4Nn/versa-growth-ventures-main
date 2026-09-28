import type { Metadata } from "next"
import { FAQ_GROUPS, HOME, PAGE_COPY } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"

const copy = PAGE_COPY.faq

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/faq" },
}

export default function FAQPage() {
  const all = FAQ_GROUPS.flatMap((g) => g.items)
  return (
    <>
      <PageHero crumbs={[{ label: "FAQ", href: "/faq" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <nav aria-label="FAQ sections" className="lg:col-span-3">
          <ul className="space-y-2 lg:sticky lg:top-28">
            {FAQ_GROUPS.map((g, i) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="flex gap-3 border-b border-rule py-3 font-semibold hover:text-spice">
                  <span className="font-mono text-sm text-spice">{String(i + 1).padStart(2, "0")}</span>
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-16 lg:col-span-9">
          {FAQ_GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">{g.title}</h2>
              <FAQList items={g.items} withSchema={false} />
            </section>
          ))}
        </div>
      </Container>
      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        }}
      />
    </>
  )
}
