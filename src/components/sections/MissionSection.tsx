"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
export default function MissionSection() {
  const sec = useRef<HTMLElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const left = sec.current?.querySelector(".ms-left")
      const right = sec.current?.querySelector(".ms-right")
      if (!left || !right) return
      gsap.set(left, { x: -60, opacity: 0 })
      gsap.set(right, { x: 60, opacity: 0 })
      ScrollTrigger.create({
        trigger: sec.current, start: "top 75%",
        onEnter: () => {
          gsap.to(left, { x: 0, opacity: 1, duration: 1, ease: "power4.out" })
          gsap.to(right, { x: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.15 })
        }
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={sec} id="mission" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 py-32" style={{ background: "#F0EDE6" }}>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />
      {/* Olive leaf shapes */}
      {[{top:"10%",left:"5%"},{bottom:"15%",right:"8%"},{top:"40%",right:"3%"}].map((pos,i) => (
        <div key={i} className="absolute pointer-events-none text-4xl opacity-10" style={{ ...pos, animation: `float ${4+i}s ease-in-out ${i*0.5}s infinite` }}>🌿</div>
      ))}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="ms-left relative">
          {/* Morphing olive blob */}
          <div className="absolute -left-16 -top-16 w-80 h-80 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(74,124,89,0.15) 0%, transparent 70%)", animation: "morphBlob 8s ease-in-out infinite, glow-pulse 4s ease-in-out infinite" }} />
          <p className="label text-[#4A7C59] mb-5 relative z-10" style={{ letterSpacing: "3px" }}>/ Our Mission</p>
          <h2 className="font-playfair font-bold text-[#1A1A2E] relative z-10" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>
            Building<br />Kerala&apos;s<br />future.
          </h2>
          <div className="flex flex-wrap gap-4 mt-10 relative z-10">
            {["Education", "Technology", "Trading", "Innovation"].map(v => (
              <span key={v} className="label text-[#4A7C59]" style={{ letterSpacing: "2px", fontSize: 11 }}>{v}</span>
            ))}
          </div>
        </div>
        <div className="ms-right relative">
          {/* Large animated quote marks */}
          <div className="absolute -top-8 -left-4 font-playfair font-bold text-[#C9A84C] pointer-events-none select-none" style={{ fontSize: 120, lineHeight: 1, opacity: 0.15, animation: "float 6s ease-in-out infinite" }}>&ldquo;</div>
          <blockquote className="font-playfair italic text-[#1A1A2E] relative z-10" style={{ fontSize: "clamp(18px,2.5vw,26px)", lineHeight: 1.6 }}>
            Our mission is to build a diversified growth ecosystem that empowers businesses, students, and entrepreneurs through education, technology, and innovation.
          </blockquote>
          <p className="mt-6 font-inter text-sm text-[#4A7C59] relative z-10">— Versa Growth Ventures</p>
          <div className="absolute -bottom-8 -right-4 font-playfair font-bold text-[#C9A84C] pointer-events-none select-none" style={{ fontSize: 120, lineHeight: 1, opacity: 0.15, animation: "float 6s ease-in-out 3s infinite" }}>&rdquo;</div>
        </div>
      </div>
    </section>
  )
}
