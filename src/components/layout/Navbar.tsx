"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Ventures", href: "#ventures" },
  { label: "About", href: "#mission" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${scrolled ? "bg-[#080E08]/80 backdrop-blur-md" : ""}`} style={{ height: 64 }}>
        <a href="#" className="font-playfair font-bold text-lg text-white tracking-widest flex items-center gap-1">
          VERSA<span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors font-inter relative group">
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2 text-[#C9A84C] border border-[#C9A84C]/50 hover:bg-[#C9A84C] hover:text-[#080E08] transition-all duration-300 text-sm font-inter rounded-sm">Book Consultation</a>
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
          <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-white" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-px bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-px bg-white" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#080E08] flex flex-col justify-center px-8">
            {[...links, { label: "Book Consultation", href: "#contact" }].map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl font-playfair font-light text-white hover:text-[#C9A84C] transition-colors py-3">{l.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
