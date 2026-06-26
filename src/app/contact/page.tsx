"use client"
import { useState } from "react"
import { submitLead } from "@/lib/supabase"
import { WA_URL, PHONE, EMAIL, ADDRESS, SOURCE } from "@/lib/data"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", venture: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Valid 10-digit phone required"
    if (!form.message.trim()) e.message = "Message is required"
    return e
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setStatus("loading")
    try {
      await submitLead({ ...form, source: SOURCE, created_at: new Date().toISOString() })
      setStatus("success")
      setForm({ name: "", email: "", phone: "", venture: "", message: "" })
    } catch { setStatus("error") }
  }

  return (
    <div className="pt-24 bg-[#080E08] min-h-screen">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">GET IN TOUCH</p>
        <h1 className="font-playfair text-5xl text-[#F0EDE6] font-bold mb-4">Contact Us</h1>
        <p className="text-[#A8B89A] text-lg">We respond within 24 hours. WhatsApp is fastest.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <p className="text-4xl mb-4">✓</p>
                <h3 className="font-playfair text-2xl text-[#F0EDE6] mb-2">Message Sent!</h3>
                <p className="text-[#A8B89A]">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[["name","Name","text"],["email","Email","email"],["phone","Phone (10 digits)","tel"]].map(([k,l,t]) => (
                  <div key={k}>
                    <input type={t} placeholder={l} value={form[k as keyof typeof form]}
                      onChange={e => setForm(f => ({...f,[k]:e.target.value}))}
                      className="w-full bg-[#0D1A0D] border border-[#2A3A2A] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm placeholder:text-[#4A7C59] focus:outline-none focus:border-[#C9A84C] transition-colors" />
                    {errors[k] && <p className="text-red-400 text-xs mt-1">{errors[k]}</p>}
                  </div>
                ))}
                <select value={form.venture} onChange={e => setForm(f => ({...f, venture:e.target.value}))}
                  className="w-full bg-[#0D1A0D] border border-[#2A3A2A] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors" style={{ color: form.venture ? "#F0EDE6" : "#4A7C59" }}>
                  <option value="">Select Venture (optional)</option>
                  <option>IPB Kochi</option><option>Versa Digital</option><option>Versa Global</option>
                  <option>Versa Finance</option><option>Versa Exports</option><option>General Inquiry</option>
                </select>
                <div>
                  <textarea placeholder="Your message" rows={4} value={form.message} onChange={e => setForm(f => ({...f, message:e.target.value}))}
                    className="w-full bg-[#0D1A0D] border border-[#2A3A2A] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm placeholder:text-[#4A7C59] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
                {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try WhatsApp.</p>}
                <button type="submit" disabled={status === "loading"}
                  className="w-full py-4 bg-[#C9A84C] text-[#080E08] font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-colors disabled:opacity-50">
                  {status === "loading" ? "SENDING…" : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>
          {/* Info */}
          <div className="flex flex-col gap-6">
            {[["📞","Phone",PHONE,`tel:${PHONE}`],["✉️","Email",EMAIL,`mailto:${EMAIL}`],["💬","WhatsApp","Chat with us",WA_URL],["📍","Address",ADDRESS,"#"]].map(([icon,label,value,link]) => (
              <a key={label} href={link} target={link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-[#C9A84C]/20 transition-all border border-transparent">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-[#F0EDE6] text-sm">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
