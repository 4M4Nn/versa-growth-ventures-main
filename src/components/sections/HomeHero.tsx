import Image from "next/image"
import { HOME, IMAGES, STATS } from "@/lib/data"
import { Container } from "@/components/shared/Container"
import { Eyebrow } from "@/components/shared/Eyebrow"
import { ArrowLink } from "@/components/shared/ArrowLink"

export function HomeHero() {
  return (
    <section className="paper-grain border-b border-ink">
      <Container className="grid gap-12 pb-14 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-7">
          <Eyebrow index="00">{HOME.eyebrow}</Eyebrow>
          <h1 className="mt-8 font-serif text-[2.9rem] leading-[0.98] tracking-[-0.015em] text-ink sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            {HOME.h1.map(([plain, emphasis]) => (
              <span key={plain + (emphasis ?? "")} className="sm:block">
                {plain}
                {emphasis && <em className="text-spice">{emphasis}</em>}{" "}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">{HOME.lede}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href={HOME.primaryCta.href}>{HOME.primaryCta.label}</ArrowLink>
            <ArrowLink href={HOME.secondaryCta.href} variant="outline">
              {HOME.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink bg-paper-2 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={IMAGES.kochiTerminal.src}
              alt={IMAGES.kochiTerminal.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              Origin — Kochi, IN
            </span>
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-[46%] border border-ink bg-paper p-2 shadow-[6px_6px_0_0_#15130f] sm:block lg:-left-10">
            <div className="relative aspect-square w-full overflow-hidden bg-paper-2">
              <Image src={IMAGES.coffeeSack.src} alt={IMAGES.coffeeSack.alt} fill sizes="240px" className="object-cover" />
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">Cargo — green coffee</p>
          </div>
          <p className="mt-3 text-right font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">{IMAGES.kochiTerminal.caption}</p>
        </div>
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-x border-t border-ink lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-b border-ink p-5 md:p-7 ${i % 2 === 0 ? "border-r" : ""} lg:border-r ${i === STATS.length - 1 ? "lg:border-r-0" : ""}`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">{s.label}</dt>
              <dd className="mt-2 font-serif text-5xl leading-none text-ink md:text-6xl">{s.value}</dd>
              <dd className="mt-3 text-sm leading-snug text-ink-soft">{s.note}</dd>
            </div>
          ))}
        </dl>
      </Container>
      <div className="h-14 md:h-20" aria-hidden />
    </section>
  )
}
