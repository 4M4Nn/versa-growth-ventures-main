import type { Metadata } from "next"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { PAGE_COPY, PHONES, SITE, whatsappLink } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { JsonLd } from "@/components/shared/JsonLd"
import { ContactForm } from "@/components/sections/ContactForm"

const copy = PAGE_COPY.contact

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/contact" },
}

type Props = { searchParams: Promise<{ enquiry?: string | string[] }> }

export default async function ContactPage({ searchParams }: Props) {
  const { enquiry } = await searchParams
  const defaultEnquiry = Array.isArray(enquiry) ? enquiry[0] : enquiry
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.mapQuery)}&output=embed`

  return (
    <>
      <PageHero crumbs={[{ label: "Contact", href: "/contact" }]} eyebrow={copy.eyebrow} title={copy.h1} lede={copy.lede} />

      <Container className="grid gap-14 py-16 md:py-24 lg:grid-cols-12">
        <section className="lg:col-span-7" aria-labelledby="form-heading">
          <h2 id="form-heading" className="mb-8 font-serif text-4xl leading-tight">
            {copy.formH2}
          </h2>
          <ContactForm defaultEnquiry={defaultEnquiry} />
        </section>

        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <section aria-labelledby="phones-heading">
            <h2 id="phones-heading" className="font-serif text-3xl">
              {copy.phonesH2}
            </h2>
            <ul className="mt-5 border-t border-ink">
              {PHONES.map((p) => (
                <li key={p.href} className="border-b border-rule">
                  <a href={`tel:${p.href}`} className="flex items-center justify-between py-4 font-mono text-lg hover:text-spice">
                    {p.display}
                    <Phone className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
              <li className="border-b border-rule">
                <a href={`mailto:${SITE.email}`} className="flex items-center justify-between py-4 font-semibold hover:text-spice">
                  {SITE.email}
                  <Mail className="size-4" aria-hidden />
                </a>
              </li>
              <li className="border-b border-rule">
                <a
                  href={whatsappLink("Hello Versa Growth Ventures, I have an enquiry about ")}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between py-4 font-semibold hover:text-spice"
                >
                  WhatsApp {PHONES[2].display}
                  <MessageCircle className="size-4" aria-hidden />
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="office-heading">
            <h2 id="office-heading" className="font-serif text-3xl">
              {copy.officeH2}
            </h2>
            <address className="mt-5 flex gap-3 not-italic leading-relaxed">
              <MapPin className="mt-1 size-4 shrink-0 text-spice" aria-hidden />
              <span>
                {SITE.name}
                <br />
                {SITE.address.full}
              </span>
            </address>
            <div className="mt-6 aspect-[4/3] overflow-hidden border border-ink">
              <iframe title="Map to Versa Growth Ventures office, Kakkanad" src={mapSrc} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </section>
        </aside>
      </Container>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          url: SITE.url,
          telephone: PHONES.map((p) => p.href),
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.countryCode,
          },
          parentOrganization: { "@id": `${SITE.url}/#organization` },
        }}
      />
    </>
  )
}
