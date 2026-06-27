import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { VENTURES } from "@/lib/data"

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Our Portfolio</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Five Ventures, One Group</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">
            Each venture is a standalone business solving a real problem for people in Kerala and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VENTURES.map((venture) => (
            <div
              key={venture.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-transparent transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={venture.image}
                  alt={venture.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {venture.badge && (
                  <span className="absolute top-3 right-3 bg-[#C9A84C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {venture.badge}
                  </span>
                )}
                <div
                  className="absolute bottom-3 left-3 w-8 h-1 rounded-full"
                  style={{ backgroundColor: venture.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: venture.color }}>
                  {venture.tagline}
                </p>
                <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-2">{venture.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{venture.description}</p>

                {venture.href !== "#" ? (
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: venture.color }}
                  >
                    Visit {venture.name} <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-sm text-[#6B7280]">Launching Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 border border-[#4A7C59] text-[#4A7C59] font-semibold px-7 py-3 rounded-lg hover:bg-[#EBF5EE] transition-colors"
          >
            View All Ventures <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
