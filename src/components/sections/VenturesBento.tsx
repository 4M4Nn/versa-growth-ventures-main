"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, TrendingUp, Globe, Brain, BarChart2, Package, ExternalLink } from "lucide-react"
import { ventures } from "@/lib/data"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  TrendingUp,
  Globe,
  Brain,
  BarChart2,
  Package,
}

export default function VenturesBento() {
  const [comingSoonVenture, setComingSoonVenture] = useState<string | null>(null)

  const handleVentureClick = (venture: typeof ventures[0]) => {
    if (venture.comingSoon) {
      setComingSoonVenture(venture.name)
    } else {
      window.open(venture.url, "_blank")
    }
  }

  return (
    <section id="ventures" className="py-24 px-6 bg-[#0C1A0E]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8FBC5A] text-sm tracking-widest uppercase font-medium">Our Portfolio</span>
          <h2 className="font-playfair text-4xl md:text-6xl text-white font-bold mt-3">
            Six pillars of growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large card - IPB */}
          {ventures.slice(0, 1).map((v) => {
            const Icon = iconMap[v.icon]
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                onClick={() => handleVentureClick(v)}
                className="col-span-2 row-span-2 glass rounded-2xl p-8 cursor-pointer border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all duration-300 relative overflow-hidden group"
                style={{ minHeight: "300px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center mb-6 float-animation">
                    <Icon size={32} className="text-[#C9A84C]" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 rounded-full mb-4">
                    <span className="text-[#C9A84C] text-xs font-bold">{v.stat}</span>
                  </div>
                  <h3 className="font-playfair text-3xl text-white font-bold mb-3">{v.name}</h3>
                  <p className="text-[#A8B89A] text-sm leading-relaxed mb-6">{v.description}</p>
                  <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-medium">
                    <span>Visit IPB</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Medium cards */}
          {ventures.slice(1, 3).map((v, i) => {
            const Icon = iconMap[v.icon]
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleVentureClick(v)}
                className="col-span-1 glass rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group"
                style={{ borderColor: v.color + "30", minHeight: "140px" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: v.color + "15" }}>
                  <Icon size={20} style={{ color: v.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{v.name}</h3>
                <p className="text-[#A8B89A] text-xs mb-3">{v.tagline}</p>
                <div className="flex items-center gap-1" style={{ color: v.color }}>
                  <span className="text-xs font-medium">Visit</span>
                  <ExternalLink size={12} />
                </div>
              </motion.div>
            )
          })}

          {/* Small cards */}
          {ventures.slice(3).map((v, i) => {
            const Icon = iconMap[v.icon]
            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleVentureClick(v)}
                className="col-span-1 glass rounded-2xl p-5 cursor-pointer transition-all duration-300 relative overflow-hidden group"
                style={{ borderColor: v.color + "20" }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: v.color + "15" }}>
                  <Icon size={16} style={{ color: v.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{v.name}</h3>
                {v.comingSoon && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[#4A7C59]/20 text-[#8FBC5A] text-xs rounded-full">
                    Coming Soon
                  </span>
                )}
                {!v.comingSoon && (
                  <div className="flex items-center gap-1 mt-1" style={{ color: v.color }}>
                    <span className="text-xs">Visit</span>
                    <ExternalLink size={10} />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {comingSoonVenture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setComingSoonVenture(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass rounded-2xl p-8 max-w-sm w-full text-center border border-[#4A7C59]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-[#4A7C59]/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">&#128640;</span>
              </div>
              <h3 className="font-playfair text-2xl text-white font-bold mb-3">{comingSoonVenture}</h3>
              <p className="text-[#A8B89A] mb-6">We are building something extraordinary. Stay tuned for the launch.</p>
              <button
                onClick={() => setComingSoonVenture(null)}
                className="px-6 py-3 bg-[#4A7C59] text-white rounded-full font-medium hover:bg-[#8FBC5A] transition-colors"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
