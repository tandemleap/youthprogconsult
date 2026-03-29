// V3 PROOF SIGNALS
// Warm off-white background.
// Five proof items with custom accent markers, generous spacing.
// Photo placeholder below.

const proofItems = [
  "Youth with school attendance and behavior challenges maintain voluntary attendance because they want to be there.",
  "Behavioral incidents are low, and when they happen, they're handled with kindness, clear limits, and respect, not exclusion.",
  "Staff feel equipped and supported, not just managed.",
  "Data systems capture what's real without becoming a compliance burden.",
  "Grant reports tell a story that's true, not just technically accurate.",
]

export default function ProofV3() {
  return (
    <section className="bg-warm py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5 leading-snug">
          What "it's working" actually looks like
        </h2>
        <p className="font-dm-sans text-lg text-navy/65 mb-14 leading-relaxed">
          You don't need a perfect program. You need one that's honest about what it's building.
          Here's what outcomes look like when the context is right:
        </p>

        {/* Proof items */}
        <div className="space-y-8 mb-16">
          {proofItems.map((item, i) => (
            <div key={i} className="flex items-start gap-5">
              {/* Custom coral marker */}
              <div className="shrink-0 mt-1.5 w-6 h-6 rounded-full bg-coral/15 border border-coral/30 flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l2.5 2.5L9 1" stroke="#E8523A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-dm-sans text-lg text-navy/75 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Photo placeholder */}
        <div className="w-full aspect-[16/7] rounded-3xl bg-warm-darker flex items-center justify-center">
          <p className="font-dm-sans text-sm italic text-navy/35 text-center px-8">
            Photo: staff and youth in a real interaction, warm and candid
          </p>
        </div>

      </div>
    </section>
  )
}
