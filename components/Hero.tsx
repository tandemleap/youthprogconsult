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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-snug mb-8 max-w-2xl">
              Running a youth program is the most rewarding and challenging work that you may
              ever have the privilege to do.
            </h1>
            <p className="text-cream/75 text-xl md:text-2xl mb-4 leading-relaxed font-serif italic">
              You don't have to carry the weight of it alone.
            </p>
            <p className="text-cream/75 text-xl md:text-2xl mb-12 font-serif">
              I can help.
            </p>
            <a
              href="#apply"
              className="inline-block bg-rust hover:bg-rust-dark text-white px-8 py-4 rounded text-lg font-medium transition-colors"
            >
              Apply for a Fit Call →
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
