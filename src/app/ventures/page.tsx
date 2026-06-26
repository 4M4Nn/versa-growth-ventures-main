import type { Metadata } from "next"
import { VENTURES, WA_URL } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Ventures — Five Businesses, One Vision",
  description: "Explore all five Versa Growth Ventures: IPB Kochi, Versa Digital, Versa Global, Versa Finance, and Versa Exports.",
}

export default function VenturesPage() {
  return (
    <div className="pt-24 bg-[#080E08] min-h-screen">
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">OUR PORTFOLIO</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F0EDE6] font-bold mb-4">Five Ventures</h1>
        <p className="text-[#A8B89A] text-lg">Each solving a distinct challenge. Together building Kerala&apos;s growth engine.</p>
      </section>
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {VENTURES.map((v, i) => (
            <div key={v.id} className="grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-[#2A3A2A] hover:border-[#C9A84C]/30 transition-all duration-500" style={{ background: v.bg }}>
              <div className="md:col-span-1 flex items-center justify-center p-8" style={{ background: `${v.accent}10` }}>
                <div className="text-center">
                  <p className="font-playfair text-6xl font-bold opacity-30" style={{ color: v.accent }}>{v.num}</p>
                  <p className="text-xs tracking-widest uppercase mt-2" style={{ color: v.accent }}>{v.label}</p>
                </div>
              </div>
              <div className="md:col-span-3 p-8">
                <h2 className="font-playfair text-3xl text-[#F0EDE6] font-bold mb-2">{v.name}</h2>
                <p className="text-[#A8B89A] mb-4">{v.sub}</p>
                <p className="text-[#A8B89A] text-sm leading-relaxed mb-6">{v.story}</p>
                <div className="grid grid-cols-3 gap-3">
                  {v.stats.map(s => (
                    <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: `${v.accent}15` }}>
                      <p className="font-bold text-lg" style={{ color: v.accent }}>{s.value}</p>
                      <p className="text-[#A8B89A] text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 flex items-center justify-center p-8">
                {v.comingSoon ? (
                  <span className="px-5 py-2 border text-sm tracking-widest" style={{ borderColor: v.accent, color: v.accent }}>COMING SOON</span>
                ) : (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 text-sm font-bold tracking-widest" style={{ background: v.accent, color: "#080E08" }}>
                    VISIT <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-[#050A05] px-6 text-center">
        <h2 className="font-playfair text-3xl text-[#F0EDE6] mb-4">Which Venture is Right for You?</h2>
        <p className="text-[#A8B89A] mb-8 max-w-xl mx-auto">Talk to us — we&apos;ll help you find the right Versa solution for your specific goal.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#C9A84C] text-[#080E08] font-bold text-sm tracking-widest uppercase">Book Free Consultation</a>
      </section>
    </div>
  )
}
