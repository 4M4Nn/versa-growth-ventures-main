"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const words = ["We", "don't", "build", "one", "business.", "We", "build", "ecosystems.", "Every", "venture", "we", "create", "solves", "a", "real", "problem", "at", "scale."]

export default function ScrollStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0C1A0E]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="inline-block mr-4"
            >
              {["ecosystems.", "scale."].includes(word) ? (
                <span className="text-[#8FBC5A]">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}
