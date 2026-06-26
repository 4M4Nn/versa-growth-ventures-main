"use client"
import { useEffect, useState } from "react"

const DOTS = [
  { cx: 120, cy: 80 }, { cx: 280, cy: 60 }, { cx: 360, cy: 140 },
  { cx: 300, cy: 240 }, { cx: 140, cy: 220 }, { cx: 60, cy: 160 },
]
const LINES = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,2],[1,4],
]
const LETTERS = "VERSA".split("")

export default function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("versa-main-intro")) {
      onDone?.(); setDone(true); return
    }
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1600)
    const t4 = setTimeout(() => setPhase(4), 2400)
    const t5 = setTimeout(() => setPhase(5), 3100)
    const t6 = setTimeout(() => {
      setVisible(false)
      setTimeout(() => { sessionStorage.setItem("versa-main-intro","1"); onDone?.(); setDone(true) }, 700)
    }, 3800)
    return () => [t1,t2,t3,t4,t5,t6].forEach(clearTimeout)
  }, [onDone])

  if (done) return null

  return (
    <div style={{
      position:"fixed",inset:0,background:"#080E08",zIndex:9999,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      transition:"opacity 0.7s ease",opacity:visible?1:0,overflow:"hidden"
    }}>
      {/* Constellation SVG */}
      <svg width="420" height="300" viewBox="0 0 420 300" style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-60%)", opacity: phase >= 1 ? 1 : 0, transition:"opacity 0.5s" }}>
        {LINES.map(([a,b], i) => {
          const d1 = DOTS[a], d2 = DOTS[b]
          const len = Math.hypot(d2.cx-d1.cx, d2.cy-d1.cy)
          return (
            <line key={i} x1={d1.cx} y1={d1.cy} x2={d2.cx} y2={d2.cy}
              stroke="#C9A84C" strokeWidth="1" opacity="0.4"
              strokeDasharray={len} strokeDashoffset={phase >= 2 ? 0 : len}
              style={{ transition: `stroke-dashoffset 0.6s ease ${i*0.08}s` }} />
          )
        })}
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r="5" fill="#C9A84C"
            style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "scale(1)" : "scale(0)", transformOrigin:`${d.cx}px ${d.cy}px`,
              transition: `opacity 0.4s ${i*0.1}s, transform 0.4s ${i*0.1}s` }}
          />
        ))}
      </svg>
      {/* VERSA text */}
      <div style={{ display:"flex", gap: 8, marginTop: 60, zIndex:1 }}>
        {LETTERS.map((l, i) => (
          <span key={i} style={{
            fontSize:"clamp(40px,8vw,72px)", fontWeight:900, color:"#C9A84C",
            letterSpacing:"0.3em", fontFamily:"serif",
            opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.5s ${i*0.08}s, transform 0.5s ${i*0.08}s`,
            textShadow:"0 0 30px rgba(201,168,76,0.6)"
          }}>{l}</span>
        ))}
      </div>
      <p style={{
        fontSize:11, letterSpacing:"0.4em", color:"rgba(201,168,76,0.7)", marginTop:12,
        opacity: phase >= 4 ? 1 : 0, transition:"opacity 0.5s",
        fontFamily:"sans-serif", textTransform:"uppercase"
      }}>GROWTH VENTURES</p>
      {/* Gold line */}
      <div style={{
        height:1, background:"linear-gradient(90deg,transparent,#C9A84C,transparent)",
        width: phase >= 5 ? 160 : 0, marginTop:16,
        transition:"width 0.8s ease", boxShadow:"0 0 8px #C9A84C"
      }} />
    </div>
  )
}
