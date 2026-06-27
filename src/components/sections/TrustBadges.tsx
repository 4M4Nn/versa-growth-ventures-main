import { Building2, Users, Globe } from "lucide-react"

const BADGES = [
  { icon: Building2, label: "Diversified Portfolio", desc: "5 complementary ventures across education, finance, marketing and trade" },
  { icon: Users, label: "Expert Leadership", desc: "Three domain-specialist founders with deep industry expertise" },
  { icon: Globe, label: "Kerala Based, Globally Connected", desc: "Kochi headquarters with reach across 60+ countries" },
]

export default function TrustBadges() {
  return (
    <section className="bg-[#4A7C59] py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {BADGES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-4 py-4 sm:py-3 sm:px-8 first:pl-0 last:pr-0">
              <Icon size={20} className="text-[#C9A84C] shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-white/70 text-xs hidden md:block">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
