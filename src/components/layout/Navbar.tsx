"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Mission", href: "#mission" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-[#0C1A0E]/80 border-b border-[#4A7C59]/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A7C59] to-[#8FBC5A] flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-playfair text-white text-lg font-semibold">
            Versa <span className="text-[#8FBC5A]">Growth</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#A8B89A] hover:text-[#8FBC5A] transition-colors duration-300 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-[#4A7C59] hover:bg-[#8FBC5A] text-white rounded-full text-sm transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-white p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-[#0C1A0E] border-[#4A7C59]/20 w-[280px]">
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#A8B89A] hover:text-[#8FBC5A] transition-colors text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-5 py-3 bg-[#4A7C59] text-white rounded-full text-center"
              >
                Book Consultation
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
