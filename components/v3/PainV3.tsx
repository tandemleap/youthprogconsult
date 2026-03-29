// V3 PAIN POINTS
// Styled as large pull-quote items, NOT standard bullets.
// Each gets generous vertical breathing room with an accent marker.
// Slight warm-dark background to separate from the Weight section.

const pains = [
  "\u201cWe have kids with real needs but we can\u2019t keep them engaged.\u201d",
  "\u201cMy staff care \u2014 but they keep defaulting to consequences and it\u2019s pushing kids out.\u201d",
  "\u201cWe\u2019re doing meaningful work but I can\u2019t prove it to our funders.\u201d",
]

export default function PainV3() {
  return (
    <section className="bg-warm-dark py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Intro */}
        <p className="font-dm-sans text-lg text-forest/60 mb-16">
          If you're honest with yourself, at least one of these is louder than the others right now:
        </p>

        {/* Pull-quote pain points */}
        <div className="space-y-12">
          {pains.map((pain, i) => (
            <div key={i} className="flex items-start gap-6">
              {/* Accent marker */}
              <div className="shrink-0 mt-2">
                <div className="w-1 h-12 bg-terra rounded-full" />
              </div>
              {/* Quote */}
              <p className="font-serif text-2xl md:text-3xl text-forest italic leading-snug">
                {pain}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="font-dm-sans text-lg text-forest/65 mt-16 max-w-xl">
          Maybe it's all three. Either way, the fix isn't a new curriculum.
        </p>

      </div>
    </section>
  )
}
