import type { Metadata } from "next"
import { BLOG_POSTS, CLIENTS, GROUP_FAQS, HOME, HOME_SECTIONS, NEWS, SITE, VENTURES } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Headline } from "@/components/shared/Headline"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { FAQList } from "@/components/shared/FAQList"
import { CTABand } from "@/components/shared/CTABand"
import { JsonLd } from "@/components/shared/JsonLd"
import { HomeHero } from "@/components/sections/HomeHero"
import { Ticker } from "@/components/sections/Ticker"
import { VenturesLedger } from "@/components/sections/VenturesLedger"
import { LogisticsFeature } from "@/components/sections/LogisticsFeature"
import { TradersFeature } from "@/components/sections/TradersFeature"
import { ShipmentLog } from "@/components/sections/ShipmentLog"
import { LiveWorkBoard } from "@/components/sections/LiveWorkBoard"
import { ConnectedVentures } from "@/components/sections/ConnectedVentures"
import { FounderCards } from "@/components/sections/FounderCards"
import { PostCard } from "@/components/sections/PostCard"
import { VentureCard } from "@/components/sections/VentureCard"

export const metadata: Metadata = {
  title: { absolute: HOME.metaTitle },
  description: HOME.metaDescription,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  const latestPosts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)
  const news = [...NEWS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6)
  const s = HOME_SECTIONS

  return (
    <>
      <HomeHero />
      <Ticker />
      <VenturesLedger />
      <LogisticsFeature />
      <TradersFeature />

      <section className="border-b border-ink bg-paper-2 py-20 md:py-28">
        <Container>
          <SectionHeading
            index={s.services.index}
            eyebrow={s.services.eyebrow}
            title={<Headline value={s.services.title} />}
            body={s.services.body}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {VENTURES.filter((v) => v.href === "/bpo" || v.href === "/financial").map((v) => (
              <VentureCard key={v.slug} venture={v} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-ink py-14">
        <Container className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">{s.clients.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight">
              <Headline value={s.clients.title} emClassName="text-leaf" />
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-px border border-ink bg-ink lg:col-span-8 lg:grid-cols-4">
            {CLIENTS.map((c) => (
              <li key={c} className="flex min-h-24 items-center justify-center bg-paper px-4 py-5 text-center font-serif text-xl leading-tight md:text-2xl">
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading index={s.news.index} eyebrow={s.news.eyebrow} title={<Headline value={s.news.title} />} body={s.news.body} />
          <div className="mt-12">
            <LiveWorkBoard />
          </div>
          <div className="mt-10">
            <ShipmentLog items={news} />
          </div>
          <div className="mt-8">
            <ArrowLink href="/news" variant="outline">
              {s.labels.viewAllNews}
            </ArrowLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink bg-paper-2 py-20 md:py-28">
        <Container>
          <SectionHeading
            index={s.connected.index}
            eyebrow={s.connected.eyebrow}
            title={<Headline value={s.connected.title} />}
            body={s.connected.body}
          />
          <div className="mt-12">
            <ConnectedVentures />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            index={s.founders.index}
            eyebrow={s.founders.eyebrow}
            title={<Headline value={s.founders.title} />}
            body={s.founders.body}
          />
          <div className="mt-12">
            <FounderCards />
          </div>
          <div className="mt-8">
            <ArrowLink href="/leadership" variant="outline">
              {s.labels.meetLeadership}
            </ArrowLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink py-20 md:py-28">
        <Container>
          <SectionHeading
            index={s.insights.index}
            eyebrow={s.insights.eyebrow}
            title={<Headline value={s.insights.title} />}
            body={s.insights.body}
          />
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ArrowLink href="/blog" variant="outline">
              {s.labels.viewAllPosts}
            </ArrowLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading stacked index={s.faq.index} eyebrow={s.faq.eyebrow} title={<Headline value={s.faq.title} />} />
            <div className="mt-8">
              <ArrowLink href="/faq" variant="outline">
                {s.labels.viewAllFaqs}
              </ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQList items={GROUP_FAQS} />
          </div>
        </Container>
      </section>

      <CTABand
        title={s.cta.title}
        body={s.cta.body}
        primary={HOME.primaryCta}
        secondary={{ label: HOME.secondaryCta.label, href: HOME.secondaryCta.href }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
          publisher: { "@id": `${SITE.url}/#organization` },
        }}
      />
    </>
  )
}
