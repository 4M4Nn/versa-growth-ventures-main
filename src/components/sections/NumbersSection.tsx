"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { numberPhases } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

export default function NumbersSection() {
  const sec = useRef<HTMLElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add("(min-width: 768px)", () => {
        const phases = sec.current?.querySelectorAll(".num-phase")
        if (!phases || phases.length === 0) return

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            pinSpacing: true,
            scrub: 1.5,
          },
        })

        gsap.set(phases, { opacity: 0, y: 50 })
        gsap.set(phases[0], { opacity: 1, y: 0 })

        tl.to(phases[0], { opacity: 0, y: -50, duration: 0.8 }, 0.8)
          .to(phases[1], { opacity: 1, y: 0, duration: 0.8 }, 0.8)
          .to(phases[1], { opacity: 0, y: -50, duration: 0.8 }, 1.8)
          .to(phases[2], { opacity: 1, y: 0, duration: 0.8 }, 1.8)
          .from(".num-tagline", { opacity: 0, y: 30, duration: 0.8 }, 2.6)

        return () => {}
      })

      mm.add("(max-width: 767px)", () => {
        sec.current?.querySelectorAll(".num-phase").forEach((el, i) => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" }
          })
        })
        return () => {}
      })
    }, sec)

    return () => { ctx.revert(); mm.revert() }
  }, [])

  return (
    <section ref={sec} id="numbers" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C1A0E] overflow-hidden px-6">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center">
        {numberPhases.map((p, i) => (
          <div key={i} className="num-phase absolute inset-x-0 flex flex-col items-center" style={{ position: i === 0 ? "relative" : "absolute", top: 0 }}>
            <div className="font-playfair font-bold text-white" style={{ fontSize: "clamp(80px,14vw,200px)", lineHeight: 1, color: p.color }}>{p.num}</div>
            <p className="label text-[#A8B89A] mt-4" style={{ letterSpacing: "4px" }}>{p.label}</p>
          </div>
        ))}
        <p className="num-tagline font-playfair italic text-[#F0EDE6]/70 mt-12 hidden md:block" style={{ fontSize: "clamp(20px,3vw,28px)" }}>And growing every day.</p>
      </div>
    </section>
  )
}
