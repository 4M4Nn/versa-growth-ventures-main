import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PAGE_COPY, SITE, VENTURES } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { JsonLd } from "@/components/shared/JsonLd"

type Props = { params: Promise<{ slug: string }> }

const externalVentures = VENTURES.filter((v) => v.external)

export function generateStaticParams() {
  return externalVentures.map((v) => ({ slug: v.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const v = externalVentures.find((x) => x.slug === slug)
  if (!v) return {}
  const title = `${v.name} — ${v.sector} | A Versa Growth Ventures Company`
  return {
    title: { absolute: title },
    description: `${v.summary} Visit ${v.liveLabel}.`,
    alternates: { canonical: `/ventures/${v.slug}` },
  }
}

export default async function ExternalVenturePage({ params }: Props) {
  const { slug } = await params
  const v = externalVentures.find((x) => x.slug === slug)
  if (!v || !v.liveUrl) notFound()
  const copy = PAGE_COPY.ventures

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Ventures", href: "/ventures" },
          { label: v.name, href: `/ventures/${v.slug}` },
        ]}
        eyebrow={v.sector}
        title={`${v.name}: a Versa Growth Ventures company`}
        lede={v.summary}
      >
        <ArrowLink href={v.liveUrl} external>
          {copy.externalLead} — {v.liveLabel}
        </ArrowLink>
      </PageHero>

      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <div className="prose-ledger text-[17px] lg:col-span-7">
          <h2 className="!mt-0">{copy.externalAbout}</h2>
          <p>{v.description}</p>
          <ul>
            {v.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h2>{copy.externalGroup}</h2>
          <p>{copy.externalGroupBody}</p>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border border-ink bg-ink p-8 text-paper">
            <span className="grid size-16 place-items-center border border-paper/40 font-serif text-3xl" aria-hidden>
              {v.code}
            </span>
            <p className="mt-8 font-serif text-3xl leading-tight">{v.name}</p>
            <p className="mt-2 font-mono text-sm text-paper/60">{v.liveLabel}</p>
            <ArrowLink href={v.liveUrl} external variant="spice" className="mt-8 w-full">
              {copy.externalLead}
            </ArrowLink>
          </div>
        </aside>
      </Container>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: v.name,
          url: v.liveUrl,
          description: v.description,
          parentOrganization: { "@id": `${SITE.url}/#organization` },
        }}
      />
    </>
  )
}
