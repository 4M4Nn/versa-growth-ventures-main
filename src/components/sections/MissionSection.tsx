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
    <section ref={sec} id="mission" className="min-h-screen flex items-center bg-[#F0EDE6] overflow-hidden px-6 md:px-12 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="ms-left">
          <p className="label text-[#4A7C59] mb-5" style={{ letterSpacing: "3px" }}>/ Our Mission</p>
          <h2 className="font-playfair font-bold text-[#1A1A2E]" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>
            Building<br />Kerala&apos;s<br />future.
          </h2>
          <div className="flex flex-wrap gap-4 mt-10">
            {["Education", "Technology", "Trading", "Innovation"].map(v => (
              <span key={v} className="label text-[#4A7C59]" style={{ letterSpacing: "2px", fontSize: 11 }}>{v}</span>
            ))}
          </div>
        </div>
        <div className="ms-right">
          <blockquote className="font-playfair italic text-[#1A1A2E]" style={{ fontSize: "clamp(18px,2.5vw,26px)", lineHeight: 1.6 }}>
            &ldquo;Our mission is to build a diversified growth ecosystem that empowers businesses, students, and entrepreneurs through education, technology, and innovation.&rdquo;
          </blockquote>
          <p className="mt-6 font-inter text-sm text-[#4A7C59]">— Versa Growth Ventures</p>
        </div>
      </div>
    </section>
  )
}
