import type { Metadata } from "next"
import Link from "next/link"
import { Check, Phone } from "lucide-react"
import { BLOG_POSTS, FREIGHT_QUOTE_FAQS, FREIGHT_QUOTE_PAGE, IMAGES, PHONES, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { FAQList } from "@/components/shared/FAQList"
import { JsonLd } from "@/components/shared/JsonLd"
import { FreightQuoteForm } from "@/components/sections/FreightQuoteForm"
import { RouteMap } from "@/components/sections/RouteMap"

const P = FREIGHT_QUOTE_PAGE

export const metadata: Metadata = {
  title: { absolute: P.metaTitle },
  description: P.metaDescription,
  keywords: P.keywords,
  alternates: { canonical: "/logistics/freight-quote" },
  openGraph: { title: P.metaTitle, description: P.metaDescription, images: [IMAGES.shipAerial.src], url: "/logistics/freight-quote" },
}

export default function FreightQuotePage() {
  const guides = BLOG_POSTS.filter((p) => p.relatedLinks.some((l) => l.href === "/logistics/freight-quote")).slice(0, 5)

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Versa Logistics", href: "/logistics" },
          { label: "Freight quote", href: "/logistics/freight-quote" },
        ]}
        eyebrow={P.eyebrow}
        title={P.h1}
        lede={P.lede}
        answer={P.answer}
        accent="ocean"
      />

      <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-12">
        <section className="lg:col-span-7" aria-labelledby="quote-form-heading">
          <h2 id="quote-form-heading" className="font-serif text-4xl leading-tight">
            {P.formH2}
          </h2>
          <p className="mb-8 mt-3 text-ink-soft">{P.formIntro}</p>
          <FreightQuoteForm />
        </section>

        <aside className="space-y-6 lg:col-span-5">
          <div className="border border-ink bg-ocean-deep p-6 text-paper md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">{P.whyH2}</p>
            <ul className="mt-6 space-y-5">
              {P.why.map((w) => (
                <li key={w.title} className="grid grid-cols-[24px_1fr] gap-3">
                  <Check className="mt-1 size-5 text-[#e9a27f]" aria-hidden />
                  <span>
                    <span className="block font-semibold">{w.title}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-paper/70">{w.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-paper/25 p-4">
              <RouteMap />
            </div>
          </div>
          <div className="border border-ink p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">Prefer to talk?</p>
            <ul className="mt-4 space-y-2 font-mono">
              {PHONES.map((p) => (
                <li key={p.href}>
                  <a href={`tel:${p.href}`} className="flex items-center gap-2 hover:text-spice">
                    <Phone className="size-4" aria-hidden />
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${SITE.email}`} className="mt-3 block font-mono text-sm hover:text-spice">
              {SITE.email}
            </a>
          </div>
        </aside>
      </Container>

      <section className="border-y border-ink bg-paper-2 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="01" tone="ocean">
              Scope
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{P.includedH2}</h2>
          </div>
          <ul className="prose-ledger text-[17px] lg:col-span-7">
            {P.included.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="02" tone="ocean">
            Process
          </Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{P.stepsH2}</h2>
          <ol className="mt-12 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
            {P.steps.map((s) => (
              <li key={s.step} className="border-b border-r border-ink p-6">
                <span className="font-serif text-5xl leading-none text-ocean">{s.step}</span>
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="03" tone="ocean">
              FAQ
            </Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Freight quote &amp; rates FAQs</h2>
            {guides.length > 0 && (
              <div className="mt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">Freight guides</p>
                <ul className="mt-3 border-t border-ink">
                  {guides.map((g) => (
                    <li key={g.slug} className="border-b border-rule">
                      <Link href={`/blog/${g.slug}`} className="block py-3 text-[15px] font-medium leading-snug hover:text-spice">
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:col-span-8">
            <FAQList items={FREIGHT_QUOTE_FAQS} />
          </div>
        </Container>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Freight quotation — Versa Logistics",
          serviceType: "Freight forwarding and sea freight quotation",
          description: P.answer,
          url: `${SITE.url}/logistics/freight-quote`,
          areaServed: ["Kochi", "Kerala", "India", "United Arab Emirates", "GCC"],
          provider: { "@type": "Organization", name: "Versa Logistics", parentOrganization: { "@id": `${SITE.url}/#organization` } },
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free, itemised freight quotation" },
        }}
      />
    </>
  )
}
