"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Word({ children }: { children: string }) {
  return (
    <span className="word-wrap">
      <span className="word">{children}</span>
    </span>
  )
}

export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".hero-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 2.6 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.08, duration: 0.9, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out" }, "-=0.4")
    }, sec)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex items-center bg-[#080E08] overflow-hidden px-6 md:px-12 pt-24 pb-32">
      {/* Faint background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-white/[0.02] font-playfair font-bold select-none" style={{ fontSize: "clamp(120px,25vw,320px)", whiteSpace: "nowrap" }}>VERSA</span>
      </div>

      {/* Faint olive radial */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(74,124,89,0.07) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="word-wrap mb-6">
          <p className="word label text-[#C9A84C]" style={{ letterSpacing: "4px" }}>Kerala · India · Est. 2024</p>
        </div>

        {/* Headline */}
        <h1 className="font-playfair leading-none mb-6" style={{ fontSize: "clamp(56px,8vw,120px)" }}>
          <div className="overflow-hidden mb-1"><Word>Diversified</Word></div>
          <div className="overflow-hidden mb-1">
            <span className="word-wrap"><span className="word font-bold text-[#8FBC5A]">Growth.</span></span>
          </div>
          <div className="overflow-hidden">
            <span className="word-wrap"><span className="word font-light text-[#F0EDE6]/80">Ventures.</span></span>
          </div>
        </h1>

        {/* Gold line */}
        <div className="hero-extra overflow-hidden h-px bg-[#C9A84C] mb-7" style={{ width: 200 }} />

        {/* Subtext */}
        <p className="hero-extra font-inter text-[#A8B89A] max-w-lg mb-10" style={{ fontSize: 18, lineHeight: 1.7 }}>
          A multi-venture enterprise spanning education, technology, trading, exports, digital marketing, and AI innovation.
        </p>

        {/* CTAs */}
        <div className="hero-extra flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#ventures" className="inline-flex items-center justify-center px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all font-inter text-sm rounded-sm">Explore Ventures</a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A84C] text-[#080E08] hover:bg-[#E8C96A] transition-all font-inter text-sm font-bold rounded-sm">Book Consultation</a>
        </div>

        {/* Scroll indicator */}
        <div className="hero-extra flex flex-col items-start gap-2">
          <span className="label text-white/30" style={{ letterSpacing: "3px", fontSize: 11 }}>SCROLL</span>
          <div className="w-px h-12 bg-white/10 overflow-hidden ml-2">
            <div className="w-full h-full bg-[#C9A84C]" style={{ animation: "scroll-pulse 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
