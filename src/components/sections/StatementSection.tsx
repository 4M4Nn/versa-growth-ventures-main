"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { statement } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

export default function StatementSection() {
  const sec = useRef<HTMLElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const taglineRef = useRef<HTMLDivElement>(null)

  const words = statement.split(" ")

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      const wordEls = wordsRef.current.filter(Boolean)
      gsap.set(wordEls, { color: "rgba(255,255,255,0.06)" })

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec.current,
            start: "top top",
            end: `+=${words.length * 70}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.5,
          },
        })
        tl.to(wordEls, { color: "#ffffff", stagger: { each: 0.04 }, ease: "none" })
          .from(taglineRef.current, { opacity: 0, y: 20, duration: 1 }, "-=0.5")
        return () => {}
      })

      mm.add("(max-width: 767px)", () => {
        gsap.to(wordEls, {
          color: "#ffffff", stagger: { each: 0.06 }, ease: "none",
          scrollTrigger: { trigger: sec.current, start: "top 70%", end: "bottom 30%", scrub: 1 }
        })
        return () => {}
      })
    }, sec)

    return () => { ctx.revert(); mm.revert() }
  }, [words.length])

  return (
    <section ref={sec} className="relative min-h-screen flex flex-col items-center justify-center bg-[#080E08] overflow-hidden px-6 md:px-12">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(74,124,89,0.05) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl text-center">
        <p className="font-playfair leading-relaxed" style={{ fontSize: "clamp(24px,4vw,52px)" }}>
          {words.map((word, i) => (
            <span key={i} ref={el => { if (el) wordsRef.current[i] = el }}
              className="inline-block mr-[0.28em]">{word}</span>
          ))}
        </p>
        <div ref={taglineRef} className="mt-10 flex flex-col items-center gap-3 opacity-0">
          <div className="w-32 h-px bg-[#C9A84C]" />
          <p className="label text-[#C9A84C]" style={{ letterSpacing: "3px" }}>The Versa Promise</p>
        </div>
      </div>
    </section>
  )
}
