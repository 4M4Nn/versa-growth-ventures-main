import { FOUNDERS } from "@/lib/data"

export default function FoundersSection() {
  return (
    <section className="py-24 bg-[#050A05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE BUILDERS</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F0EDE6] mb-4">Our Founders</h2>
          <p className="text-[#A8B89A] max-w-xl mx-auto">Three founders. Three disciplines. One shared mission — to build Kerala&apos;s most impactful business group.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="glass-card rounded-2xl p-8 flex flex-col gap-6 hover:border-[#C9A84C]/30 transition-all duration-500 border border-transparent">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white font-playfair flex-shrink-0" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}88)` }}>
                  {f.monogram}
                </div>
                <div>
                  <p className="font-playfair text-xl font-bold text-[#F0EDE6]">{f.name}</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color: f.color }}>{f.role}</p>
                </div>
              </div>
              <p className="text-[#A8B89A] text-sm leading-relaxed">{f.bio}</p>
              <blockquote className="border-l-2 pl-4 italic text-sm text-[#C9A84C]" style={{ borderColor: f.color }}>
                &ldquo;{f.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
