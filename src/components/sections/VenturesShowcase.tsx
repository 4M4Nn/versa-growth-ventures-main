import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { VENTURES } from "@/lib/data"

export default function VenturesShowcase() {
  return (
    <section id="ventures" className="py-14 md:py-20 px-5 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">Five Ventures. Complete Coverage.</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Each venture independently excellent, collectively unstoppable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VENTURES.map((v) => (
            <div key={v.id} className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${v.status === "coming-soon" ? "opacity-75" : ""}`}>
              <div className="relative h-52 overflow-hidden">
                <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  {v.status === "coming-soon" ? (
                    <span className="bg-[#C9A84C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Coming Soon</span>
                  ) : (
                    <span className="bg-[#4A7C59] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Live</span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-playfair text-3xl font-bold text-[#C9A84C]">{v.metric}</p>
                  <p className="text-white/70 text-xs">{v.metricLabel}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-1">{v.name}</h3>
                <p className="text-[#4A7C59] text-xs font-semibold mb-3">{v.tagline}</p>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{v.description.slice(0, 120)}â€¦</p>

                <ul className="space-y-1.5 mb-5">
                  {v.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#374151]">
                      <CheckCircle2 size={12} className="text-[#4A7C59] shrink-0" />{f}
                    </li>
                  ))}
                </ul>

                {v.status === "live" ? (
                  <a href={v.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4A7C59] hover:text-[#C9A84C] transition-colors">
                    Visit {v.name} <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <span className="text-sm text-[#6B7280]">Launching Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/ventures" className="inline-flex items-center gap-2 border-2 border-[#4A7C59] text-[#4A7C59] font-bold px-8 py-3.5 rounded-xl hover:bg-[#4A7C59] hover:text-white transition-all">
            View All Ventures
          </Link>
        </div>
      </div>
    </section>
  )
}

