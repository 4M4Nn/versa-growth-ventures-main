import { TRUST_BADGES } from "@/lib/data"
import { Shield, Award, Globe } from "lucide-react"

const ICON_MAP: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} className="text-[#4A7C59]" />,
  Award: <Award size={28} className="text-[#4A7C59]" />,
  Globe: <Globe size={28} className="text-[#4A7C59]" />,
}

export default function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Why Choose Versa</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Trusted Across Kerala</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto text-base">
            Every venture under Versa Growth is built on a foundation of verified credentials, measurable results, and genuine impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 hover:border-[#4A7C59]/30 hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-[#EBF5EE] rounded-2xl flex items-center justify-center mb-5">
                {ICON_MAP[badge.icon]}
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">{badge.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
