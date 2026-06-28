const STEPS = [
  {
    number: "01",
    title: "Discovery Consultation",
    description: "A 30-minute free consultation to understand your specific needs — whether you are a student, professional, business owner, or investor. We identify which Versa venture or combination of ventures serves you best.",
  },
  {
    number: "02",
    title: "Personalised Recommendation",
    description: "Our experts prepare a written recommendation tailored to your profile, goals, timeline, and budget. You receive a clear roadmap before committing to anything.",
  },
  {
    number: "03",
    title: "Seamless Execution",
    description: "Once you are ready to proceed, our teams execute with precision. Dedicated relationship managers ensure you always know what is happening and what comes next.",
  },
  {
    number: "04",
    title: "Ongoing Partnership",
    description: "We are not transactional. Versa clients receive ongoing support, quarterly check-ins, and preferential access to new programs and opportunities as they emerge.",
  },
]

export default function ApproachSection() {
  return (
    <section className="py-14 md:py-20 px-5 bg-[#F0F7F2]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-3">Our Approach</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1A1A]">How Versa Works With You</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 border border-[#4A7C59]/10 hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
              <p className="font-playfair text-5xl font-bold text-[#4A7C59]/20 mb-4">{step.number}</p>
              <h3 className="font-playfair text-xl font-bold text-[#1A1A1A] mb-3">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
