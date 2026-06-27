"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400)
    const t2 = setTimeout(() => setPhase(2), 900)
    const t3 = setTimeout(() => setPhase(3), 1400)
    const t4 = setTimeout(() => setPhase(4), 1900)
    const t5 = setTimeout(() => onComplete(), 2500)
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [onComplete])

  const dots = [
    { cx: 50, cy: 30 },
    { cx: 20, cy: 60 },
    { cx: 80, cy: 60 },
    { cx: 35, cy: 85 },
    { cx: 65, cy: 85 },
  ]

  const lines = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2],
  ]

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
          {phase >= 1 && lines.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={dots[a].cx} y1={dots[a].cy}
              x2={dots[b].cx} y2={dots[b].cy}
              stroke="#C9A84C"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            />
          ))}
          {phase >= 1 && dots.map((d, i) => (
            <motion.circle
              key={i}
              cx={d.cx} cy={d.cy} r="1.5"
              fill="#C9A84C"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            />
          ))}
        </svg>
      </div>

      <div className="text-center -mt-16">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={phase >= 2 ? { opacity: 1, letterSpacing: "0.3em" } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white tracking-[0.3em] mb-2"
          style={{ fontFamily: "serif" }}
        >
          VERSA
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] text-[#C9A84C] uppercase"
        >
          Growth Ventures
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs text-white/40 tracking-widest mt-3 uppercase"
        >
          Five Ventures · One Vision
        </motion.div>
      </div>
    </motion.div>
  )
}
