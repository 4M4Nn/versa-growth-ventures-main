import type { Metadata } from "next"
import Link from "next/link"
import { GLOSSARY, GLOSSARY_PAGE, HOME, PAGE_COPY, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"

export const metadata: Metadata = {
  title: { absolute: GLOSSARY_PAGE.metaTitle },
  description: GLOSSARY_PAGE.metaDescription,
  alternates: { canonical: "/glossary" },
}

export default function GlossaryPage() {
  const categories = Array.from(new Set(GLOSSARY.map((t) => t.category)))
  return (
    <>
      <PageHero crumbs={[{ label: "Glossary", href: "/glossary" }]} eyebrow={GLOSSARY_PAGE.eyebrow} title={GLOSSARY_PAGE.h1} lede={GLOSSARY_PAGE.lede} />
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <nav aria-label="Glossary sections" className="lg:col-span-3">
          <ul className="space-y-2 lg:sticky lg:top-28">
            {categories.map((c, i) => (
              <li key={c}>
                <a href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="flex gap-3 border-b border-rule py-3 font-semibold hover:text-spice">
                  <span className="font-mono text-sm text-spice">{String(i + 1).padStart(2, "0")}</span>
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-16 lg:col-span-9">
          {categories.map((c) => (
            <section key={c} id={c.toLowerCase().replace(/[^a-z]+/g, "-")} className="scroll-mt-28">
              <h2 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">{c} terms</h2>
              <dl className="border-t border-ink">
                {GLOSSARY.filter((t) => t.category === c).map((t) => (
                  <div key={t.slug} id={t.slug} className="grid gap-2 border-b border-rule py-5 md:grid-cols-[260px_1fr] md:gap-8">
                    <dt className="font-serif text-2xl leading-tight">{t.term}</dt>
                    <dd className="leading-relaxed text-ink-2">
                      {t.definition}
                      {t.href && (
                        <Link href={t.href} className="ml-2 font-semibold text-spice underline-offset-4 hover:underline">
                          Learn more →
                        </Link>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </Container>
      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: GLOSSARY_PAGE.h1,
          url: `${SITE.url}/glossary`,
          hasDefinedTerm: GLOSSARY.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
            url: `${SITE.url}/glossary#${t.slug}`,
          })),
        }}
      />
    </>
  )
}
