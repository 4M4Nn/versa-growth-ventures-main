"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import dynamic from "next/dynamic"

gsap.registerPlugin(ScrollTrigger)

const OrbitalSystem = dynamic(() => import("@/components/three/OrbitalSystem"), { ssr: false })

const ORBS = [
  { label: "IPB", color: "#C9A84C", angle: 0, r: 130 },
  { label: "DIGITAL", color: "#8FBC5A", angle: 60, r: 130 },
  { label: "GLOBAL", color: "#4A7C59", angle: 120, r: 130 },
  { label: "ELYRA", color: "#00D4C8", angle: 180, r: 130 },
  { label: "TRADING", color: "#E8C96A", angle: 240, r: 130 },
  { label: "EXPORTS", color: "#A8B89A", angle: 300, r: 130 },
]

const HEX_POSITIONS = [
  {top:"8%",left:"5%"},{top:"20%",right:"8%"},{top:"60%",left:"3%"},
  {bottom:"15%",right:"5%"},{top:"40%",left:"8%"},{bottom:"30%",left:"12%"},
]

export default function HeroSection() {
  const sec = useRef<HTMLElement>(null)
  const [hoveredOrb, setHoveredOrb] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sec.current?.querySelectorAll(".word")
      const extras = sec.current?.querySelectorAll(".h-extra")
      gsap.set([words ?? [], extras ?? []], { y: "100%", opacity: 0 })
      const tl = gsap.timeline({ delay: 4.2 })
      tl.to(words ?? [], { y: 0, opacity: 1, stagger: 0.07, duration: 0.9, ease: "power4.out" })
        .to(extras ?? [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out" }, "-=0.4")
    }, sec)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sec} id="hero" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 pt-24 pb-32" style={{ background: "#080E08" }}>
      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "linear-gradient(rgba(74,124,89,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(74,124,89,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px", animation: "gridMove 8s linear infinite" }} />

      {/* Hexagon shapes */}
      {HEX_POSITIONS.map((pos, i) => (
        <div key={i} className="absolute pointer-events-none"
          style={{ ...pos, width: 80 + i * 20, height: 80 + i * 20,
            background: `rgba(74,124,89,0.04)`, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            animation: `hexPulse ${3 + i * 0.7}s ease-in-out ${i * 0.5}s infinite, float ${5 + i}s ease-in-out ${i * 0.8}s infinite` }} />
      ))}

      {/* Moving radial glow */}
      <div className="absolute pointer-events-none" style={{ width: 600, height: 600, left: "5%", top: "50%", transform: "translateY(-50%)", background: "radial-gradient(ellipse at center, rgba(74,124,89,0.12) 0%, transparent 70%)", animation: "glow-pulse 4s ease-in-out infinite" }} />

      {/* Floating orbs (venture labels) */}
      {ORBS.map((orb, i) => {
        const x = 58 + Math.cos((orb.angle * Math.PI) / 180) * 15
        const y = 50 + Math.sin((orb.angle * Math.PI) / 180) * 25
        return (
          <div key={i} className="absolute hidden md:flex items-center gap-1.5 cursor-pointer z-10 group"
            style={{ left: `${x}%`, top: `${y}%`, animation: `orb-drift ${5 + i * 0.6}s ease-in-out ${i * 0.4}s infinite` }}
            onMouseEnter={() => setHoveredOrb(orb.label)}
            onMouseLeave={() => setHoveredOrb(null)}>
            <div className="w-2 h-2 rounded-full" style={{ background: orb.color, boxShadow: `0 0 8px ${orb.color}`, animation: `pulseGlow 2s ease-in-out ${i * 0.3}s infinite` }} />
            <span className="text-xs font-inter transition-opacity duration-300" style={{ color: orb.color, opacity: hoveredOrb === orb.label ? 1 : 0.5 }}>{orb.label}</span>
          </div>
        )
      })}

      {/* LEFT: Text */}
      <div className="relative z-10 w-full md:w-[52%]">
        <div className="h-extra overflow-hidden mb-6">
          <p className="word label text-[#C9A84C]" style={{ letterSpacing: "4px" }}>Kerala · India · Est. 2024</p>
        </div>
        <h1 className="font-playfair leading-none mb-6" style={{ fontSize: "clamp(52px,7.5vw,110px)" }}>
          <div className="overflow-hidden mb-1"><span className="word-wrap"><span className="word">Diversified</span></span></div>
          <div className="overflow-hidden mb-1"><span className="word-wrap"><span className="word font-bold text-[#8FBC5A]">Growth.</span></span></div>
          <div className="overflow-hidden"><span className="word-wrap"><span className="word font-light text-[#F0EDE6]/80">Ventures.</span></span></div>
        </h1>
        <div className="h-extra overflow-hidden h-px bg-[#C9A84C] mb-7" style={{ width: 200 }} />
        <p className="h-extra font-inter text-[#A8B89A] max-w-lg mb-10" style={{ fontSize: 18, lineHeight: 1.7 }}>
          A multi-venture enterprise spanning education, technology, trading, exports, digital marketing, and AI innovation.
        </p>
        <div className="h-extra flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#ventures" className="inline-flex items-center justify-center px-8 py-4 border border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all font-inter text-sm rounded-sm">Explore Ventures</a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A84C] text-[#080E08] hover:bg-[#E8C96A] transition-all font-inter text-sm font-bold rounded-sm">Book Consultation</a>
        </div>
        <div className="h-extra flex flex-col items-start gap-2">
          <span className="label text-white/30" style={{ fontSize: 11 }}>SCROLL</span>
          <div className="w-px h-12 bg-white/10 overflow-hidden ml-2">
            <div className="w-full h-full bg-[#C9A84C]" style={{ animation: "scroll-pulse 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      {/* RIGHT: 3D Orbital System */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[48%] pointer-events-none" style={{ zIndex: 5 }}>
        <OrbitalSystem />
      </div>
    </section>
  )
}
