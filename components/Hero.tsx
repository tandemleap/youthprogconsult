export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-forest">
      <div className="max-w-5xl mx-auto px-6 py-32 pt-40 w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* Left: text */}
          <div className="md:col-span-3">
            <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
              Youth-Serving Program Consulting
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-snug mb-8 max-w-4xl">
              Tell me what's working. Tell me what hurts. We'll find what's actually
              driving both — and build from there.
            </h1>
            <p className="text-cream/75 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              I work with youth-serving organizations to find the real root causes inside their
              programs — not just the symptoms showing up in spreadsheets and grant reports.
            </p>
            <a
              href="#contact"
              className="inline-block bg-rust hover:bg-rust-dark text-white px-8 py-4 rounded text-lg font-medium transition-colors"
            >
              Book a Free Consult
            </a>
          </div>

          {/* Right: photo */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-72 md:w-full max-w-xs">
              <div className="absolute inset-2 rounded-lg bg-rust/20 rotate-2 transform" />
              <img
                src="/scott-headshot.jpg"
                alt="Scott Griffiths"
                className="relative rounded-lg w-full object-cover object-top shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
