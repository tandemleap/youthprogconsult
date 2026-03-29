// V3 APPLICATION GATE
// Forest green background, centered layout.
// Qualifies leads before scheduling a call.
// CTA links to /apply — a placeholder page for embedding a Fillout or Qualtrics form.

export default function ApplicationV3() {
  return (
    <section id="apply-gate" className="bg-forest py-28 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-forest-light/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-terra/8 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-warm mb-6 leading-snug">
          Not sure if this is the right fit?
          <br />
          <span className="text-warm/70">That's exactly what the application is for.</span>
        </h2>

        {/* Body */}
        <div className="space-y-4 font-dm-sans text-lg text-warm/65 leading-relaxed mb-12">
          <p>
            Before we schedule any conversation, I ask you to answer a few thoughtful questions.
            It takes about ten minutes. It helps me understand where your program is, what you're
            trying to build, and whether I'm the right person to help.
          </p>
          <p>
            If it's a fit, we'll set up a call. If it's not, I'll tell you honestly — and point
            you somewhere more useful if I can.
          </p>
          <p className="text-warm/80 font-medium">
            No sales pitch. No pressure. Just a real conversation between people who care about
            the same kids.
          </p>
        </div>

        {/* Primary CTA */}
        <a
          href="/apply"
          className="inline-flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-10 py-5 rounded-2xl text-xl font-medium font-dm-sans transition-all shadow-lg shadow-terra/25 hover:-translate-y-0.5 mb-4"
        >
          Apply for a Fit Call
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Reassurance line */}
        <p className="font-dm-sans text-warm/35 text-sm">
          No sales pitch. No pressure. About 10 minutes.
        </p>

      </div>
    </section>
  )
}
