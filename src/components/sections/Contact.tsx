"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { saveLead } from "@/lib/supabase"
import { openWhatsApp } from "@/lib/whatsapp"
import { contactInfo } from "@/lib/data"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", company: "", service: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!form.phone.trim()) e.phone = "Phone is required"
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await saveLead({
      name: form.name,
      phone: form.phone,
      email: form.email,
      company: form.company,
      service_interested: form.service,
      source_website: "versa-main",
      message: form.message,
    })
    openWhatsApp({ name: form.name, phone: form.phone, email: form.email, service: form.service })
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#060E07]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8FBC5A] text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white font-bold mt-3">
            Start Your Growth Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl text-white font-bold mb-8">Let&apos;s Build Together</h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center">
                  <Phone size={20} className="text-[#8FBC5A]" />
                </div>
                <div>
                  <p className="text-[#A8B89A] text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white font-medium">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center">
                  <Mail size={20} className="text-[#8FBC5A]" />
                </div>
                <div>
                  <p className="text-[#A8B89A] text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-medium">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#8FBC5A]" />
                </div>
                <div>
                  <p className="text-[#A8B89A] text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center border border-[#4A7C59]/30">
                <div className="text-5xl mb-4">&#9989;</div>
                <h3 className="font-playfair text-2xl text-white font-bold mb-3">Thank You!</h3>
                <p className="text-[#A8B89A]">We&apos;ve received your inquiry. Our team will contact you shortly on WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-[#4A7C59]/20 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white placeholder-[#A8B89A] text-sm outline-none focus:border-[#8FBC5A] transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white placeholder-[#A8B89A] text-sm outline-none focus:border-[#8FBC5A] transition-colors"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white placeholder-[#A8B89A] text-sm outline-none focus:border-[#8FBC5A] transition-colors"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white/5 border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white placeholder-[#A8B89A] text-sm outline-none focus:border-[#8FBC5A] transition-colors"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#0C1A0E] border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#8FBC5A] transition-colors"
                >
                  <option value="">Select a Venture</option>
                  <option value="IPB Kochi - Banking Course">IPB Kochi - Banking Course</option>
                  <option value="Versa Digital - Marketing">Versa Digital - Marketing</option>
                  <option value="Versa Global - Study Abroad">Versa Global - Study Abroad</option>
                  <option value="Elyra AI - AI Solutions">Elyra AI - AI Solutions</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-[#4A7C59]/30 rounded-xl px-4 py-3 text-white placeholder-[#A8B89A] text-sm outline-none focus:border-[#8FBC5A] transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#4A7C59] hover:bg-[#8FBC5A] text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
