import { Building2, Users, Trophy, Zap, MapPin, Globe } from "lucide-react"
import { WHY_CHOOSE } from "@/lib/data"

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Users, Trophy, Zap, MapPin, Globe,
}

export default function WhyChooseSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Why Versa</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">The Versa Advantage</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">What makes a diversified group different from five separate companies.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div key={item.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-[#4A7C59]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7F2] group-hover:bg-[#4A7C59] flex items-center justify-center mb-5 transition-colors">
                  {Icon && <Icon size={22} className="text-[#4A7C59] group-hover:text-white transition-colors" />}
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

