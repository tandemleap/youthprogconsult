// V2 NEW SECTION: Pain / Recognition
// Not present in v1.
// Goal: make the reader feel specifically understood before presenting services.
// Language is plainspoken and concrete, not melodramatic.
// Positioned between Hero and Services to build recognition before offering solutions.

const painLines = [
  {
    text: "You built the data system yourself at 11 p.m. because nobody else was going to do it.",
    accent: 'border-coral/40',
    dot: 'bg-coral',
  },
  {
    text: "Every grant report deadline feels like an emergency, even when it shouldn't by now.",
    accent: 'border-amber/40',
    dot: 'bg-amber',
  },
  {
    text: "Your outcomes are real, but translating them into language funders respond to is harder than it should be.",
    accent: 'border-sky/40',
    dot: 'bg-sky',
  },
  {
    text: "Enrollment went soft and you have a few theories, but no clean way to figure out which one is right.",
    accent: 'border-rose/40',
    dot: 'bg-rose',
  },
  {
    text: "Staff are doing meaningful work, but the way you're capturing it doesn't show that clearly.",
    accent: 'border-coral/40',
    dot: 'bg-coral',
  },
  {
    text: "You know something's broken somewhere. You're just too close to it, and too busy, to find where.",
    accent: 'border-amber/40',
    dot: 'bg-amber',
  },
]

export default function PainV2() {
  return (
    <section className="bg-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-navy/40 text-sm font-semibold uppercase tracking-widest mb-4">
            Sound familiar?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">
            This is what it looks like from the inside
          </h2>
          <p className="text-navy/60 text-lg leading-relaxed">
            Most of the organizations I work with aren't failing. They're doing real work with real
            results. But the systems behind the work weren't built to support it, and that creates
            a specific kind of strain.
          </p>
        </div>

        {/* Pain point grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {painLines.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 bg-white/60 border-l-4 ${item.accent} rounded-r-2xl px-6 py-5`}
            >
              <span className={`mt-1.5 shrink-0 w-2.5 h-2.5 rounded-full ${item.dot}`} />
              <p className="text-navy/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bridge line */}
        <div className="mt-12 max-w-2xl">
          <p className="text-navy/55 text-lg leading-relaxed">
            None of that is a sign that the program isn't working. It's a sign that the system
            behind the program needs attention. That's where I come in.
          </p>
        </div>

      </div>
    </section>
  )
}
