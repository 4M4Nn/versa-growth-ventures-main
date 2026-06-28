import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const CHECKPOINTS = [
  "Founded by three Kerala professionals with domain expertise across banking, finance, and marketing",
  "Deliberately diversified - each venture solves a different Kerala growth problem",
  "Shared infrastructure, values, and client network create a competitive moat no single-venture firm can match",
  "Long-term thinking: Versa Exports launches next, with more ventures in planning",
]

export default function AboutPreview() {
  return (
    <section className="py-14 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
              alt="Versa team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#4A7C59] text-white rounded-2xl p-6 shadow-lg max-w-[220px]">
            <p className="font-playfair text-3xl font-bold text-[#C9A84C]">2025</p>
            <p className="text-sm text-white/80 mt-1">Founded in Kochi with a mission to power Kerala&apos;s next generation of growth</p>
          </div>
        </div>

        <div>
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
            Building Kerala&apos;s Most Ambitious Business Group
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-5">
            Versa Growth Ventures was founded with a thesis: Kerala has extraordinary human talent and entrepreneurial energy, but lacks a diversified business group that can serve multiple dimensions of individual and business growth under one trusted umbrella.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-8">
            Our five ventures &mdash; spanning banking education, study abroad, AI marketing, investment advisory, and exports &mdash; are not random. Each one addresses a specific unmet need in Kerala&apos;s economic landscape, and together they create a network effect where clients of one venture naturally benefit from another.
          </p>

          <ul className="space-y-3 mb-10">
            {CHECKPOINTS.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle2 size={16} className="text-[#4A7C59] shrink-0 mt-0.5" />
                {pt}
              </li>
            ))}
          </ul>

          <Link href="/about" className="inline-flex items-center gap-2 bg-[#4A7C59] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#2D4E37] transition-all hover:gap-3">
            Our Full Story <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
