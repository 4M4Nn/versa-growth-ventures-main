import Link from "next/link"
import { FOUNDERS } from "@/lib/data"

export default function FoundersSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">The Three Founders</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Three domain experts united by a shared belief in Kerala&apos;s potential.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="group bg-[#F8FAF9] rounded-2xl p-8 border border-gray-100 hover:border-[#4A7C59]/30 hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg"
                style={{ backgroundColor: f.color }}>
                {f.monogram}
              </div>
              <div className="text-center mb-6">
                <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-1">{f.name}</h3>
                <p className="text-[#4A7C59] text-xs font-semibold tracking-wide uppercase">{f.role}</p>
              </div>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-6 text-center">{f.bio}</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="text-xs font-semibold text-[#374151] uppercase tracking-wider mb-3 text-center">Expertise</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {f.expertise.map((e) => (
                    <span key={e} className="bg-[#F0F7F2] text-[#4A7C59] text-[10px] font-medium px-2.5 py-1 rounded-full">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-[#4A7C59] hover:text-[#C9A84C] transition-colors">
            Read Full Founder Stories â†’
          </Link>
        </div>
      </div>
    </section>
  )
}

