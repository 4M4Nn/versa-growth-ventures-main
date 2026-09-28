import Image from "next/image"
import Link from "next/link"
import { HOME_SECTIONS, TRADERS_HUB } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Headline } from "@/components/shared/Headline"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Reveal } from "@/components/shared/Reveal"

export function ProductCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Title = headingLevel
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {TRADERS_HUB.products.map((p, i) => (
        <li key={p.href}>
          <Reveal delay={i * 80} className="h-full">
            <Link href={p.href} className="group flex h-full flex-col border border-ink bg-paper transition-shadow duration-300 hover:shadow-[8px_8px_0_0_#a8431f]">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-ink bg-paper-2">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-spice">{p.tag}</p>
                <Title className="mt-3 font-serif text-3xl leading-none">{p.name}</Title>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
                <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] underline-offset-4 group-hover:underline">
                  Grades, specs & FAQs →
                </span>
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export function TradersFeature() {
  const copy = HOME_SECTIONS.traders
  return (
    <section className="paper-grain border-b border-ink py-20 md:py-28">
      <Container>
        <SectionHeading index={copy.index} eyebrow={copy.eyebrow} title={<Headline value={copy.title} />} body={copy.body} />
        <div className="mt-14">
          <ProductCards />
        </div>
        <div className="mt-14 grid gap-8 border-t border-ink pt-10 lg:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft lg:col-span-3">{HOME_SECTIONS.labels.tradersPromises}</p>
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            {TRADERS_HUB.promises.map((p) => (
              <li key={p.title} className="border-l-2 border-spice pl-4">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ArrowLink href="/traders">{HOME_SECTIONS.labels.exploreTraders}</ArrowLink>
          <ArrowLink href="/contact?enquiry=samples" variant="outline">
            {HOME_SECTIONS.labels.requestSamples}
          </ArrowLink>
        </div>
      </Container>
    </section>
  )
}
