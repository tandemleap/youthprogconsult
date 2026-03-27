// V2 ALTERNATE QUALIFICATION SECTION (replaces WhoThisIsFor)
// Changes from v1:
//   - Added an explicit "Not the right fit" column alongside "Best fit."
//   - Best fit criteria are more specific (names team size, funding type, staffing context).
//   - Removed the single testimonial quote; replaced with a more direct bridge statement.
//   - The "not a fit" column helps buyers self-select out, which improves lead quality.

const bestFit = [
  "Youth-serving nonprofits and public youth agencies",
  "Grant-funded or government-contracted programs",
  "Small to mid-size teams without dedicated data or evaluation staff",
  "Directors and managers carrying reporting, programming, and oversight at once",
  "Organizations where the data system was built by whoever had time, not a specialist",
  "Teams that know something isn't working but haven't had bandwidth to dig in",
]

const notAFit = [
  "Large organizations with a mature internal evaluation or data department",
  "Teams primarily looking for a polished slide deck or summary document",
  "Organizations that want generic strategic planning without operational follow-through",
  "Programs that need a full-time embedded staff person rather than a focused engagement",
]

export default function QualificationV2() {
  return (
    <section id="who" className="bg-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">Who this is for</h2>
          <p className="text-navy/65 text-lg leading-relaxed">
            This work is designed specifically for the organizations that don't have a team of
            specialists to delegate to. If you're the director, the program manager, the funder
            liaison, and the reporting person all at once, this is built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Best fit */}
          <div className="bg-sky/6 border border-sky/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-sky/20 border border-sky/30 flex items-center justify-center shrink-0">
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                  <path d="M1 5.5l3.5 3.5L13 1" stroke="#3590C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy">Best fit</h3>
            </div>
            <ul className="space-y-3">
              {bestFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-sky" />
                  <span className="text-navy/70 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="bg-warm-dark border border-warm-darker rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-navy/8 border border-navy/15 flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="#1B2C45" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy">Not the right fit</h3>
            </div>
            <ul className="space-y-3">
              {notAFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-navy/25" />
                  <span className="text-navy/55 leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bridge note */}
            <div className="mt-8 pt-6 border-t border-warm-darker">
              <p className="text-navy/50 text-sm leading-relaxed">
                Not sure which category you're in? That's what the free consult is for.
                I'll tell you honestly if this is the right kind of help for your situation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
