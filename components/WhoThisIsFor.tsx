const recognitions = [
  "You're drowning in spreadsheets every time a grant report is due",
  "You struggle to explain your outcomes in a way that makes sense to funders",
  "Enrollment or retention has gone soft and you're not sure why",
  "You built the data system yourself, at 11pm, because nobody else was going to",
  "You're the director, program manager, funder liaison, and IT department — all at once",
  "You know something's off but can't get far enough above it to see what",
]

export default function WhoThisIsFor() {
  return (
    <section id="who" className="bg-sky-pale py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6">Who this is for</h2>
            <p className="text-navy/65 text-lg leading-relaxed mb-8">
              Executive Directors and Program Directors at mid-size youth-serving organizations —
              typically running government and foundation-funded programs, managing a small-to-mid-size
              team, and doing more with less than they should have to.
            </p>
            <p className="text-navy/65 leading-relaxed">
              This isn't for large organizations with dedicated data staff. It's for the leader who
              is also the program manager, the funder liaison, and the person responsible for making
              it all make sense.
            </p>
          </div>

          <div>
            <p className="text-navy/50 text-sm font-semibold uppercase tracking-widest mb-5">
              This might be you if…
            </p>
            <ul className="space-y-3 mb-10">
              {recognitions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-sky/20 border border-sky/30 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l2.5 2.5L9 1" stroke="#3590C8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-navy/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="bg-warm rounded-2xl p-6 border-l-4 border-coral">
              <p className="font-serif text-lg text-navy italic leading-relaxed mb-3">
                "We don't have bandwidth to fix our systems."
              </p>
              <p className="text-navy/55 text-sm leading-relaxed">
                That's exactly why this work starts with a conversation, not a project plan.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
