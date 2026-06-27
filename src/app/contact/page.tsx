import type { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Versa Growth Ventures. Book a free consultation for banking education, digital marketing, study abroad, or investment advisory.",
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F8F9FA] py-16 px-4 text-center">
        <p className="text-[#4A7C59] text-xs font-semibold tracking-widest uppercase mb-4">Reach Out</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4">Contact Us</h1>
        <p className="text-[#6B7280] max-w-xl mx-auto">
          We respond to every inquiry within 24 hours. WhatsApp is the fastest way to reach us.
        </p>
      </section>
      <ContactSection />
    </div>
  )
}
