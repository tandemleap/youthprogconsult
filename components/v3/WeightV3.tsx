// V3 "THE WEIGHT" SECTION
// No heading — opens mid-thought as a continuation of the hero.
// Warm off-white background, comfortable reading width (max-w-2xl prose).
// Final two lines set apart in slightly larger type with more weight.

export default function WeightV3() {
  return (
    <section className="bg-warm py-28 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Body — no heading, opens directly */}
        <div className="space-y-6 font-dm-sans text-lg text-forest/75 leading-relaxed">
          <p>
            You know what you signed up for. You also know nobody fully prepared you for what
            it actually takes.
          </p>
          <p>
            Creating a space where young people can show up as their authentic selves — and then
            holding that space when they actually do. Keeping everyone physically and emotionally
            safe while leaving room for joy. Holding youth and staff accountable with empathy when
            things inevitably veer off course, without losing the relationship in the process.
          </p>
          <p>
            Staying true to your vision while honoring what your funders need to hear. Telling
            the story of what's happening in a way that's authentic and compelling — even when
            the most important moments of your day don't look like outcomes on a spreadsheet.
          </p>
          <p>
            Gathering data that actually tells you whether what you're doing is working —
            consistently, without placing a burden on the staff who should be focused on serving
            youth. Keeping the funding coming. Keeping the doors open. Keeping it fun.
          </p>
          <p className="font-semibold text-forest/60">Carrying all of it.</p>
        </div>

        {/* Closing lines — larger, set apart, given weight */}
        <div className="mt-14 pt-10 border-t border-forest/10 space-y-2">
          <p className="font-serif text-2xl md:text-3xl text-forest leading-snug">
            Most people outside this work don't understand what that costs.
          </p>
          <p className="font-serif text-2xl md:text-3xl text-terra leading-snug">
            The ones doing it well rarely get told they're doing it well.
          </p>
        </div>

      </div>
    </section>
  )
}
