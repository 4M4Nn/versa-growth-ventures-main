"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { WA_URL } from "@/lib/data"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let frame = 0
    const dots = [
      {x:15,y:20},{x:75,y:12},{x:88,y:55},{x:62,y:82},{x:18,y:72},{x:45,y:45}
    ]
    let t = 0
    const animate = () => {
      t += 0.003
      if (ref.current) {
        const canvas = ref.current.querySelector("canvas")
        if (canvas) {
          const ctx = (canvas as HTMLCanvasElement).getContext("2d")
          if (ctx) {
            const W = canvas.width, H = canvas.height
            ctx.clearRect(0,0,W,H)
            const pts = dots.map((d,i) => ({
              x: (d.x/100)*W + Math.sin(t+i)*12,
              y: (d.y/100)*H + Math.cos(t*0.7+i*1.3)*10
            }))
            ctx.strokeStyle = "rgba(201,168,76,0.25)"
            ctx.lineWidth = 1
            for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
              const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y
              if(Math.hypot(dx,dy) < W*0.35) {
                ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke()
              }
            }
            pts.forEach((p,i) => {
              ctx.beginPath(); ctx.arc(p.x,p.y,3+Math.sin(t*2+i),0,Math.PI*2)
              ctx.fillStyle = `rgba(201,168,76,${0.4+Math.sin(t*1.5+i)*0.3})`; ctx.fill()
            })
          }
        }
      }
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#080E08] flex items-center overflow-hidden">
      <div ref={ref} className="absolute inset-0">
        <canvas className="w-full h-full" style={{ position:"absolute",inset:0 }}
          ref={el => { if(el){el.width=el.offsetWidth||1200;el.height=el.offsetHeight||800} }} />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080E08]/30 to-[#080E08]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6 animate-fade-slide-up">Kerala&apos;s Premier Business Group</p>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EDE6] leading-tight mb-8" style={{ animationDelay:"0.1s" }}>
            Five Ventures.<br/>
            <span className="gradient-gold">One Vision.</span><br/>
            Infinite Growth.
          </h1>
          <p className="text-[#A8B89A] text-lg leading-relaxed mb-10 max-w-lg">
            Banking education. AI marketing. Study abroad. Financial services. Premium exports.
            Five ventures solving Kerala&apos;s most pressing growth challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/ventures" className="px-8 py-4 bg-[#C9A84C] text-[#080E08] font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">
              Explore Ventures
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border border-[#C9A84C] text-[#C9A84C] font-medium text-sm tracking-widest uppercase hover:bg-[#C9A84C]/10 transition-colors">
              Book Consultation
            </a>
          </div>
        </div>
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {[["13,200+","Banking Students Placed","#C9A84C"],["60+","Countries Covered","#10B981"],["4x","Average ROAS","#00D4C8"],["5","Active Ventures","#E8C96A"]].map(([v,l,c])=>(
            <div key={l} className="glass-card rounded-2xl p-6 text-center">
              <p className="font-playfair text-4xl font-bold mb-2" style={{color:c}}>{v}</p>
              <p className="text-[#A8B89A] text-xs tracking-wider uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" style={{animation:"scroll-pulse 2s ease-in-out infinite"}} />
      </div>
    </section>
  )
}
