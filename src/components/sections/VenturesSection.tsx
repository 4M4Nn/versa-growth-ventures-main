"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ventures } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

function VentureCard({ v }: { v: typeof ventures[0] }) {
  const sec = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const left = sec.current?.querySelector(".vc-left")
      const right = sec.current?.querySelector(".vc-right")
      if (!left || !right) return

      gsap.set(left, { x: -60, opacity: 0 })
      gsap.set(right, { x: 60, opacity: 0 })

      ScrollTrigger.create({
        trigger: sec.current,
        start: "top 75%",
        onEnter: () => {
          gsap.to(left, { x: 0, opacity: 1, duration: 0.9, ease: "power4.out" })
          gsap.to(right, { x: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.1 })
        },
      })
    }, sec)
    return () => ctx.revert()
  }, [])

  const isEven = parseInt(v.num) % 2 === 0
  const textColor = v.textDark ? v.accent : (v.accent === "#C9A84C" ? "#C9A84C" : v.accent)
  const headingColor = v.textDark ? "#1A1A2E" : "#FFFFFF"
  const bodyColor = v.textDark ? "#475569" : "rgba(255,255,255,0.6)"

  return (
    <section
      ref={sec}
      id={`venture-${v.id}`}
      className="min-h-screen flex items-center overflow-hidden"
      style={{ background: v.bg }}
    >
      <div className={`w-full max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
        {/* Text side */}
        <div className={`vc-left ${isEven ? "md:order-2" : ""}`}>
          <p className="label mb-4" style={{ color: textColor, letterSpacing: "3px" }}>{v.num} / {v.label}</p>
          <h2 className="font-playfair font-bold mb-4" style={{ fontSize: "clamp(40px,6vw,80px)", lineHeight: 0.95, color: headingColor }}>{v.name}</h2>
          <p className="font-inter mb-6" style={{ fontSize: 18, lineHeight: 1.7, color: bodyColor }}>{v.sub}</p>
          {v.metric && (
            <div className="mb-8">
              <span className="font-playfair font-bold" style={{ fontSize: "clamp(36px,5vw,56px)", color: textColor }}>{v.metric}</span>
              <p className="label mt-1" style={{ color: bodyColor, letterSpacing: "2px" }}>{v.metricLabel}</p>
            </div>
          )}
          {v.soon ? (
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-inter border" style={{ borderColor: textColor, color: textColor }}>Coming Soon</span>
          ) : (
            <a href={v.url ?? "#"} target={v.url ? "_blank" : undefined} rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: textColor }}>
              Explore {v.name} →
            </a>
          )}
        </div>

        {/* Visual side */}
        <div className={`vc-right ${isEven ? "md:order-1" : ""} flex items-center justify-center min-h-[280px] rounded-2xl overflow-hidden`}
          style={{ background: `linear-gradient(135deg, ${v.bg} 0%, ${v.accent}18 100%)`, border: `1px solid ${v.accent}25` }}>
          {/* CSS visual based on venture */}
          {v.id === "ipb" && <CSSGradCap accent={v.accent} />}
          {v.id === "digital" && <CSSBarChart accent={v.accent} />}
          {v.id === "global" && <CSSWorldDots accent={v.accent} />}
          {v.id === "elyra" && <CSSNeural accent={v.accent} />}
          {v.id === "trading" && <CSSCandles accent={v.accent} />}
          {v.id === "exports" && <CSSMap accent={v.accent} />}
        </div>
      </div>
    </section>
  )
}

function CSSGradCap({ accent }: { accent: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12">
      <div className="relative">
        <div className="w-28 h-4 rounded-sm" style={{ background: accent }} />
        <div className="w-16 h-10 mt-0 mx-auto rounded-b-lg" style={{ background: "#0A1628", border: `2px solid ${accent}` }} />
        <div className="absolute -top-2 -right-4 w-3 h-8 rounded-full" style={{ background: accent, opacity: 0.6 }} />
      </div>
      <p className="font-inter text-sm" style={{ color: accent, letterSpacing: "2px" }}>13,200+ GRADUATES</p>
    </div>
  )
}

function CSSBarChart({ accent }: { accent: string }) {
  const bars = [40, 60, 80, 55, 90, 70, 100]
  return (
    <div className="flex items-end gap-2 p-12 h-48">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: accent, opacity: 0.5 + i * 0.07,
          animation: `bar-rise 0.6s ease-out ${i * 0.1}s both` }} />
      ))}
    </div>
  )
}

function CSSWorldDots({ accent }: { accent: string }) {
  const dots = Array.from({ length: 30 }, (_, i) => ({ x: (i * 37) % 100, y: (i * 53) % 100, d: i * 0.12 }))
  return (
    <div className="relative w-full h-48 p-8">
      {dots.map((d, i) => (
        <div key={i} className="absolute w-1.5 h-1.5 rounded-full" style={{ left: `${d.x}%`, top: `${d.y}%`, background: accent, opacity: 0.15, animation: `dot-pulse ${1.5 + d.d}s ease-in-out ${d.d}s infinite` }} />
      ))}
    </div>
  )
}

function CSSNeural({ accent }: { accent: string }) {
  return (
    <div className="flex items-center justify-center p-12 gap-6">
      {[3, 5, 3].map((n, col) => (
        <div key={col} className="flex flex-col gap-4">
          {Array.from({ length: n }).map((_, row) => (
            <div key={row} className="w-4 h-4 rounded-full" style={{ background: accent, opacity: 0.3, animation: `neural-pulse ${1.5 + col * 0.2 + row * 0.1}s ease-in-out ${col * 0.3 + row * 0.15}s infinite` }} />
          ))}
        </div>
      ))}
    </div>
  )
}

function CSSCandles({ accent }: { accent: string }) {
  const candles = [
    { h: 40, up: true }, { h: 55, up: false }, { h: 30, up: true },
    { h: 65, up: true }, { h: 48, up: false }, { h: 80, up: true },
  ]
  return (
    <div className="flex items-end gap-2 p-12 h-48">
      {candles.map((c, i) => (
        <div key={i} className="flex-1 rounded-sm" style={{ height: `${c.h}%`, background: c.up ? accent : "#EF4444", opacity: 0.7 }} />
      ))}
    </div>
  )
}

function CSSMap({ accent }: { accent: string }) {
  const dots = Array.from({ length: 20 }, (_, i) => ({ x: (i * 47) % 90 + 5, y: (i * 31) % 80 + 10 }))
  return (
    <div className="relative w-full h-48 p-8">
      <div className="absolute inset-6 border rounded-full opacity-10" style={{ borderColor: accent }} />
      <div className="absolute inset-10 border rounded-full opacity-10" style={{ borderColor: accent }} />
      {dots.map((d, i) => (
        <div key={i} className="absolute w-1 h-1 rounded-full" style={{ left: `${d.x}%`, top: `${d.y}%`, background: accent, opacity: 0.5 }} />
      ))}
    </div>
  )
}

export default function VenturesSection() {
  return <div id="ventures">{ventures.map(v => <VentureCard key={v.id} v={v} />)}</div>
}
