export default function ProblemSection() {
  const problems = [
    { icon: "🎓", title: "Career Clarity Gap", desc: "Kerala graduates face a fragmented ecosystem — banking coaching here, digital skills there, study abroad separately. No one helps you see the full picture of your potential." },
    { icon: "📱", title: "Invisible Businesses", desc: "Kerala&apos;s best businesses stay local not by choice, but because they lack the digital infrastructure to scale. Great products, limited reach." },
    { icon: "💰", title: "Wealth Stays Idle", desc: "Kerala families save among the highest in India but invest among the lowest. Traditional savings accounts quietly erode wealth that could be compounding." },
  ]
  return (
    <section className="py-24 bg-[#050A05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4">THE PROBLEM</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F0EDE6] mb-4">Kerala&apos;s Growth is Blocked</h2>
          <p className="text-[#A8B89A] max-w-2xl mx-auto text-lg">Kerala has world-class talent, ambitious entrepreneurs, and financially savvy families. What it lacks is a unified ecosystem built to unlock that potential.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="glass-card rounded-2xl p-8 group hover:border-[#C9A84C]/20 transition-all border border-transparent">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-playfair text-xl text-[#F0EDE6] mb-3">{p.title}</h3>
              <p className="text-[#A8B89A] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc.replace(/&apos;/g, "'") }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
