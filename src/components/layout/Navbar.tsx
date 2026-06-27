"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { NAV_LINKS, SITE } from "@/lib/data"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-white ${scrolled ? "shadow-md" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#4A7C59] text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span>{SITE.address}</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="hover:text-yellow-300 transition-colors">{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="hover:text-yellow-300 transition-colors">{SITE.phone}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-bold text-[#4A7C59] font-playfair leading-tight">Versa Growth</span>
          <span className="text-xs text-[#6B7280] tracking-widest uppercase">Ventures</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#1A1A1A] hover:text-[#4A7C59] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-1.5 text-sm text-[#4A7C59] font-medium hover:underline"
          >
            <Phone size={15} />
            {SITE.phone}
          </a>
          <Link
            href="/#contact"
            className="bg-[#4A7C59] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#3A6249] transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1A1A1A] p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1 mt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-[#1A1A1A] hover:text-[#4A7C59] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className="mt-3 block w-full text-center bg-[#4A7C59] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-[#3A6249] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
