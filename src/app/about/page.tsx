import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import { FOUNDERS, STATS, MILESTONES, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us — Kerala's Diversified Business Group",
  description: "The story of Versa Growth Ventures — three founders, five ventures, one mission to power Kerala's growth.",
}

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="bg-[#0F1F15] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-5">Our Story</p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Building Kerala&apos;s Most<br />
            <span className="text-[#C9A84C]">Ambitious Business Group</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Versa Growth Ventures was born from a belief that Kerala &mdash; with its educated population, entrepreneurial energy, and global diaspora &mdash; deserves a business group as ambitious as its people.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A] mb-5">The Origin Story</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              In 2024, three professionals sat across from each other in Kochi with a shared frustration: Kerala had extraordinary talent but lacked the institutional infrastructure to help that talent thrive. Students struggled to find quality banking education. Families paid 3x for study abroad consultancy than needed. Small businesses had no access to AI-powered marketing. Families were parking savings in FDs while inflation eroded their wealth.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              The insight was simple but powerful: these problems were connected. A student who does an IPB banking course might also want to study abroad. A business owner who needs digital marketing also needs financial planning. A family with a student abroad needs NRI investment services. One platform, built right, could serve the whole ecosystem.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Versa Growth Ventures was founded on that thesis. Not as a holding company of random businesses, but as a deliberately designed ecosystem where each venture strengthens the others and where the client at the centre benefits from the whole.
            </p>
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80&auto=format&fit=crop"
              alt="Versa founding team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#F0F7F2]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="font-playfair text-4xl font-bold text-[#C9A84C]">{s.value.toLocaleString("en-IN")}{s.suffix}</p>
              <p className="text-[#6B7280] text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A]">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "#4A7C59",
                text: "To build Kerala's most trusted and impactful business group — empowering students, families, and businesses with the education, capital, reach, and tools they need to achieve extraordinary outcomes.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "#C9A84C",
                text: "By 2030, to be recognised as the defining business group of Kerala's growth era — known for ethical practices, measurable client outcomes, and ventures that collectively touch 100,000 lives.",
              },
              {
                icon: Heart,
                title: "Our Values",
                color: "#1B2A4A",
                text: "Transparency in every interaction. Expertise before advice. Long-term thinking over short-term gain. Client outcomes over revenue. Kerala-first, world-class always.",
              },
            ].map(({ icon: Icon, title, color, text }) => (
              <div key={title} className="text-center p-8 bg-[#F8FAF9] rounded-2xl border border-gray-100">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: color + "20" }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-[#0F1F15]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="font-playfair text-3xl font-bold text-white">The Founders</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C9A84C]/30 transition-all">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-5 shadow-lg" style={{ backgroundColor: f.color }}>
                  {f.monogram}
                </div>
                <div className="text-center mb-5">
                  <h3 className="font-playfair text-lg font-bold text-white mb-1">{f.name}</h3>
                  <p className="text-[#C9A84C] text-xs font-semibold tracking-wide uppercase">{f.role}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{f.bio}</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {f.expertise.map((e) => (
                    <span key={e} className="bg-white/10 text-white/70 text-[10px] px-2.5 py-1 rounded-full">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 px-4 bg-[#F0F7F2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold text-[#1A1A1A]">Our Journey</h2>
          </div>
          <div className="space-y-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="flex gap-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-24 shrink-0">
                  <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">{m.year}</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-[#1A1A1A] mb-1">{m.title}</h3>
                  <p className="text-[#6B7280] text-sm">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#4A7C59]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Join the Versa Story</h2>
          <p className="text-white/80 mb-8">Your growth is our mission. Book a free consultation to find out how Versa can help you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#4A7C59] font-bold px-8 py-3.5 rounded-xl hover:bg-[#F0F7F2] transition-colors flex items-center gap-2">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
