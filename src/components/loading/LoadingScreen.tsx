"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

const DOTS = [
  { x: 20, y: 25 }, { x: 75, y: 15 }, { x: 85, y: 60 },
  { x: 50, y: 80 }, { x: 15, y: 70 }, { x: 60, y: 40 },
]
const LINES = [
  [0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[5,2],[5,3],
]

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const wrap = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])
  const svgRef = useRef<SVGSVGElement>(null)
  const versaRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const lineUnderRef = useRef<HTMLDivElement>(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("intro-done")) {
      setGone(true); onDone?.(); return
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("intro-done", "1")
          setGone(true); onDone?.()
        }
      })
      // Phase 1: dots appear
      dotsRef.current.forEach((d, i) => {
        if (d) tl.to(d, { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(2)" }, 0.1 * i)
      })
      // Phase 2: lines draw
      const lines = svgRef.current?.querySelectorAll("line")
      lines?.forEach((l, i) => {
        tl.to(l, { strokeDashoffset: 0, opacity: 1, duration: 0.25, ease: "power2.out" }, 0.6 + i * 0.1)
      })
      // Phase 3: VERSA assembles
      tl.to(versaRef.current, { opacity: 1, letterSpacing: "0.05em", duration: 0.6, ease: "power3.out" }, 1.5)
      // Phase 4: subtitle + underline
      tl.to(subtitleRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" }, 2.2)
      tl.to(lineUnderRef.current, { width: "100%", duration: 0.5, ease: "power2.out" }, 2.4)
      // Phase 5: explode & exit
      tl.to([dotsRef.current, svgRef.current], { scale: 2.5, opacity: 0, duration: 0.4, ease: "power2.in", stagger: 0.03 }, 3.2)
      tl.to(wrap.current, { opacity: 0, duration: 0.4, ease: "power2.in" }, 3.5)
    })
    return () => ctx.revert()
  }, [onDone])

  if (gone) return null

  return (
    <div ref={wrap} className="fixed inset-0 z-[9999] bg-[#080E08] flex items-center justify-center overflow-hidden">
      {/* Particle field */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="absolute w-0.5 h-0.5 rounded-full bg-[#C9A84C]"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, opacity: Math.random() * 0.3 + 0.05,
            animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite` }} />
      ))}

      {/* Constellation SVG */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {LINES.map(([a, b], i) => {
          const x1 = `${DOTS[a].x}%`, y1 = `${DOTS[a].y}%`
          const x2 = `${DOTS[b].x}%`, y2 = `${DOTS[b].y}%`
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="#C9A84C" strokeWidth="1" opacity="0"
              strokeDasharray="300" strokeDashoffset="300"
              style={{ filter: "drop-shadow(0 0 4px #C9A84C)" }} />
          )
        })}
      </svg>

      {/* Dots */}
      {DOTS.map((d, i) => (
        <div key={i} ref={el => { dotsRef.current[i] = el }}
          className="absolute w-2 h-2 rounded-full bg-[#C9A84C]"
          style={{ left: `${d.x}%`, top: `${d.y}%`, transform: "scale(0)", opacity: 0, zIndex: 2,
            boxShadow: "0 0 8px #C9A84C, 0 0 20px rgba(201,168,76,.5)",
            animation: `pulseGlow 2s ease-in-out ${i * 0.3}s infinite` }} />
      ))}

      {/* Center text */}
      <div className="relative z-10 text-center">
        <div ref={versaRef} className="font-playfair font-bold text-white"
          style={{ fontSize: "clamp(64px,12vw,130px)", opacity: 0, letterSpacing: "0.8em",
            textShadow: "0 0 40px rgba(201,168,76,.4)" }}>
          VERSA
        </div>
        <div ref={subtitleRef} className="font-inter text-[#C9A84C] mt-1 opacity-0"
          style={{ fontSize: 13, letterSpacing: "0.4em" }}>
          GROWTH VENTURES
        </div>
        <div ref={lineUnderRef} className="h-px bg-[#C9A84C] mt-3 mx-auto" style={{ width: 0 }} />
      </div>
    </div>
  )
}
