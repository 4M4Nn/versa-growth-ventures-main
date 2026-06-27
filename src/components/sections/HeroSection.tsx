import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { SITE } from "@/lib/data"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop"
          alt="Modern business team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F15]/95 via-[#0F1F15]/80 to-[#0F1F15]/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 bg-[#4A7C59]/20 border border-[#4A7C59]/30 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Kerala&apos;s Diversified Business Group · Est. 2024
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Five Ventures.<br />
            <span className="text-[#C9A84C]">One Vision.</span><br />
            <span className="text-white/80 text-4xl sm:text-5xl lg:text-6xl">Powering Kerala&apos;s Growth.</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            From banking education and study abroad to AI marketing, investment advisory and exports — Versa Growth Ventures is building Kerala&apos;s most ambitious business group.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/ventures"
              className="flex items-center gap-2 bg-[#4A7C59] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#2D4E37] transition-all hover:gap-3"
            >
              Explore Ventures <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
            >
              Free Consultation
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8">
            {[
              { value: "5", label: "Ventures" },
              { value: "13,200+", label: "Placements" },
              { value: "60+", label: "Countries" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-playfair text-2xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-white/50 text-xs tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
