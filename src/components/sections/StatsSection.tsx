"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, GraduationCap, Globe, Users } from "lucide-react"
import { STATS } from "@/lib/data"

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, GraduationCap, Globe, Users,
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString("en-IN")}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-[#F0F7F2]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">By The Numbers</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">A Track Record That Speaks</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => {
            const Icon = ICONS[stat.icon]
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-7 text-center shadow-sm border border-[#4A7C59]/10 hover:shadow-md hover:border-[#C9A84C]/30 transition-all">
                {Icon && <Icon size={22} className="text-[#4A7C59] mx-auto mb-3" />}
                <p className="font-playfair text-4xl font-bold text-[#C9A84C] mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-[#6B7280] text-xs tracking-wide">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
