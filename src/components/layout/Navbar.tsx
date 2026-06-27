"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4A7C59] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div>
              <p className="font-playfair font-bold text-[#1A1A1A] leading-tight text-base">{SITE.name}</p>
              <p className="text-[10px] text-[#6B7280] tracking-widest uppercase hidden sm:block">{SITE.tagline}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#4A7C59] hover:bg-[#F0F7F2] rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${SITE.phone}`} className="text-sm text-[#6B7280] hover:text-[#4A7C59] transition-colors">{SITE.phone}</a>
            <Link
              href="/contact"
              className="bg-[#4A7C59] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2D4E37] transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#374151] hover:text-[#4A7C59] hover:bg-[#F0F7F2] rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#4A7C59] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[#2D4E37] transition-colors"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
