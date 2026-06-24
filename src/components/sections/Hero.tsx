"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-2 border-[#8FBC5A] rounded-full animate-spin border-t-transparent" />
    </div>
  ),
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0C1A0E]">
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4A7C59]/40 bg-[#4A7C59]/10 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#8FBC5A] animate-pulse" />
          <span className="text-[#8FBC5A] text-xs tracking-widest font-medium uppercase">
            Diversified Growth Ecosystem &middot; Kerala
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Six Ventures.
          <br />
          <span className="olive-gradient">One Vision.</span>
          <br />
          Infinite Growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-[#A8B89A] text-lg leading-relaxed mb-10 max-w-lg"
        >
          A multi-venture enterprise spanning education, technology, trading, exports, digital marketing, and AI innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#ventures"
            className="px-8 py-4 bg-[#4A7C59] hover:bg-[#8FBC5A] text-white rounded-full font-medium transition-all duration-300 text-center"
          >
            Explore Ventures
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 hover:border-[#8FBC5A] text-white rounded-full font-medium transition-all duration-300 text-center"
          >
            Book Consultation
          </a>
        </motion.div>
      </div>

      <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
        <HeroScene />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#4A7C59]/10 border-t border-[#4A7C59]/20 py-3 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="text-[#A8B89A] text-xs tracking-widest">
              IPB KOCHI &middot; VERSA DIGITAL &middot; VERSA GLOBAL &middot; ELYRA AI &middot; VERSA TRADING &middot; VERSA EXPORTS &middot;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
