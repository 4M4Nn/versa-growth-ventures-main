import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/data"

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">What Our Clients Say</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Real results from real people across all five Versa ventures.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#4A7C59]/20 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
              <p className="text-[#374151] text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-10 h-10 rounded-full bg-[#4A7C59] text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {t.image}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
                  <p className="text-[#6B7280] text-xs">{t.role} Â· {t.location}</p>
                  <span className="text-[10px] font-bold text-[#4A7C59] uppercase tracking-wider">{t.venture}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

