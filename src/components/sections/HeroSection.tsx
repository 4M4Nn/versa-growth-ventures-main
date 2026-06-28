import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SITE } from "@/lib/data"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop"
          alt="Modern business team"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F15]/95 via-[#0F1F15]/85 to-[#0F1F15]/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#4A7C59]/20 border border-[#4A7C59]/30 text-[#C9A84C] text-[11px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            Kerala&apos;s Diversified Business Group · Est. 2025
          </div>

          <h1 className="font-playfair text-[clamp(2rem,6vw,4.5rem)] font-bold text-white leading-tight mb-5">
            Five Ventures.<br />
            <span className="text-[#C9A84C]">One Vision.</span><br />
            <span className="text-white/80 text-[clamp(1.6rem,5vw,3.75rem)]">Powering Kerala&apos;s Growth.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            From banking education and study abroad to AI marketing, investment advisory and exports &mdash; Versa Growth Ventures is building Kerala&apos;s most ambitious business group.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/ventures" className="flex items-center justify-center gap-2 bg-[#4A7C59] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#2D4E37] transition-all min-h-[52px]">
              Explore Ventures <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/10 transition-all min-h-[52px]">
              Free Consultation
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 sm:gap-10">
            {[
              { value: "5", label: "Ventures" },
              { value: "13,200+", label: "Placements" },
              { value: "60+", label: "Countries" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-playfair text-xl sm:text-2xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-white/50 text-xs tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
