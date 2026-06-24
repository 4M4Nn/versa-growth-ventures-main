"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CinematicOpening() {
  const [phase, setPhase] = useState(0)
  const [visible, setVisible] = useState(true)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    if (skipped) {
      setVisible(false)
      return
    }
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
      setTimeout(() => setPhase(5), 4500),
      setTimeout(() => setVisible(false), 5500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [skipped])

  if (!visible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#8FBC5A]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: Math.random() * 4,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <AnimatePresence mode="wait">
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
                className="font-playfair text-5xl md:text-8xl font-bold text-[#8FBC5A] tracking-[0.3em] mb-2"
              >
                VERSA
              </motion.div>
            )}
          </AnimatePresence>

          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-2xl md:text-4xl text-white tracking-widest mb-8"
            >
              GROWTH VENTURES
            </motion.div>
          )}

          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#A8B89A] text-lg tracking-widest mb-4"
            >
              Diversified Growth. Powered by AI.
            </motion.div>
          )}

          {phase >= 4 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-px w-48 bg-gradient-to-r from-transparent via-[#8FBC5A] to-transparent mx-auto"
            />
          )}
        </div>

        <button
          onClick={() => setSkipped(true)}
          className="absolute bottom-8 right-8 text-[#A8B89A] hover:text-white transition-colors text-sm tracking-widest"
        >
          SKIP &rarr;
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
