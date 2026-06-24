"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="mission" ref={ref} className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, #4A7C59 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-12"
        />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white italic font-light leading-relaxed"
        >
          &ldquo;Our mission is to build a diversified growth ecosystem that empowers businesses, students, and entrepreneurs through education, technology, and innovation.&rdquo;
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mt-12 mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-[#A8B89A] text-sm tracking-widest uppercase"
        >
          &mdash; Versa Growth Ventures, Kerala
        </motion.p>
      </div>
    </section>
  )
}
