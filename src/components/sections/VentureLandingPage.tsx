import { ArrowUpRight, Phone } from "lucide-react"
import type { VentureLanding } from "@/lib/content/services"
import { CLIENTS, PHONES, SITE, VENTURES, whatsappLink } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { ArticleSections } from "@/components/shared/ArticleSections"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"

export function VentureLandingPage({ data }: { data: VentureLanding }) {
  const venture = VENTURES.find((v) => v.href === `/${data.slug}`)
  const stats = venture?.stats ?? []
  const url = `${SITE.url}/${data.slug}`

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Ventures", href: "/ventures" },
          { label: data.name, href: `/${data.slug}` },
        ]}
        eyebrow={data.eyebrow}
        title={data.h1}
        lede={data.lede}
        image={data.image}
        answer={data.answer}
      >
        <ArrowLink href={data.cta.href}>{data.cta.label}</ArrowLink>
        <ArrowLink href={whatsappLink(data.whatsapp)} external variant="outline">
          WhatsApp us
        </ArrowLink>
      </PageHero>

      {stats.length > 0 && (
        <section className="border-b border-ink">
          <Container>
            <dl className="grid grid-cols-2 border-l border-ink md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-r border-ink p-6 md:p-8">
                  <dd className="font-serif text-6xl leading-none">{s.value}</dd>
                  <dt className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="01" tone="spice">
            {data.servicesEyebrow}
          </Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{data.servicesH2}</h2>
          <ul className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {data.services.map((s, i) => (
              <li key={s.title} className="bg-paper p-7">
                <span className="font-mono text-[11px] text-spice">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {data.showClients && (
        <section className="border-y border-ink bg-paper-2 py-16 md:py-20">
          <Container className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow index="02">Clients</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-tight">{data.clientsH2}</h2>
              <p className="mt-4 text-ink-soft">{data.clientsBody}</p>
            </div>
            <ul className="grid gap-px self-start border border-ink bg-ink sm:grid-cols-2 lg:col-span-8">
              {CLIENTS.map((c) => (
                <li key={c} className="flex min-h-28 items-center bg-paper px-7 py-6 font-serif text-3xl leading-tight">
                  {c}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {data.process && (
        <section className="py-16 md:py-24">
          <Container>
            <Eyebrow index="03">Process</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{data.processH2}</h2>
            <ol className="mt-12 grid border-l border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
              {data.process.map((p) => (
                <li key={p.step} className="border-b border-r border-ink p-6">
                  <span className="font-serif text-5xl leading-none text-spice">{p.step}</span>
                  <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <Container className="grid gap-14 border-t border-ink py-16 md:py-24 lg:grid-cols-12">
        <article className="prose-ledger text-[17px] lg:col-span-7">
          <ArticleSections sections={data.sections} />
        </article>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="border border-ink bg-ink p-6 text-paper">
              <p className="font-serif text-2xl leading-tight">{data.cta.title}</p>
              <ArrowLink href={data.cta.href} variant="spice" className="mt-5 w-full">
                {data.cta.label}
              </ArrowLink>
              <ul className="mt-5 space-y-2 font-mono text-sm">
                {PHONES.map((p) => (
                  <li key={p.href}>
                    <a href={`tel:${p.href}`} className="flex items-center gap-2 hover:text-spice">
                      <Phone className="size-3.5" aria-hidden />
                      {p.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-spice">
                    <ArrowUpRight className="size-3.5" aria-hidden />
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </Container>

      <section className="border-t border-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="04">FAQ</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{data.name} FAQs</h2>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={data.faqs} />
          </div>
        </Container>
      </section>

      {data.disclaimer && (
        <Container className="pb-12">
          <p className="border-t border-rule pt-6 text-[13px] leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">Disclaimer: </strong>
            {data.disclaimer}
          </p>
        </Container>
      )}

      <CTABand title={data.cta.title} body={data.cta.body} primary={{ label: data.cta.label, href: data.cta.href }} secondary={{ label: "All ventures", href: "/ventures" }} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name,
          url,
          description: data.answer,
          email: SITE.email,
          telephone: PHONES.map((p) => p.href),
          parentOrganization: { "@id": `${SITE.url}/#organization` },
          address: {
            "@type": "PostalAddress",
            streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
            addressLocality: SITE.address.city,
            postalCode: SITE.address.postalCode,
            addressCountry: "IN",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${data.name} services`,
            itemListElement: data.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.body } })),
          },
        }}
      />
    </>
  )
}
