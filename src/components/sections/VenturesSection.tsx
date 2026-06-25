"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ventures } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

/* ── Animated Visuals ── */

function IPBVisual({ accent }: { accent: string }) {
  const banks = ["HDFC","Kotak","IndusInd","Yes Bank","Axis","IDFC"]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: `linear-gradient(135deg, #0A1628 0%, #001A5C 100%)`, border: `1px solid ${accent}25` }}>
      {/* Counter */}
      <div className="relative z-10 text-center">
        <div className="font-playfair font-bold mb-2" style={{ fontSize: "clamp(48px,7vw,80px)", color: accent }}>13,200+</div>
        <p className="label text-white/50" style={{ letterSpacing: "2px" }}>Students Placed</p>
      </div>
      {/* Floating bank pills */}
      {banks.map((b, i) => (
        <div key={b} className="absolute text-xs font-inter px-2 py-1 rounded-full"
          style={{ border: `1px solid ${accent}40`, color: accent, opacity: 0.6,
            left: `${10 + (i % 3) * 30}%`, top: `${10 + Math.floor(i / 3) * 60}%`,
            animation: `float ${2.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` }}>
          {b}
        </div>
      ))}
      {/* Graduation cap */}
      <div className="absolute top-4 right-4 text-4xl" style={{ animation: "float 4s ease-in-out infinite" }}>🎓</div>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${accent}12 0%, transparent 70%)`, animation: "glow-pulse 3s ease-in-out infinite" }} />
    </div>
  )
}

function DigitalVisual({ accent }: { accent: string }) {
  const bars = [40, 60, 55, 80, 65, 90, 75, 100]
  const metrics = ["3x Traffic", "5x Engagement", "4x ROAS"]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #060D18 0%, #0A1A20 100%)", border: `1px solid ${accent}20` }}>
      {/* Animated bar chart */}
      <div className="relative z-10 w-full px-8">
        <div className="flex items-end gap-2 h-32 mb-4">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, ${accent}, ${accent}80)`, animation: `chartRise 0.8s ease-out ${i * 0.1}s both`, transformOrigin: "bottom" }} />
          ))}
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {metrics.map((m, i) => (
            <span key={m} className="text-xs font-inter px-3 py-1.5 rounded-full"
              style={{ border: `1px solid ${accent}40`, color: accent, animation: `fadeSlideUp 0.6s ease-out ${0.5 + i * 0.15}s both` }}>
              {m}
            </span>
          ))}
        </div>
      </div>
      {/* Scan line */}
      <div className="absolute left-0 right-0 h-0.5 pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, animation: "scanLine 2.5s ease-in-out infinite" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${accent}08 0%, transparent 70%)` }} />
    </div>
  )
}

function GlobalVisual({ accent }: { accent: string }) {
  const cities = [
    { name: "Kerala", cx: 62, cy: 72, home: true },
    { name: "UK", cx: 46, cy: 28 }, { name: "USA", cx: 22, cy: 38 },
    { name: "Canada", cx: 20, cy: 25 }, { name: "Australia", cx: 75, cy: 75 },
    { name: "Germany", cx: 49, cy: 30 }, { name: "Dubai", cx: 60, cy: 48 },
  ]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #050D20 0%, #0A1628 100%)", border: `1px solid ${accent}20` }}>
      <div className="relative z-10 w-full h-64 px-6">
        {/* World map dots */}
        <svg viewBox="0 0 100 80" className="w-full h-full" style={{ opacity: 0.9 }}>
          {cities.slice(1).map((c, i) => (
            <g key={c.name}>
              {/* Arc from Kerala */}
              <path d={`M 62 72 Q ${(62 + c.cx) / 2} ${Math.min(c.cy, 72) - 20} ${c.cx} ${c.cy}`}
                fill="none" stroke={accent} strokeWidth="0.5" opacity="0.4"
                strokeDasharray="100" style={{ animation: `arcDraw 2s ease-out ${i * 0.3}s forwards` }} />
              {/* City dot */}
              <circle cx={c.cx} cy={c.cy} r="1.5" fill={accent} opacity="0.8">
                <animate attributeName="r" values="1.5;2.5;1.5" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          {/* Kerala home dot */}
          <circle cx="62" cy="72" r="2.5" fill={accent}>
            <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="62" cy="72" r="6" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.3">
            <animate attributeName="r" values="4;9;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" style={{ marginTop: -40 }}>
            <span className="font-playfair font-bold text-4xl" style={{ color: accent }}>60+</span>
            <p className="text-white/40 text-xs font-inter mt-1">Countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ElyraVisual({ accent }: { accent: string }) {
  const nodes = [
    [50, 10], [20, 35], [50, 35], [80, 35],
    [20, 60], [50, 60], [80, 60], [50, 85],
  ]
  const edges = [[0,1],[0,2],[0,3],[1,4],[2,4],[2,5],[3,5],[3,6],[4,7],[5,7],[6,7]]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #030810 0%, #050D18 100%)", border: `1px solid ${accent}20` }}>
      {/* Binary rain */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="absolute top-0 font-mono text-[10px] pointer-events-none select-none"
          style={{ left: `${10 + i * 12}%`, color: accent, opacity: 0,
            animation: `binary-rain ${2 + i * 0.3}s linear ${i * 0.4}s infinite` }}>
          {Array.from({ length: 15 }).map((_, j) => <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>)}
        </div>
      ))}
      {/* Neural network SVG */}
      <svg viewBox="0 0 100 100" className="relative z-10 w-48 h-48">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={accent} strokeWidth="0.5" opacity="0.3"
            strokeDasharray="50" style={{ animation: `arcDraw ${1 + i * 0.15}s ease-out ${i * 0.1}s forwards` }} />
        ))}
        {nodes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={accent} opacity="0.6"
            style={{ animation: `neuralPulse ${1.5 + i * 0.2}s ease-in-out ${i * 0.15}s infinite` }}>
          </circle>
        ))}
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-xs font-inter" style={{ color: accent, opacity: 0.7 }}>AI Processing...</span>
      </div>
    </div>
  )
}

function TradingVisual({ accent }: { accent: string }) {
  const candles = [
    { h: 30, up: true, open: 60, close: 90 },
    { h: 20, up: false, open: 80, close: 60 },
    { h: 40, up: true, open: 55, close: 95 },
    { h: 25, up: false, open: 88, close: 63 },
    { h: 50, up: true, open: 50, close: 100 },
    { h: 35, up: true, open: 60, close: 95 },
  ]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #060810 0%, #0A0E1A 100%)", border: `1px solid ${accent}20` }}>
      {/* Price ticker */}
      <div className="absolute top-4 left-0 right-0 overflow-hidden h-6 pointer-events-none">
        <div className="flex gap-6 whitespace-nowrap text-xs font-inter" style={{ animation: "scrollLeft 10s linear infinite", color: accent, opacity: 0.5 }}>
          {["NIFTY +0.8%","SENSEX +1.2%","GOLD +0.3%","SILVER -0.1%","CRUDE +0.5%","NIFTY +0.8%","SENSEX +1.2%"].map((t,i) => <span key={i}>{t} &nbsp;&nbsp;</span>)}
        </div>
      </div>
      <div className="relative z-10 flex items-end gap-2 h-32 px-8 mt-4">
        {candles.map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center" style={{ animation: `chartRise 0.6s ease-out ${i * 0.1}s both` }}>
            <div className="w-0.5 flex-1" style={{ background: c.up ? "#22C55E" : "#EF4444", minHeight: 4 }} />
            <div className="w-full rounded-sm" style={{ height: `${c.h}px`, background: c.up ? "#22C55E" : "#EF4444", opacity: 0.8 }} />
            <div className="w-0.5" style={{ height: 8, background: c.up ? "#22C55E" : "#EF4444" }} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 text-center">
        <span className="text-xs font-inter text-[#22C55E] font-medium">↑ Market Open</span>
      </div>
    </div>
  )
}

function ExportsVisual({ accent }: { accent: string }) {
  const routes = [
    { x1: 62, y1: 72, x2: 46, y2: 28, flag: "🇬🇧" },
    { x1: 62, y1: 72, x2: 22, y2: 38, flag: "🇺🇸" },
    { x1: 62, y1: 72, x2: 75, y2: 45, flag: "🇦🇪" },
  ]
  return (
    <div className="relative w-full h-full min-h-[320px] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{ background: "linear-gradient(135deg, #050D15 0%, #0A1520 100%)", border: `1px solid ${accent}20` }}>
      <svg viewBox="0 0 100 90" className="relative z-10 w-full h-52 px-4">
        {routes.map((r, i) => (
          <g key={i}>
            <path d={`M ${r.x1} ${r.y1} Q ${(r.x1+r.x2)/2} ${Math.min(r.y1,r.y2)-15} ${r.x2} ${r.y2}`}
              fill="none" stroke={accent} strokeWidth="0.8" opacity="0.5"
              strokeDasharray="80" style={{ animation: `arcDraw 2s ease-out ${i * 0.5}s infinite` }} />
            <text x={r.x2-3} y={r.y2-4} fontSize="8">{r.flag}</text>
          </g>
        ))}
        <circle cx="62" cy="72" r="2" fill={accent}>
          <animate attributeName="r" values="2;4;2" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute bottom-4 text-center">
        <span className="font-playfair font-bold text-2xl" style={{ color: accent }}>60+</span>
        <p className="text-white/40 text-xs font-inter">Export Destinations</p>
      </div>
    </div>
  )
}

const VISUALS: Record<string, React.FC<{ accent: string }>> = {
  ipb: IPBVisual, digital: DigitalVisual, global: GlobalVisual,
  elyra: ElyraVisual, trading: TradingVisual, exports: ExportsVisual,
}

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
        trigger: sec.current, start: "top 75%",
        onEnter: () => {
          gsap.to(left, { x: 0, opacity: 1, duration: 1, ease: "power4.out" })
          gsap.to(right, { x: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.1 })
        },
      })
    }, sec)
    return () => ctx.revert()
  }, [])
  const isEven = parseInt(v.num) % 2 === 0
  const VisualComp = VISUALS[v.id]
  const textColor = v.textDark ? v.accent : (v.accent || "#C9A84C")
  const headingColor = v.textDark ? "#1A1A2E" : "#FFFFFF"
  const bodyColor = v.textDark ? "#475569" : "rgba(255,255,255,0.6)"

  return (
    <section ref={sec} id={`venture-${v.id}`} className="min-h-screen flex items-center overflow-hidden" style={{ background: v.bg }}>
      <div className={`w-full max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center`}>
        <div className={`vc-left ${isEven ? "md:order-2" : ""}`}>
          <p className="label mb-4" style={{ color: textColor, letterSpacing: "3px" }}>{v.num} / {v.label}</p>
          <h2 className="font-playfair font-bold mb-4" style={{ fontSize: "clamp(36px,5.5vw,72px)", lineHeight: 1, color: headingColor }}>{v.name}</h2>
          <p className="font-inter mb-6" style={{ fontSize: 17, lineHeight: 1.7, color: bodyColor }}>{v.sub}</p>
          {v.metric && (
            <div className="mb-8">
              <span className="font-playfair font-bold" style={{ fontSize: "clamp(32px,4.5vw,52px)", color: textColor }}>{v.metric}</span>
              <p className="label mt-1" style={{ color: bodyColor, letterSpacing: "2px" }}>{v.metricLabel}</p>
            </div>
          )}
          {v.soon ? (
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-inter border" style={{ borderColor: textColor, color: textColor }}>Coming Soon</span>
          ) : (
            <a href={v.url ?? "#"} target={v.url ? "_blank" : undefined} rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-sm font-medium transition-all hover:gap-3"
              style={{ color: textColor }}>Explore {v.name} →</a>
          )}
        </div>
        <div className={`vc-right ${isEven ? "md:order-1" : ""}`}>
          {VisualComp ? <VisualComp accent={v.accent} /> : (
            <div className="min-h-[280px] rounded-2xl" style={{ background: `linear-gradient(135deg, ${v.bg} 0%, ${v.accent}18 100%)`, border: `1px solid ${v.accent}25` }} />
          )}
        </div>
      </div>
    </section>
  )
}

export default function VenturesSection() {
  return <div id="ventures">{ventures.map(v => <VentureCard key={v.id} v={v} />)}</div>
}
