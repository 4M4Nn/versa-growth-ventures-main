import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"
import { SITE, NAV_LINKS, VENTURES } from "@/lib/data"

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    {[
      { label: "Facebook", href: "https://facebook.com", initial: "f" },
      { label: "Instagram", href: "https://instagram.com", initial: "in" },
      { label: "LinkedIn", href: "https://linkedin.com", initial: "li" },
    ].map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="w-8 h-8 rounded-full border border-green-400/40 flex items-center justify-center text-xs font-bold text-green-200 hover:border-yellow-300 hover:text-yellow-300 transition-colors uppercase"
      >
        {s.initial}
      </a>
    ))}
  </div>
)

export default function Footer() {
  return (
    <footer className="bg-[#4A7C59] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo + desc */}
        <div>
          <div className="mb-4">
            <p className="text-xl font-bold font-playfair leading-tight">Versa Growth</p>
            <p className="text-xs tracking-widest uppercase text-green-200">Ventures</p>
          </div>
          <p className="text-sm text-green-100 leading-relaxed mb-5">
            Kerala&apos;s diversified business group empowering individuals and enterprises across education, finance, digital marketing, and global trade.
          </p>
          <SocialLinks />
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-yellow-300">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-green-100 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Ventures */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-yellow-300">Our Ventures</h4>
          <ul className="space-y-2">
            {VENTURES.map((v) => (
              <li key={v.id}>
                <a
                  href={v.href}
                  className="text-sm text-green-100 hover:text-white transition-colors"
                  target={v.href.startsWith("http") ? "_blank" : undefined}
                  rel={v.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {v.name}
                  {v.badge && <span className="ml-1.5 text-xs text-yellow-300">({v.badge})</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-yellow-300">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-green-100">
              <MapPin size={16} className="mt-0.5 shrink-0 text-yellow-300" />
              {SITE.address}
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-green-100 hover:text-white transition-colors">
                <Mail size={16} className="shrink-0 text-yellow-300" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-green-100 hover:text-white transition-colors">
                <Phone size={16} className="shrink-0 text-yellow-300" />
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-green-600">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-200">
          <p>&copy; {new Date().getFullYear()} Versa Growth Ventures. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
