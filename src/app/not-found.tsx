import { Container } from "@/components/shared/Container"
import { ArrowLink } from "@/components/shared/ArrowLink"

export default function NotFound() {
  return (
    <section className="paper-grain border-b border-ink">
      <Container className="py-24 md:py-36">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-spice">Error 404 — not on the manifest</p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.02] md:text-7xl">This page did not make the sailing.</h1>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">The link may be old or mistyped. Try one of these instead.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ArrowLink href="/">Home</ArrowLink>
          <ArrowLink href="/logistics" variant="outline">
            Versa Logistics
          </ArrowLink>
          <ArrowLink href="/traders" variant="outline">
            Versa Traders
          </ArrowLink>
          <ArrowLink href="/contact" variant="outline">
            Contact
          </ArrowLink>
        </div>
      </Container>
    </section>
  )
}
