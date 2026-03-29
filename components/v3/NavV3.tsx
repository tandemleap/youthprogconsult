// V3 NAV
// New structure: logo left, "What You'll Get" text link + "Apply for a Fit Call" button right.
// Becomes navy green on scroll (transparent over hero, which is also navy green).
// Mobile: hamburger toggles a full-width drawer.

'use client'
import { useState, useEffect } from 'react'

export default function NavV3() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="font-serif text-lg font-semibold text-warm">
          Scott Griffiths
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#offer"
            className="text-warm/70 hover:text-warm text-sm font-medium transition-colors font-dm-sans"
          >
            What You'll Get
          </a>
          <a
            href="/apply"
            className="bg-coral hover:bg-coral-dark text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors font-dm-sans"
          >
            Apply for a Fit Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-warm p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-navy-dark border-t border-warm/10 px-6 py-5 flex flex-col gap-4">
          <a
            href="#offer"
            onClick={() => setOpen(false)}
            className="text-warm/80 text-base font-medium font-dm-sans"
          >
            What You'll Get
          </a>
          <a
            href="/apply"
            onClick={() => setOpen(false)}
            className="bg-coral hover:bg-coral-dark text-white px-5 py-3 rounded-xl text-sm font-medium text-center transition-colors font-dm-sans"
          >
            Apply for a Fit Call
          </a>
        </div>
      )}
    </nav>
  )
}
