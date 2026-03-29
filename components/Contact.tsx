'use client'
import { useState, FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
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
    'w-full border border-cream-dark bg-white rounded px-4 py-3 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-rust/30 focus:border-rust transition'

  return (
    <section id="apply" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
              Application Gate
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
              Not sure if this is the right fit? That's exactly what the application is for.
            </h2>
            <p className="text-forest/65 text-lg mb-6 leading-relaxed">
              Before we schedule any conversation, I ask you to answer a few thoughtful
              questions. It takes about ten minutes. It helps me understand where your program
              is, what you're trying to build, and whether I'm the right person to help.
            </p>
            <p className="text-forest/65 text-lg mb-10 leading-relaxed">
              If it's a fit, we'll set up a call. If it's not, I'll tell you honestly — and
              point you somewhere more useful if I can.
            </p>
            <div className="bg-cream-dark rounded-lg p-6">
              <p className="text-forest/50 text-xs uppercase tracking-widest font-medium mb-2">
                What to expect
              </p>
              <p className="text-forest font-serif text-lg">
                No sales pitch. No pressure. Just a real conversation between people who care
                about the same kids.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {status === 'success' ? (
              <div className="border border-forest/15 rounded-lg p-10 text-center">
                <p className="text-3xl mb-4">✓</p>
                <h3 className="font-serif text-xl text-forest mb-2">Got it, thanks.</h3>
                <p className="text-forest/60">I'll be in touch within a day or two.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest/65 mb-1.5">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={field}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-forest/65 mb-1.5">
                    Organization
                  </label>
                  <input
                    id="org"
                    type="text"
                    required
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    className={field}
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest/65 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={field}
                    placeholder="you@yourorg.org"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest/65 mb-1.5">
                    Tell me about your program and what you're trying to build
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder="Where is your program right now? What's working? What hurts? About 10 minutes to answer honestly."
                  />
                </div>
                {status === 'error' && (
                  <p className="text-rust text-sm">
                    Something went wrong — try again or email directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-rust hover:bg-rust-dark disabled:opacity-50 text-white py-4 rounded font-medium text-lg transition-colors"
                >
                  {status === 'submitting' ? 'Sending…' : 'Apply for a Fit Call →'}
                </button>
                <p className="text-center text-forest/40 text-sm">
                  No sales pitch. No pressure. About 10 minutes.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
