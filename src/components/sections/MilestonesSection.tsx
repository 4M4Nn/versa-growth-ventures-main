import { MILESTONES } from "@/lib/data"

export default function MilestonesSection() {
  return (
    <section className="py-20 px-4 bg-[#0F1F15]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-3">Our Journey</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white">Milestones That Define Us</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#4A7C59]/30" />

          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#4A7C59] border-4 border-[#0F1F15] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                </div>

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A84C]/30 transition-all">
                    <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider">{m.year}</span>
                    <h3 className="font-playfair text-lg font-bold text-white mt-1 mb-2">{m.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
