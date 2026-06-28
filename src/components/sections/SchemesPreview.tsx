import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SCHEMES } from "@/lib/data"

export default function SchemesPreview() {
  const preview = SCHEMES.slice(0, 3)

  return (
    <section className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Offers</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Schemes &amp; Bundles</h2>
          </div>
          <Link href="/schemes" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#4A7C59] hover:text-[#C9A84C] transition-colors">
            View All 6 Schemes <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {preview.map((scheme) => (
            <div key={scheme.id} className={`rounded-2xl p-8 border transition-all ${scheme.highlight ? "bg-[#4A7C59] border-[#4A7C59] text-white shadow-xl" : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-[#4A7C59]/20"}`}>
              <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${scheme.highlight ? "bg-white/20 text-white" : "bg-[#F0F7F2] text-[#4A7C59]"}`}>
                {scheme.badge}
              </span>
              <h3 className={`font-playfair text-xl font-bold mb-2 ${scheme.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{scheme.name}</h3>
              <p className={`text-sm leading-relaxed mb-5 ${scheme.highlight ? "text-white/80" : "text-[#6B7280]"}`}>{scheme.description}</p>
              <ul className="space-y-2 mb-6">
                {scheme.includes.slice(0, 3).map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-xs ${scheme.highlight ? "text-white/80" : "text-[#374151]"}`}>
                    <CheckCircle2 size={13} className={`shrink-0 mt-0.5 ${scheme.highlight ? "text-[#C9A84C]" : "text-[#4A7C59]"}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/schemes"
                className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${scheme.highlight ? "text-[#C9A84C] hover:text-white" : "text-[#4A7C59] hover:text-[#C9A84C]"}`}
              >
                {scheme.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

