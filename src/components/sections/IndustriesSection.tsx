import { GraduationCap, TrendingUp, BarChart3, Globe, Cpu, Briefcase } from "lucide-react"
import { INDUSTRIES } from "@/lib/data"

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap, TrendingUp, BarChart3, Globe, Cpu, Briefcase,
}

export default function IndustriesSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Sectors</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon]
            return (
              <div key={ind.name} className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-[#4A7C59]/30 hover:bg-[#F0F7F2] transition-all cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7F2] group-hover:bg-[#4A7C59] flex items-center justify-center mx-auto mb-3 transition-colors">
                  {Icon && <Icon size={22} className="text-[#4A7C59] group-hover:text-white transition-colors" />}
                </div>
                <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{ind.name}</p>
                <p className="text-[#6B7280] text-[11px] hidden md:block">{ind.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

