"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { ventureInterests, siteConfig } from "@/lib/data"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [burst, setBurst] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.service, source_website: "versa-main", message: form.message })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setBurst(true)
    setTimeout(() => { setSent(true); setLoading(false) }, 600)
  }

  const inputCls = "w-full bg-transparent border-b border-white/20 focus:border-[#C9A84C] outline-none text-white placeholder-white/30 py-3 font-inter text-base transition-all duration-300"

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 py-32" style={{ background: "#0C1A0E" }}>
      {/* Animated BG particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="absolute w-0.5 h-0.5 rounded-full pointer-events-none"
          style={{ background: "#C9A84C", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.2, animation: `drift ${5 + Math.random() * 8}s ease-in-out ${Math.random() * 5}s infinite` }} />
      ))}
      {/* Moving mesh gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 20% 80%, rgba(74,124,89,0.06) 0%, transparent 60%)", animation: "gradientShift 8s ease infinite", backgroundSize: "200% 200%" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-16">
          <p className="label text-[#C9A84C] mb-4" style={{ letterSpacing: "3px" }}>/ Get In Touch</p>
          <h2 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>
            Let&apos;s build something<br />together.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — animated info */}
          <div className="flex flex-col gap-8">
            {[
              { icon: "📍", label: "Location", val: siteConfig.location, anim: "float 4s ease-in-out infinite" },
              { icon: "📞", label: "Phone", val: siteConfig.phone, anim: "float 4s ease-in-out 0.5s infinite" },
              { icon: "✉️", label: "Email", val: siteConfig.email, anim: "float 4s ease-in-out 1s infinite" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" style={{ animation: item.anim }}>{item.icon}</span>
                <div>
                  <p className="label text-[#5A6B5C] mb-1">{item.label}</p>
                  <p className="font-inter text-white text-base">{item.val}</p>
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-[#25D366] text-white font-inter font-medium rounded-sm text-sm hover:bg-[#1FAD57] transition-colors"
              style={{ animation: "pulseGlow 2s ease-in-out infinite" }}>
              💬 Chat on WhatsApp →
            </a>
          </div>

          {/* Right — form */}
          {sent ? (
            <div className="flex flex-col justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-3xl" style={{ animation: "pulseGlow 2s ease-in-out infinite" }}>✓</div>
              <h3 className="font-playfair text-3xl text-white">Message sent!</h3>
              <p className="font-inter text-[#A8B89A]">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6 relative">
              {burst && (
                <div className="absolute inset-0 pointer-events-none z-20">
                  {Array.from({length:12}).map((_,i)=>(
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#C9A84C]" style={{ left:"50%", top:"50%", animation: `particle-rise 0.8s ease-out ${i*0.05}s forwards`, "--px": `${(Math.random()-0.5)*120}px` } as React.CSSProperties} />
                  ))}
                </div>
              )}
              <input required placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} />
              <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} />
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputCls + " bg-transparent"}>
                <option value="" className="bg-[#0C1A0E]">Venture Interest</option>
                {ventureInterests.map(s => <option key={s} value={s} className="bg-[#0C1A0E]">{s}</option>)}
              </select>
              <textarea placeholder="Message (optional)" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className={inputCls + " resize-none"} />
              <button type="submit" disabled={loading}
                className="w-full h-14 relative overflow-hidden font-playfair font-bold text-base transition-all disabled:opacity-70 rounded-sm"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)", backgroundSize: "200%", color: "#080E08", animation: "shimmer 2s ease-in-out infinite" }}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
