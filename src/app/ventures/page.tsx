import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock } from "lucide-react"
import { VENTURES } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Ventures — Five Pillars of Growth",
  description: "Explore all five Versa Growth Ventures: IPB Kochi banking education, Versa Digital marketing, Versa Global study abroad, Versa Finance investment, Versa Exports.",
}

export default function VenturesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-[#0F1F15] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-5">Our Portfolio</p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-5">Five Ventures.<br /><span className="text-[#C9A84C]">One Ecosystem.</span></h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Each Versa venture was built to solve a specific gap in Kerala&apos;s growth story. Together they form a comprehensive ecosystem.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {VENTURES.map((v, i) => (
            <div key={v.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
              <div className={`relative h-[380px] rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <Image src={v.image} alt={v.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full">{v.metricLabel}</span>
                  <p className="font-playfair text-3xl font-bold text-white mt-1">{v.metric}</p>
                </div>
                {v.status === "coming-soon" && (
                  <div className="absolute top-4 right-4 bg-[#C9A84C] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Clock size={11} /> Coming Soon
                  </div>
                )}
              </div>

              <div className={i % 2 === 1 ? "md:col-start-1" : ""}>
                <div className="w-1.5 h-8 rounded-full mb-4" style={{ backgroundColor: v.color }} />
                <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-2">{v.name}</h2>
                <p className="text-[#C9A84C] text-sm font-semibold mb-4">{v.tagline}</p>
                <p className="text-[#6B7280] leading-relaxed mb-6">{v.description}</p>
                <ul className="space-y-2 mb-8">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#4A7C59] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {v.status === "live" ? (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl text-white transition-all hover:opacity-90" style={{ backgroundColor: v.color }}>
                    Visit {v.name} <ArrowRight size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-400 font-bold px-7 py-3 rounded-xl cursor-not-allowed">
                    <Clock size={16} /> Launching Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#4A7C59]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Not Sure Which Venture Is Right for You?</h2>
          <p className="text-white/80 mb-8">Our advisors help you identify the right path and the right ventures for your specific situation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#4A7C59] font-bold px-8 py-4 rounded-xl hover:bg-[#F0F7F2] transition-all">
            Get Free Guidance <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
