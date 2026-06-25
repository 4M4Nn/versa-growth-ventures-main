"use client"
import { useState } from "react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { ventureInterests, siteConfig } from "@/lib/data"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    await saveLead({ name: form.name, phone: form.phone, email: form.email, service_interested: form.service, source_website: "versa-main", message: form.message })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setSent(true)
    setLoading(false)
  }

  const inputCls = "w-full bg-transparent border-b border-white/20 focus:border-[#C9A84C] outline-none text-white placeholder-white/30 py-3 font-inter text-base transition-colors"

  return (
    <section id="contact" className="min-h-screen flex items-center bg-[#0C1A0E] px-6 md:px-12 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <p className="label text-[#C9A84C] mb-4" style={{ letterSpacing: "3px" }}>/ Get In Touch</p>
          <h2 className="font-playfair font-bold text-white" style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1 }}>
            Let&apos;s build something<br />together.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {[{ label: "Phone", val: siteConfig.phone }, { label: "Email", val: siteConfig.email }, { label: "Location", val: siteConfig.location }].map(item => (
              <div key={item.label}>
                <p className="label text-[#5A6B5C] mb-1">{item.label}</p>
                <p className="font-inter text-white text-base">{item.val}</p>
              </div>
            ))}
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#25D366] text-white font-inter font-medium rounded-sm text-sm">
              Chat on WhatsApp →
            </a>
          </div>

          {/* Right — form */}
          {sent ? (
            <div className="flex flex-col justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-xl">✓</div>
              <h3 className="font-playfair text-2xl text-white">Message sent!</h3>
              <p className="font-inter text-[#A8B89A]">We&apos;ll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-6">
              <input required placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputCls} />
              <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} />
              <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} />
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputCls + " bg-transparent"}>
                <option value="" className="bg-[#0C1A0E]">Venture Interest</option>
                {ventureInterests.map(s => <option key={s} value={s} className="bg-[#0C1A0E]">{s}</option>)}
              </select>
              <textarea placeholder="Message (optional)" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={3} className={inputCls + " resize-none"} />
              <button type="submit" disabled={loading}
                className="w-full h-14 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#080E08] font-playfair font-bold text-base transition-colors disabled:opacity-70 rounded-sm">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
