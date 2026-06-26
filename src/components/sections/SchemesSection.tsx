import { SCHEMES, WA_URL } from "@/lib/data"

export default function SchemesSection() {
  return (
    <section className="py-24 bg-[#050A05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">SPECIAL OFFERS</p>
          <h2 className="font-playfair text-4xl text-[#F0EDE6]">Schemes & Packages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SCHEMES.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-8 flex flex-col gap-4 border border-transparent hover:border-[#C9A84C]/20 transition-all">
              <span className="text-xs tracking-widest px-3 py-1 rounded-full self-start" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{s.tag}</span>
              <h3 className="font-playfair text-2xl text-[#F0EDE6]">{s.title}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`${WA_URL}?text=${encodeURIComponent(s.cta + " — " + s.title)}`} target="_blank" rel="noopener noreferrer"
                className="text-center py-3 border border-[#C9A84C] text-[#C9A84C] text-sm tracking-widest hover:bg-[#C9A84C] hover:text-[#080E08] transition-all">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
