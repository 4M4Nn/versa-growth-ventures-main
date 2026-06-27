import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description: "Reach out to Versa Growth Ventures for a free, no-obligation consultation. Talk to our experts across IPB Kochi, Versa Digital, Versa Global, and Versa Finance.",
}

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-[#0F1F15] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Start Your Journey Today</h1>
          <p className="text-white/70">Free consultation. No pressure. Genuine expert guidance.</p>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
