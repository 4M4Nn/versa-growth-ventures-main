import type { Metadata } from "next"
import { ABOUT, HOME, IMAGES, PAGE_COPY, PHONES, SITE } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { PageHero } from "@/components/shared/PageHero"
import { Figure } from "@/components/shared/Figure"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { CTABand } from "@/components/shared/CTABand"
import { FounderCards } from "@/components/sections/FounderCards"

const copy = PAGE_COPY.about

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "About", href: "/about" }]} eyebrow={copy.eyebrow} title={ABOUT.h1} lede={ABOUT.lede} image={IMAGES.kochiSunset} />

      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow index="01">{copy.eyebrow}</Eyebrow>
        </div>
        <div className="prose-ledger text-[17px] lg:col-span-8">
          <h2 className="!mt-0">{copy.storyH2}</h2>
          {ABOUT.story.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </Container>

      <section className="border-y border-ink bg-paper-2 py-16 md:py-24">
        <Container>
          <Eyebrow index="02">Principles</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">{copy.principlesH2}</h2>
          <ul className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.principles.map((p, i) => (
              <li key={p.title} className="bg-paper p-7">
                <span className="font-serif text-5xl leading-none text-spice">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Eyebrow index="03">Leadership</Eyebrow>
          <div className="mt-10">
            <FounderCards headingLevel="h2" />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="04">Office</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{copy.officeH2}</h2>
            <address className="mt-6 text-lg not-italic leading-relaxed">{SITE.address.full}</address>
            <ul className="mt-6 space-y-1 font-mono">
              {PHONES.map((p) => (
                <li key={p.href}>
                  <a href={`tel:${p.href}`} className="hover:text-spice">
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href="/contact">Contact us</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Figure image={IMAGES.kochiTerminal} aspect="aspect-[16/10]" />
          </div>
        </Container>
      </section>

      <CTABand title={PAGE_COPY.ventures.ctaTitle} body={PAGE_COPY.ventures.ctaBody} primary={HOME.primaryCta} secondary={HOME.secondaryCta} />
    </>
  )
}
