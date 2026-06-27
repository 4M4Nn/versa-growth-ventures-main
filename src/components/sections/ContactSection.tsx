"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { SITE } from "@/lib/data"
import { saveLead } from "@/lib/supabase"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", venture: "", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = "Name is required"
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Valid 10-digit phone required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required"
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      await saveLead({ ...form, source: "versa-main" })
      setSubmitted(true)
    } catch {
      setErrors({ form: "Submission failed. Please call us directly." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Contact Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Start Your Versa Journey</h2>
          <p className="text-[#6B7280] mt-3">Free consultation. No obligation. Expert guidance from day one.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-6 mb-10">
              {[
                { Icon: Phone, label: "Phone / WhatsApp", value: SITE.phone, href: `tel:${SITE.phone}` },
                { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { Icon: MapPin, label: "Headquarters", value: SITE.address, href: undefined },
              ].map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F0F7F2] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#4A7C59]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94A3B8] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-[#1A1A1A] text-sm font-medium hover:text-[#4A7C59] transition-colors">{value}</a>
                    ) : (
                      <p className="text-[#1A1A1A] text-sm font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-[#F0F7F2] rounded-2xl p-6 border border-[#4A7C59]/10">
              <p className="font-semibold text-[#1A1A1A] mb-3">Business Hours</p>
              <p className="text-sm text-[#6B7280]">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-sm text-[#6B7280]">Sunday: 10:00 AM – 2:00 PM</p>
              <p className="text-sm text-[#4A7C59] font-medium mt-2">WhatsApp available 24/7</p>
            </div>
          </div>

          <div className="bg-[#F8FAF9] rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#4A7C59]/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-[#4A7C59]" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-2">We&apos;ve Got Your Message!</h3>
                <p className="text-[#6B7280] text-sm">Our team will call you within 24 hours to schedule your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{errors.form}</p>}
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { id: "phone", label: "Phone Number", type: "tel", placeholder: "10-digit mobile number" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">{label}</label>
                    <input
                      type={type}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      placeholder={placeholder}
                      className={`w-full border rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4A7C59] ${errors[id] ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Which Venture Are You Interested In?</label>
                  <select
                    value={form.venture}
                    onChange={(e) => setForm({ ...form, venture: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4A7C59]"
                  >
                    <option value="">Select a venture</option>
                    <option>IPB Kochi — Banking Education</option>
                    <option>Versa Digital — Marketing</option>
                    <option>Versa Global — Study Abroad</option>
                    <option>Versa Finance — Investment</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">Message (optional)</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you are looking for..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#4A7C59] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4A7C59] text-white font-bold py-3.5 rounded-lg hover:bg-[#2D4E37] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Book Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
