// /apply — Placeholder page for the fit call application form.
// Embed a Fillout or Qualtrics form here when ready.
// The form should ask 4-6 thoughtful questions about the organization,
// current pain points, and what they're hoping to build.

export const metadata = {
  title: 'Apply for a Fit Call — Scott Griffiths Consulting',
  description: 'Answer a few questions so we can figure out if this is the right fit.',
}

export default function Apply() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">

        {/* Back link */}
        <a
          href="/v3"
          className="inline-flex items-center gap-2 text-warm/40 hover:text-warm/70 text-sm font-dm-sans transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </a>

        <h1 className="font-serif text-3xl md:text-4xl text-warm mb-6 leading-snug">
          Apply for a Fit Call
        </h1>
        <p className="font-dm-sans text-warm/60 text-lg leading-relaxed mb-10">
          The application takes about ten minutes. It helps me understand where your program is
          and whether I'm the right person to help. If it's a fit, we'll set up a call.
        </p>

        {/* Form embed placeholder */}
        <div className="w-full min-h-64 rounded-2xl border border-warm/10 bg-navy-light/30 flex flex-col items-center justify-center gap-3 p-10">
          <p className="font-dm-sans text-warm/35 text-sm italic">
            Application form — embed Fillout or Qualtrics form here
          </p>
          <p className="font-dm-sans text-warm/20 text-xs">
            /apply · placeholder
          </p>
        </div>

      </div>
    </main>
  )
}
