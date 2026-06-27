import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { VENTURES, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Ventures",
  description: "Explore all five ventures under Versa Growth Ventures — banking education, digital marketing, study abroad, investment advisory, and global trade.",
}

export default function VenturesPage() {
  const waUrl = `https://wa.me/91${SITE.phone.replace(/\D/g, "").slice(-10)}`

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F8F9FA] py-20 px-4 text-center">
        <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-4">Our Portfolio</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4">
          Five Ventures. One Vision.
        </h1>
        <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
          Each venture under Versa Growth is an independent business solving a distinct challenge for people in Kerala and beyond.
        </p>
      </section>

      {/* Ventures list */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {VENTURES.map((venture, i) => (
            <div
              key={venture.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`relative h-72 rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={venture.image}
                  alt={venture.name}
                  fill
                  className="object-cover"
                />
                {venture.badge && (
                  <span className="absolute top-4 left-4 bg-[#C9A84C] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {venture.badge}
                  </span>
                )}
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div
                  className="inline-block w-10 h-1 rounded-full mb-4"
                  style={{ backgroundColor: venture.color }}
                />
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: venture.color }}>
                  {venture.tagline}
                </p>
                <h2 className="font-playfair text-3xl font-bold text-[#1B2A4A] mb-4">{venture.name}</h2>
                <p className="text-[#6B7280] leading-relaxed mb-6">{venture.description}</p>

                {venture.href !== "#" ? (
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors text-white"
                    style={{ backgroundColor: venture.color }}
                  >
                    Visit {venture.name} <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <span className="inline-block bg-[#FBF5E6] text-[#C9A84C] font-semibold px-6 py-3 rounded-lg text-sm">
                    Launching Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B2A4A] text-center">
        <h2 className="font-playfair text-3xl font-bold text-white mb-4">Not sure which venture is right for you?</h2>
        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Our team will guide you to the perfect solution based on your goals.</p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#1B2A4A] font-bold px-8 py-4 rounded-lg hover:bg-[#E8C96A] transition-colors"
        >
          Talk to an Expert
        </a>
      </section>
    </div>
  )
}
