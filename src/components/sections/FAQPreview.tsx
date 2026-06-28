"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"
import { FAQS } from "@/lib/data"

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0)
  const preview = FAQS.slice(0, 6)

  return (
    <section className="py-14 md:py-20 px-5 bg-[#F0F7F2]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Common Questions</h2>
        </div>

        <div className="space-y-3 mb-10">
          {preview.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#1A1A1A] text-sm">{faq.question}</span>
                <ChevronDown size={18} className={`text-[#4A7C59] shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/faq" className="inline-flex items-center gap-2 border-2 border-[#4A7C59] text-[#4A7C59] font-bold px-7 py-3 rounded-xl hover:bg-[#4A7C59] hover:text-white transition-all">
            View All 15 FAQs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

