import { FOUNDERS } from "@/lib/data"

export default function FoundersSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">The Team</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A]">Three Founders. One Mission.</h2>
          <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">
            Versa Growth Ventures was built by three passionate entrepreneurs who believe Kerala deserves world-class business services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="group bg-[#F8F9FA] rounded-2xl p-8 text-center border border-gray-100 hover:border-[#4A7C59]/30 hover:shadow-md transition-all"
            >
              {/* Monogram avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white font-playfair mx-auto mb-5 shadow-md"
                style={{ background: `linear-gradient(135deg, ${founder.color}, ${founder.color}bb)` }}
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
  )
}
