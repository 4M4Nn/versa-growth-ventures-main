"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/data"

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#4A7C59]/40 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#1B2A4A] text-sm leading-snug">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#4A7C59] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
