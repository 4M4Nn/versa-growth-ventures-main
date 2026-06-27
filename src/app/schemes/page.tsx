import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock } from "lucide-react"
import { SCHEMES, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Schemes & Bundles — Special Offers",
  description: "Explore Versa Growth Ventures exclusive schemes: free consultation, student bundles, business growth packages, referral rewards, early-bird offers, and loyalty benefits.",
}

export default function SchemesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-[#0F1F15] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Special Offers</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Schemes &amp; Bundles</h1>
          <p className="text-white/70 max-w-xl mx-auto">Exclusive offers designed to give you more value at every stage of your Versa journey. Limited-time and ongoing opportunities.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F8FAF9]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SCHEMES.map((scheme) => (
            <div key={scheme.id} className={`rounded-2xl overflow-hidden border shadow-sm transition-all hover:shadow-xl ${scheme.highlight ? "border-[#4A7C59] shadow-[#4A7C59]/10" : "border-gray-100 bg-white"}`}>
              <div className={`p-8 ${scheme.highlight ? "bg-[#4A7C59] text-white" : "bg-white"}`}>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${scheme.highlight ? "bg-white/20 text-white" : "bg-[#F0F7F2] text-[#4A7C59]"}`}>
                    {scheme.badge}
                  </span>
                  {scheme.price && (
                    <span className={`font-playfair text-2xl font-bold ${scheme.highlight ? "text-[#C9A84C]" : "text-[#1A1A1A]"}`}>{scheme.price}</span>
                  )}
                </div>
                <h2 className={`font-playfair text-xl font-bold mb-3 ${scheme.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{scheme.name}</h2>
                <p className={`text-sm leading-relaxed ${scheme.highlight ? "text-white/80" : "text-[#6B7280]"}`}>{scheme.description}</p>
              </div>

              <div className={`px-8 py-6 border-t ${scheme.highlight ? "bg-[#4A7C59] border-white/10" : "bg-white border-gray-100"}`}>
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${scheme.highlight ? "text-[#C9A84C]" : "text-[#374151]"}`}>What&apos;s Included</p>
                <ul className="space-y-2.5 mb-6">
                  {scheme.includes.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${scheme.highlight ? "text-white/80" : "text-[#374151]"}`}>
                      <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${scheme.highlight ? "text-[#C9A84C]" : "text-[#4A7C59]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                {scheme.terms && (
                  <p className={`text-[11px] mb-5 ${scheme.highlight ? "text-white/50" : "text-[#94A3B8]"}`}>
                    <Clock size={10} className="inline mr-1" />{scheme.terms}
                  </p>
                )}

                <Link href="/contact" className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-all ${scheme.highlight ? "bg-[#C9A84C] text-white hover:bg-[#B8934A]" : "bg-[#4A7C59] text-white hover:bg-[#2D4E37]"}`}>
                  {scheme.cta} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#4A7C59]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Not Sure Which Scheme Fits?</h2>
          <p className="text-white/80 mb-8">Call us and we will recommend the best option for your specific situation at no charge.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#4A7C59] font-bold px-7 py-3.5 rounded-xl hover:bg-[#F0F7F2] transition-all flex items-center gap-2">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-all">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
