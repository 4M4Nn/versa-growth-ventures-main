"use client"
import { useEffect, useRef, useState } from "react"
import { NUMBERS } from "@/lib/data"

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 1800, step = 20
        const total = Math.ceil(dur / step)
        let i = 0
        const t = setInterval(() => {
          i++
          setCount(Math.round(end * (i / total)))
          if (i >= total) { clearInterval(t); setCount(end) }
        }, step)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end])
  return <div ref={ref} className="font-playfair text-5xl md:text-6xl font-bold">{count.toLocaleString()}{suffix}</div>
}

export default function NumbersSection() {
  return (
    <section className="py-24 bg-[#080E08] border-y border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {NUMBERS.map((n) => (
            <div key={n.label} className="group">
              <div className="text-[#C9A84C] mb-3">
                <CountUp end={parseInt(n.value) || 0} suffix={n.suffix} />
              </div>
              <p className="text-[#A8B89A] text-sm tracking-widest uppercase">{n.label}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
