"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
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
                <Link key={link.href} href={link.href} className="px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#4A7C59] hover:bg-[#F0F7F2] rounded-lg transition-all">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${SITE.phone}`} className="text-sm text-[#6B7280] hover:text-[#4A7C59] transition-colors">{SITE.phone}</a>
              <Link href="/contact" className="bg-[#4A7C59] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2D4E37] transition-colors">
                Get Started
              </Link>
            </div>

            <button className="lg:hidden p-2.5 rounded-lg text-[#374151] hover:bg-gray-100 transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white lg:hidden flex flex-col transition-all duration-300 ${open ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4A7C59] flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <p className="font-playfair font-bold text-[#1A1A1A] text-base">{SITE.name}</p>
          </Link>
          <button className="p-2.5 rounded-lg text-[#374151] hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-4 text-lg font-semibold text-[#1A1A1A] hover:text-[#4A7C59] hover:bg-[#F0F7F2] rounded-xl transition-all min-h-[56px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-gray-100 space-y-3 shrink-0">
          <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center justify-center w-full bg-[#4A7C59] text-white font-bold py-4 rounded-xl text-base hover:bg-[#2D4E37] transition-colors min-h-[56px]">
            Book Free Consultation
          </Link>
          <a href={`tel:${SITE.phone}`} className="flex items-center justify-center gap-2 w-full border-2 border-[#4A7C59] text-[#4A7C59] font-bold py-4 rounded-xl text-base hover:bg-[#F0F7F2] transition-colors min-h-[56px]">
            <Phone size={18} /> {SITE.phone}
          </a>
        </div>
      </div>
    </>
  )
}
