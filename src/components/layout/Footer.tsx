import Link from "next/link"
import { WA_URL, PHONE, EMAIL, ADDRESS } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#050A05] border-t border-[#C9A84C]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-playfair text-2xl text-[#C9A84C] tracking-widest mb-4">VERSA</p>
            <p className="text-[#A8B89A] text-sm leading-relaxed">Five Ventures. One Vision. Infinite Growth.</p>
            <p className="text-[#A8B89A] text-sm mt-3">{ADDRESS}</p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Ventures</p>
            {[["IPB Kochi","https://versa-ipb-kochi-future-optima-s-projects.vercel.app"],["Versa Digital","https://versa-digital-marketing-future-optima-s-projects.vercel.app"],["Versa Global","https://versa-global-education-future-optima-s-projects.vercel.app"],["Versa Finance","#"],["Versa Exports","#"]].map(([n,h]) => (
              <a key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</a>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Company</p>
            {[["About","/about"],["Ventures","/ventures"],["Blog","/blog"],["Contact","/contact"]].map(([n,h]) => (
              <Link key={n} href={h} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C] transition-colors">{n}</Link>
            ))}
          </div>
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-4">Contact</p>
            <a href={`tel:${PHONE}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="block text-[#A8B89A] text-sm mb-2 hover:text-[#C9A84C]">{EMAIL}</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="block text-[#A8B89A] text-sm hover:text-[#C9A84C]">WhatsApp Us</a>
          </div>
        </div>
        <div className="border-t border-[#C9A84C]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A8B89A] text-xs">© {new Date().getFullYear()} Versa Growth Ventures. All rights reserved.</p>
          <p className="text-[#A8B89A] text-xs">Built by Versa Digital</p>
        </div>
      </div>
    </footer>
  )
}
