export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-16 right-8 w-80 h-80 rounded-full bg-sky/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-64 h-64 rounded-full bg-coral/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-amber/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-rose/10 blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-32 pt-40 z-10">
        <div className="inline-flex items-center gap-2 bg-sky/15 text-sky-light border border-sky/25 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-sky-light inline-block" />
          Youth-Serving Program Consulting
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm leading-snug mb-8 max-w-4xl">
          Tell me what's working. Tell me what hurts.{' '}
          <em className="text-sky-light not-italic">We'll find what's actually driving both</em>
          {' '}— and build from there.
        </h1>

        <p className="text-warm/65 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          I work with youth-serving organizations to find the real root causes inside their
          programs — not just the symptoms showing up in spreadsheets and grant reports.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all shadow-lg shadow-coral/20 hover:-translate-y-0.5"
        >
          Book a Free Consult
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 block"
        >
          <path
            d="M0,24 C240,64 480,0 720,28 C840,42 1080,10 1440,28 L1440,64 L0,64 Z"
            fill="#FAF8F4"
          />
        </svg>
      </div>
    </section>
  )
}
