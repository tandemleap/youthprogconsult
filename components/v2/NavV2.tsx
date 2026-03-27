// V2 ALTERNATE NAV
// Changes from v1: CTA label unified to "Schedule a Free Consult" everywhere.
// Added /v2 anchor links. Same scroll-detection behavior.

'use client'
import { useState, useEffect } from 'react'

export default function NavV2() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-warm/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className={`font-serif text-lg font-semibold transition-colors duration-200 ${
            scrolled ? 'text-navy' : 'text-warm'
          }`}
        >
          Scott Griffiths
        </span>
        <a
          href="#contact"
          className="bg-coral hover:bg-coral-dark text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors"
        >
          Schedule a Free Consult
        </a>
      </div>
    </nav>
  )
}
