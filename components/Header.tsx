'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || menuOpen ? 'bg-black shadow-lg' : 'bg-black'
    }`}>
      {/* Top bar with phone */}
      <div className="border-b border-white/10 px-6 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-white/50 text-xs font-body">Professional door installation service across the UK</p>
          <a href="tel:+447919965366" className="text-[#f8cf40] text-sm font-semibold font-body hover:text-[#e8b830] transition-colors flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +44 7919 965366
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-logo font-bold text-lg md:text-xl text-[#f8cf40] uppercase tracking-widest">
          Otago Doors
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquire"
            className="ml-2 inline-flex items-center gap-2 bg-[#f8cf40] hover:bg-[#e8b830] text-black text-sm font-semibold px-6 py-2.5 tracking-wider uppercase transition-colors duration-200"
          >
            Enquire Now
          </a>
        </nav>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-4 bg-black">
          <nav className="flex flex-col gap-1">
            <a href="tel:+447919965366" className="text-[#f8cf40] text-sm font-semibold py-3 border-b border-white/5 flex items-center gap-2 font-body">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +44 7919 965366
            </a>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium py-3 border-b border-white/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              className="mt-4 text-center bg-[#f8cf40] hover:bg-[#e8b830] text-black text-sm font-semibold py-3 tracking-wider uppercase transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
