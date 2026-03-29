// V3 HERO
// Forest green background, full-height, serif headline.
// No photo — V3 moves the headshot to the About section.
// "I can help." is set apart below the main headline with space and emphasis.
// Two CTAs: primary coral button, secondary text link.

export default function HeroV3() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Subtle texture blobs */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-navy-light/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-coral/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-32 pt-40 z-10 w-full">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-warm/10 text-warm/70 border border-warm/15 px-4 py-2 rounded-full text-sm font-medium font-dm-sans mb-10">
          <span className="w-2 h-2 rounded-full bg-coral inline-block" />
          Youth Program Consulting
        </div>

        {/* Headline — large serif, generous line height */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm leading-tight mb-8 max-w-3xl">
          Running a youth program is the most rewarding and challenging work that you may ever have the privilege to do.
        </h1>

        {/* "I can help." — set apart with visual weight */}
        <p className="font-serif text-3xl md:text-4xl text-warm/90 mb-12 leading-snug">
          You don't have to carry the weight of it alone.{' '}
          <em className="text-coral not-italic font-semibold">I can help.</em>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/apply"
            className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-2xl text-lg font-medium font-dm-sans transition-all shadow-lg shadow-coral/20 hover:-translate-y-0.5"
          >
            Apply for a Fit Call
          </a>
          <a
            href="#offer"
            className="inline-flex items-center justify-center gap-2 text-warm/70 hover:text-warm text-lg font-medium font-dm-sans transition-colors px-4 py-4"
          >
            See what 90 days looks like
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Wave to warm off-white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path d="M0,24 C240,64 480,0 720,28 C840,42 1080,10 1440,28 L1440,64 L0,64 Z" fill="#FAF8F4" />
        </svg>
      </div>
    </section>
  )
}
