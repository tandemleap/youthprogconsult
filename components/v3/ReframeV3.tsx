// V3 REFRAME: "Belonging isn't a buzzword"
// Warm off-white background.
// Body copy followed by a CSS-only two-column comparison component.
// Label: "The difference isn't effort. It's focus."

const contentFocus = [
  'Curriculum and activities',
  'Staffing ratios and coverage',
  'Compliance reporting',
  'Program completion rates',
]

const contextFocus = [
  'Belonging and authentic connection',
  'Voluntary, consistent attendance',
  'Staff relationships youth trust',
  'Outcomes that are actually true',
]

export default function ReframeV3() {
  return (
    <section className="bg-warm py-28 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl text-navy leading-snug mb-10">
          Belonging isn't a buzzword. It's only a buzzword when it lives in your grant report
          but not in your program.
        </h2>

        {/* Body */}
        <div className="space-y-5 font-dm-sans text-lg text-navy/70 leading-relaxed mb-16">
          <p>
            When belonging is real — when a teenager who's been suspended three times this
            semester still shows up to your program on a Tuesday — everything else follows.
            Attendance. Behavior. Staff morale. Funder confidence. The data that tells your story.
          </p>
          <p>
            Most programs focus on content: the right curriculum, the right activities, the right
            staffing ratios. But content doesn't keep struggling kids coming back. Context does.
            Specifically, the context of belonging.
          </p>
          <p>
            When kids genuinely feel like they belong, everything else gets easier. The question
            is how to build that deliberately — and how to prove it.
          </p>
          <p className="font-semibold text-navy/80">That's the work.</p>
        </div>

        {/* Comparison cards */}
        <div>
          <p className="font-dm-sans text-sm font-semibold uppercase tracking-widest text-navy/40 mb-6 text-center">
            The difference isn't effort. It's focus.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Content Focus */}
            <div className="border border-navy/15 rounded-2xl p-7 bg-warm-dark">
              <h3 className="font-serif text-xl text-navy/60 mb-5">Content Focus</h3>
              <ul className="space-y-3">
                {contentFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-dm-sans text-navy/55">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-navy/25" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Context Focus — accented */}
            <div className="border border-coral/25 rounded-2xl p-7 bg-coral/5">
              <h3 className="font-serif text-xl text-coral mb-5">Context Focus</h3>
              <ul className="space-y-3">
                {contextFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-dm-sans text-navy/75">
                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
