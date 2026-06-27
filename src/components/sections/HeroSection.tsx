import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PhoneCall } from "lucide-react"
import { HERO, SITE } from "@/lib/data"

export default function HeroSection() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <section className="relative bg-[#F8F9FA] overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#4A7C59]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A84C]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-[#EBF5EE] text-[#4A7C59] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Kerala&apos;s Diversified Business Group
          </span>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B2A4A] leading-tight mb-6">
            {HERO.headline}
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg">
            {HERO.subtext}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#ventures"
              className="flex items-center gap-2 bg-[#4A7C59] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#3A6249] transition-colors"
            >
              {HERO.cta_primary}
              <ArrowRight size={18} />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#4A7C59] text-[#4A7C59] font-semibold px-7 py-3.5 rounded-lg hover:bg-[#EBF5EE] transition-colors"
            >
              <PhoneCall size={18} />
              {HERO.cta_secondary}
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="font-playfair text-2xl font-bold text-[#4A7C59]">13,200+</p>
              <p className="text-xs text-[#6B7280] mt-0.5">Students Placed</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-playfair text-2xl font-bold text-[#4A7C59]">60+</p>
              <p className="text-xs text-[#6B7280] mt-0.5">Countries</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-playfair text-2xl font-bold text-[#4A7C59]">5</p>
              <p className="text-xs text-[#6B7280] mt-0.5">Active Ventures</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <p className="font-playfair text-2xl font-bold text-[#C9A84C]">SEBI</p>
              <p className="text-xs text-[#6B7280] mt-0.5">Registered</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          <Image
            src={HERO.image}
            alt="Versa Growth Ventures team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/90 backdrop-blur rounded-xl px-5 py-4 shadow-lg">
              <p className="font-playfair text-[#1B2A4A] font-bold text-sm">Five Ventures. One Vision.</p>
              <p className="text-[#6B7280] text-xs mt-1">Education · Digital · Finance · Global · Trade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
