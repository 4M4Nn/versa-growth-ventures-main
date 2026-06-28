import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { SITE } from "@/lib/data"

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 px-5 bg-[#4A7C59] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-5">Start Today</p>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
          Ready to Grow<br />With Versa?
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Whether you are a student choosing a career path, a business owner wanting growth, or a family building wealth &mdash; your Versa journey starts with a free consultation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#4A7C59] font-bold px-8 py-4 rounded-xl hover:bg-[#F0F7F2] transition-all"
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
          >
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

