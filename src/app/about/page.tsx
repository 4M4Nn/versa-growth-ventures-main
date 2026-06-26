import type { Metadata } from "next"
import { FOUNDERS, VENTURES, WA_URL } from "@/lib/data"

export const metadata: Metadata = {
  title: "About — Our Story & Founders",
  description: "Meet the three founders and five ventures behind Versa Growth Ventures — Kerala's most ambitious business group.",
}

export default function AboutPage() {
  return (
    <div className="pt-24 bg-[#080E08] min-h-screen">
      {/* Hero */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-6">OUR STORY</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-[#F0EDE6] font-bold mb-6">Built for Kerala.<br/>Scaled for the World.</h1>
        <p className="text-[#A8B89A] text-lg leading-relaxed">
          Versa Growth Ventures was born from a simple conviction: Kerala has extraordinary talent, entrepreneurial energy, and financial intelligence that is chronically under-leveraged. We set out to build the ecosystem that would change that — five ventures, each tackling a different dimension of Kerala&apos;s growth story.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[#050A05]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { label: "Mission", text: "To build Kerala's most impactful multi-venture business group — creating pathways for education, enterprise, and wealth creation." },
            { label: "Vision", text: "A Kerala where every graduate has a career, every business has global reach, and every family has a financial plan." },
            { label: "Values", text: "Excellence in execution. Integrity in every interaction. Growth that includes, not just accumulates." },
          ].map(i => (
            <div key={i.label} className="glass-card rounded-2xl p-8">
              <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">{i.label}</p>
              <p className="text-[#F0EDE6] text-lg leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE FOUNDERS</p>
            <h2 className="font-playfair text-4xl text-[#F0EDE6]">Three Builders. One Mission.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map(f => (
              <div key={f.name} className="glass-card rounded-2xl p-8 border border-transparent hover:border-[#C9A84C]/20 transition-all">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white font-playfair mb-6" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}>{f.monogram}</div>
                <h3 className="font-playfair text-2xl text-[#F0EDE6] mb-1">{f.name}</h3>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: f.color }}>{f.role}</p>
                <p className="text-[#A8B89A] text-sm leading-relaxed mb-4">{f.bio}</p>
                <blockquote className="border-l-2 pl-4 italic text-sm text-[#C9A84C]" style={{ borderColor: f.color }}>&ldquo;{f.quote}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures overview */}
      <section className="py-16 bg-[#050A05] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl text-[#F0EDE6]">The Five Ventures</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {VENTURES.map(v => (
              <div key={v.id} className="glass-card rounded-xl p-6 text-center border border-transparent hover:border-[#C9A84C]/20 transition-all">
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: v.accent }}>{v.label}</p>
                <p className="font-playfair text-lg text-[#F0EDE6] mb-1">{v.name}</p>
                <p className="text-[#4A7C59] text-xs mb-3">{v.metric} {v.metricLabel}</p>
                {!v.comingSoon && <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest" style={{ color: v.accent }}>VISIT →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-playfair text-4xl text-[#F0EDE6] mb-4">Grow With Versa</h2>
        <p className="text-[#A8B89A] max-w-xl mx-auto mb-8">Whether you&apos;re a student, business owner, or investor — there is a Versa venture built for you.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-[#C9A84C] text-[#080E08] font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">Book Free Consultation</a>
      </section>
    </div>
  )
}
