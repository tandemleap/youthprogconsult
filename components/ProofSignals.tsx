const signals = [
  'Youth with school attendance and behavior challenges maintain voluntary attendance — because they want to be there',
  'Behavioral incidents are low, and when they happen, they\'re handled with kindness, clear limits, and respect — not exclusion',
  'Staff feel equipped and supported, not just managed',
  'Data systems capture what\'s real without becoming a compliance burden',
  'Grant reports tell a story that\'s true, not just technically accurate',
]

export default function ProofSignals() {
  return (
    <section id="proof" className="bg-cream-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
            Proof Signals
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
            What "it's working" actually looks like
          </h2>
          <p className="text-forest/60 text-lg mb-12 leading-relaxed">
            You don't need a perfect program. You need one that's honest about what it's building.
            Here's what outcomes look like when the context is right:
          </p>
          <ul className="space-y-5">
            {signals.map((signal) => (
              <li key={signal} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-rust/15 border border-rust/30 flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="#B85C38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-forest/75 text-lg leading-relaxed">{signal}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
