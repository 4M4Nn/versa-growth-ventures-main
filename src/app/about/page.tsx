import type { Metadata } from "next"
import Image from "next/image"
import { FOUNDERS, VENTURES, ABOUT, MISSION_VISION, SITE } from "@/lib/data"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About — Our Story & Founders",
  description: "Meet the three founders and five ventures behind Versa Growth Ventures, Kerala's most ambitious diversified business group.",
}

export default function AboutPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F8F9FA] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-4">{ABOUT.eyebrow}</p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1B2A4A] leading-tight mb-6">
              {ABOUT.heading}
            </h1>
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i} className="text-[#6B7280] leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <ul className="space-y-3 mt-6">
              {ABOUT.checkpoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[#1B2A4A]">
                  <CheckCircle2 size={18} className="text-[#4A7C59] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ABOUT.image}
              alt="Versa Growth Ventures team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#EBF5EE] rounded-2xl p-8">
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">
              {MISSION_VISION.mission.heading}
            </p>
            <p className="text-[#1B2A4A] leading-relaxed">{MISSION_VISION.mission.text}</p>
          </div>
          <div className="bg-[#FBF5E6] rounded-2xl p-8">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">
              {MISSION_VISION.vision.heading}
            </p>
            <p className="text-[#1B2A4A] leading-relaxed">{MISSION_VISION.vision.text}</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">The Founders</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Three Builders. One Mission.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white font-playfair mx-auto mb-5 shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${founder.color}, ${founder.color}88)` }}
                >
                  {founder.monogram}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-1">{founder.name}</h3>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: founder.color }}>
                  {founder.role}
                </p>
                <p className="text-[#6B7280] text-sm leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A]">The Five Ventures</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VENTURES.map((v) => (
              <div
                key={v.id}
                className="bg-[#F8F9FA] rounded-xl p-5 text-center border border-gray-100 hover:border-[#4A7C59]/30 hover:shadow-sm transition-all"
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: v.color }}
                />
                <p className="font-playfair text-base font-bold text-[#1B2A4A] mb-1">{v.name}</p>
                <p className="text-xs text-[#6B7280] mb-3">{v.tagline}</p>
                {v.href !== "#" ? (
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold"
                    style={{ color: v.color }}
                  >
                    Visit →
                  </a>
                ) : (
                  <span className="text-xs text-[#C9A84C]">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#4A7C59] text-center">
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">Grow With Versa</h2>
        <p className="text-green-100 max-w-xl mx-auto mb-8">
          Whether you&apos;re a student, business owner, or investor — there is a Versa venture built for you.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#1B2A4A] font-bold px-8 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors"
        >
          Book Free Consultation
        </a>
      </section>
    </div>
  )
}
