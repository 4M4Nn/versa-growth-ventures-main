"use client"
import { useState } from "react"
import { VENTURES } from "@/lib/data"
import { ArrowUpRight, ExternalLink } from "lucide-react"

export default function VenturesSection() {
  const [active, setActive] = useState(0)
  const v = VENTURES[active]
  return (
    <section className="py-24 bg-[#080E08]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR PORTFOLIO</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F0EDE6] mb-4">Five Ventures</h2>
          <p className="text-[#A8B89A] max-w-xl mx-auto">Each venture is a complete world — with its own team, clients, and story of impact.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-1 mb-12">
          {VENTURES.map((item, i) => (
            <button key={item.id} onClick={() => setActive(i)}
              className={`group relative overflow-hidden p-6 text-left transition-all duration-500 border ${i === active ? "border-[#C9A84C]/40 bg-[#C9A84C]/5" : "border-[#2A3A2A] bg-transparent hover:bg-[#C9A84C]/3"}`}>
              <p className="text-xs tracking-widest mb-2" style={{ color: i === active ? "#C9A84C" : "#4A7C59" }}>{item.label}</p>
              <p className={`font-playfair text-lg font-bold mb-1 ${i === active ? "text-[#F0EDE6]" : "text-[#A8B89A]"}`}>{item.name}</p>
              <p className="text-xs text-[#4A7C59] group-hover:text-[#A8B89A] transition-colors">{item.sub}</p>
            </button>
          ))}
        </div>
        {/* Active venture detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl" style={{ background: `${v.bg}`, border: `1px solid ${v.accent}30` }}>
          <div>
            <p className="text-xs tracking-widest mb-3" style={{ color: v.accent }}>{v.num} — {v.label}</p>
            <h3 className="font-playfair text-4xl font-bold text-[#F0EDE6] mb-3">{v.name}</h3>
            <p className="text-[#A8B89A] text-lg mb-2">{v.sub}</p>
            <p className="text-[#A8B89A] leading-relaxed mb-8">{v.story}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {v.stats.map(s => (
                <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: `${v.accent}10` }}>
                  <p className="font-bold text-2xl mb-1" style={{ color: v.accent }}>{s.value}</p>
                  <p className="text-[#A8B89A] text-xs">{s.label}</p>
                </div>
              ))}
            </div>
            {v.comingSoon ? (
              <span className="inline-block px-6 py-3 border text-sm tracking-widest" style={{ borderColor: v.accent, color: v.accent }}>COMING SOON</span>
            ) : (
              <a href={v.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold tracking-widest transition-all"
                style={{ background: v.accent, color: "#080E08" }}>
                VISIT SITE <ExternalLink size={14} />
              </a>
            )}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full opacity-20 animate-pulse-slow" style={{ background: `radial-gradient(circle, ${v.accent}, transparent)` }} />
              <div className="relative text-center">
                <p className="font-playfair" style={{ fontSize:"clamp(48px,8vw,96px)", fontWeight:900, color: v.accent, lineHeight:1 }}>{v.metric}</p>
                <p className="text-[#A8B89A] text-sm tracking-widest mt-2 uppercase">{v.metricLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
