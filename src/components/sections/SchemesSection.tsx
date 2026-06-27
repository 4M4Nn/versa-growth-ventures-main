import { SCHEMES, SITE } from "@/lib/data"
import { GraduationCap, TrendingUp, Globe, Rocket } from "lucide-react"

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Globe: <Globe size={24} />,
  Rocket: <Rocket size={24} />,
}

export default function SchemesSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="py-20 bg-[#1B2A4A]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Special Offers</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">Current Schemes & Packages</h2>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto text-sm">
            Exclusive opportunities across our ventures — available for a limited time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SCHEMES.map((scheme) => (
            <div
              key={scheme.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C9A84C]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center text-[#C9A84C] mb-4">
                {ICON_MAP[scheme.icon]}
              </div>
              <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-1">{scheme.venture}</p>
              <h3 className="font-playfair text-lg font-bold text-white mb-2">{scheme.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed mb-3">{scheme.description}</p>
              <p className="text-xs text-blue-300 mb-4">
                <span className="font-semibold text-blue-200">Eligibility:</span> {scheme.eligibility}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2 rounded-lg hover:bg-[#C9A84C] hover:text-[#1B2A4A] transition-colors"
              >
                {scheme.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
