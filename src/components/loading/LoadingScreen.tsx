"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function LoadingScreen() {
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setGone(true) })
      const letters = lettersRef.current?.querySelectorAll(".ch")

      gsap.set(letters ?? [], { opacity: 0, y: 20 })
      gsap.set(lineRef.current, { width: 0 })

      tl.to(letters ?? [], { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "power3.out" })
        .to(lineRef.current, { width: "100%", duration: 0.7, ease: "power2.out" }, "-=0.2")
        .to(counterRef.current, { innerText: 100, snap: { innerText: 1 }, duration: 1.2, ease: "power2.inOut" }, "-=0.7")
        .to([topRef.current, botRef.current], { duration: 0.01 })
        .to(topRef.current, { y: "-100%", duration: 0.75, ease: "power4.inOut" })
        .to(botRef.current, { y: "100%", duration: 0.75, ease: "power4.inOut" }, "<")
    })
    return () => ctx.revert()
  }, [])

  if (gone) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#080E08] flex items-end justify-center pb-8">
        <div className="text-center">
          <div ref={lettersRef} className="flex items-center justify-center gap-0" style={{ fontSize: "clamp(60px, 12vw, 110px)", fontFamily: "var(--font-playfair)", fontWeight: 300, letterSpacing: "0.05em", color: "#fff" }}>
            {"VERSA".split("").map((ch, i) => <span key={i} className="ch inline-block">{ch}</span>)}
          </div>
          <span ref={lineRef} className="block h-px bg-[#C9A84C] mt-2" style={{ width: 0 }} />
        </div>
      </div>
      <div ref={botRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#080E08] flex items-start justify-end pr-8 pt-4">
        <span ref={counterRef} className="font-mono text-[#C9A84C] tabular-nums" style={{ fontSize: 13 }}>0</span>
      </div>
    </div>
  )
}
