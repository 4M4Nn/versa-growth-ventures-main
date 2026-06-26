"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/lib/data"

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-24 bg-[#080E08]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">FAQ</p>
          <h2 className="font-playfair text-4xl text-[#F0EDE6]">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden border border-transparent hover:border-[#C9A84C]/20 transition-all">
              <button className="w-full flex items-center justify-between p-5 text-left" onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-[#F0EDE6] font-medium pr-4">{faq.q}</span>
                <ChevronDown size={18} className={`text-[#C9A84C] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-[#A8B89A] text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
