"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { metrics } from "@/lib/data"

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)
      if (ref.current) ref.current.textContent = current.toLocaleString() + suffix
      if (progress === 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, suffix])

  return <span ref={ref}>0</span>
}

export default function Metrics() {
  return (
    <section className="py-24 px-6 bg-[#060E07] border-y border-[#4A7C59]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-playfair text-4xl md:text-5xl font-bold gold-gradient mb-2">
                <CountUp target={m.value} suffix={m.suffix} />
              </div>
              <div className="text-[#A8B89A] text-sm tracking-wider uppercase">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
