import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { SITE, NAV_LINKS, VENTURES } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-[#0F1F15] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl bg-[#4A7C59] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div>
              <p className="font-playfair font-bold text-white leading-tight">{SITE.name}</p>
              <p className="text-[10px] text-[#C9A84C] tracking-widest uppercase">{SITE.tagline}</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            Kerala&apos;s most ambitious diversified business group &mdash; five ventures, one mission.
          </p>
          <div className="flex gap-2">
            {[{ l: "f", h: "https://facebook.com" }, { l: "in", h: "https://instagram.com" }, { l: "li", h: "https://linkedin.com" }].map((s) => (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors uppercase">
                {s.l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#C9A84C] mb-4">Navigation</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#C9A84C] mb-4">Our Ventures</h4>
          <ul className="space-y-2">
            {VENTURES.map((v) => (
              <li key={v.id}>
                {v.status === "live" ? (
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">{v.name}</a>
                ) : (
                  <span className="text-sm text-white/30">{v.name} <span className="text-[10px] text-[#C9A84C]">Soon</span></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-[#C9A84C] mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C9A84C]" />{SITE.address}
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <Phone size={15} className="shrink-0 text-[#C9A84C]" />{SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors">
                <Mail size={15} className="shrink-0 text-[#C9A84C]" />{SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-white/80 transition-colors">FAQ</Link>
            <Link href="/schemes" className="hover:text-white/80 transition-colors">Schemes</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
