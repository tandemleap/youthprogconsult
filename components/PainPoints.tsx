const quotes = [
  '"We have kids with real needs but we can\'t keep them engaged."',
  '"My staff care — but they keep defaulting to consequences and it\'s pushing kids out."',
  '"We\'re doing meaningful work but I can\'t prove it to our funders."',
]

export default function PainPoints() {
  return (
    <section id="painpoints" className="bg-cream-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
          The Pain Points
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
          If you're honest with yourself, at least one of these is louder than the others
          right now:
        </h2>
        <div className="mt-12 space-y-5">
          {quotes.map((quote) => (
            <div
              key={quote}
              className="bg-white border border-cream-dark rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-1 bg-rust mb-5 rounded" />
              <p className="font-serif text-xl text-forest leading-relaxed">{quote}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-forest/65 text-lg leading-relaxed max-w-2xl">
          Maybe it's all three. Either way, the fix isn't a new curriculum.
        </p>
      </div>
    </section>
  )
}
