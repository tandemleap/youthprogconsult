// V2 ALTERNATE CONTACT SECTION
// Changes from v1:
//   - Duration inconsistency fixed: consistently "30 minutes" throughout (v1 said "30 min" here
//     but "60 min" in HowItWorks). V2 uses 30 minutes everywhere.
//   - Section title changed from "Let's talk" to "Schedule a free consult" for CTA consistency.
//   - Calendly link text changed to "Schedule a Free Consult" to match all other CTAs.
//   - Intro copy tightened and more direct about what happens in the call.
//   - Form label changed from "What's working? What hurts?" to a simpler, direct prompt.
//   - All CTA text on this page matches: "Schedule a Free Consult."

'use client'
import { useState, FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactV2() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', org: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full border border-warm-darker bg-warm rounded-xl px-4 py-3 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition'

  return (
    <section id="contact" className="bg-navy py-24 px-6 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-coral/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-sky/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            {/* V2: section title is a direct action statement rather than a friendly opener */}
            <h2 className="font-serif text-3xl md:text-4xl text-warm mb-4">
              Schedule a free consult
            </h2>
            <p className="text-warm/60 text-lg mb-10 leading-relaxed">
              The first conversation is free. Tell me what's going on and we'll find 30 minutes
              to talk it through. I'll give you an honest read on whether this is the kind of
              problem I can help with.
            </p>

            {/* Calendly CTA block */}
            <div className="bg-navy-light/50 border border-warm/15 rounded-2xl p-6">
              <p className="text-warm/40 text-xs uppercase tracking-widest font-medium mb-2">
                Book directly
              </p>
              {/* V2: Calendly link text matches CTA label used throughout the page */}
              <a
                href="https://calendly.com/scottgriffiths"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-warm hover:text-sky-light transition-colors"
              >
                Schedule a Free Consult →
              </a>
              <p className="text-warm/35 text-sm mt-1">Opens Calendly · 30 minutes</p>
            </div>
          </div>

          {/* Right column: form */}
          <div>
            {status === 'success' ? (
              <div className="border border-warm/15 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-sky/20 border border-sky/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M2 10l7 7L22 2" stroke="#88BFDC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-warm mb-2">Got it, thanks.</h3>
                <p className="text-warm/50">I'll be in touch within a day or two.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="v2-name" className="block text-sm font-medium text-warm/60 mb-1.5">
                    Your name
                  </label>
                  <input
                    id="v2-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={field}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="v2-org" className="block text-sm font-medium text-warm/60 mb-1.5">
                    Organization
                  </label>
                  <input
                    id="v2-org"
                    type="text"
                    required
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className={field}
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="v2-email" className="block text-sm font-medium text-warm/60 mb-1.5">
                    Email
                  </label>
                  <input
                    id="v2-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={field}
                    placeholder="you@yourorg.org"
                  />
                </div>
                <div>
                  {/* V2: simpler, direct form label */}
                  <label htmlFor="v2-message" className="block text-sm font-medium text-warm/60 mb-1.5">
                    What's going on?
                  </label>
                  <textarea
                    id="v2-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder="Tell me what's going on. No wrong answers here."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-coral-light text-sm">
                    Something went wrong. Try again or book directly via Calendly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-coral hover:bg-coral-dark disabled:opacity-50 text-white py-4 rounded-xl font-medium text-lg transition-all hover:-translate-y-0.5"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send it'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
