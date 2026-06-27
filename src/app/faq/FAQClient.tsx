"use client"

import { useState } from "react"
import { ChevronDown, Phone } from "lucide-react"
import { FAQS, SITE } from "@/lib/data"

const CATEGORIES = Array.from(new Set(FAQS.map((f) => f.category)))

export default function FAQClient() {
  const [open, setOpen] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered = activeCategory === "All" ? FAQS : FAQS.filter((f) => f.category === activeCategory)

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-[#0F1F15] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-white/70">15 questions covering all Versa ventures. If you can&apos;t find your answer, call us directly.</p>
        </div>
      </section>

      <section className="py-6 px-4 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpen(null) }}
              className={`shrink-0 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all ${activeCategory === cat ? "bg-[#4A7C59] text-white border-[#4A7C59]" : "border-gray-200 text-[#374151] hover:border-[#4A7C59] hover:text-[#4A7C59]"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8FAF9]">
        <div className="max-w-4xl mx-auto space-y-3">
          {filtered.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#4A7C59] uppercase tracking-wider block mb-1">{faq.category}</span>
                  <span className="font-semibold text-[#1A1A1A]">{faq.question}</span>
                </div>
                <ChevronDown size={18} className={`text-[#4A7C59] shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-[#6B7280] leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F7F2] flex items-center justify-center mx-auto mb-5">
            <Phone size={24} className="text-[#4A7C59]" />
          </div>
          <h2 className="font-playfair text-2xl font-bold text-[#1A1A1A] mb-3">Still Have Questions?</h2>
          <p className="text-[#6B7280] mb-6">Our team is available Monday to Saturday, 9 AM to 7 PM. WhatsApp us anytime.</p>
          <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 bg-[#4A7C59] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#2D4E37] transition-all">
            <Phone size={16} /> Call {SITE.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
