import Image from "next/image"
import { Target, Eye } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-20 px-4 bg-[#0F1F15] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Purpose</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">Mission &amp; Vision</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format&fit=crop"
              alt="Mission"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F15] via-[#0F1F15]/60 to-transparent" />
            <div className="relative p-8 h-72 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A7C59] flex items-center justify-center">
                  <Target size={18} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#C9A84C]">Our Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                To build Kerala&apos;s most trusted and impactful business group — one that empowers students, families, and businesses with the education, capital, reach, and tools they need to achieve extraordinary outcomes.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
              alt="Vision"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F15] via-[#0F1F15]/60 to-transparent" />
            <div className="relative p-8 h-72 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C] flex items-center justify-center">
                  <Eye size={18} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#C9A84C]">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                By 2030, to be recognised as the defining business group of Kerala&apos;s growth era — known for ethical practices, measurable client outcomes, and ventures that collectively touch 100,000 lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
