const pillars = [
  {
    label: 'Pillar A',
    title: 'Belonging-Centered Culture & Practices',
    description:
      "The routines, norms, and staff behaviors that create a context where struggling youth stay. We look at what's actually happening day-to-day and redesign the pieces that are pushing kids — or staff — toward the exit.",
  },
  {
    label: 'Pillar B',
    title: 'Staff Development',
    description:
      "Your staff are your program. We build their capacity through practical training, coaching, and tools they'll actually use — not binders that live on a shelf. Grounded in Collaborative & Proactive Solutions and trauma-informed practice, made practical for the real Tuesday afternoon.",
  },
  {
    label: 'Pillar C',
    title: 'Outcomes + Reporting System',
    description:
      "Simple, sustainable data capture that tells your story without burning out your team. No more hand-counting sign-in sheets across three spreadsheets at 11pm before a report is due. We build dashboards, establish a monthly story rhythm, and create the documentation your funders and board actually want to read.",
  },
]

const addOns = [
  'Custom Airtable data system build-out',
  'Outcomes narrative for funder and board reporting',
  'Intake and referral process redesign',
  'Reporting cadence implementation',
  'Funding stream mapping — braiding, compliance, and supplantation awareness',
]

export default function TheOffer() {
  return (
    <section id="offer" className="bg-forest py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
          The Offer
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
          The 90-Day Belonging + Outcomes Build
        </h2>
        <p className="text-cream/65 text-lg mb-4 max-w-2xl leading-relaxed">
          A structured engagement that changes how your program operates — and how you talk about it.
        </p>
        <p className="text-cream/65 text-lg mb-16 max-w-2xl leading-relaxed">
          This isn't a training series. It's a hands-on build. We work together across three
          pillars, customized to where your program is right now.
        </p>

        {/* Three pillars */}
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`flex flex-col md:flex-row gap-8 py-12 ${
                i < pillars.length - 1 ? 'border-b border-cream/10' : ''
              }`}
            >
              <div className="md:w-32 shrink-0">
                <span className="font-serif text-5xl text-rust/50 font-bold leading-none">
                  {pillar.label.split(' ')[1]}
                </span>
                <p className="text-rust text-xs font-medium uppercase tracking-wide mt-1">
                  {pillar.label}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-cream mb-4">{pillar.title}</h3>
                <p className="text-cream/70 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-8 border border-cream/15 rounded-lg p-8">
          <h3 className="font-serif text-xl text-cream mb-1">Optional Add-On Modules</h3>
          <p className="text-rust text-sm font-medium uppercase tracking-wide mb-6">
            Available à la carte
          </p>
          <ul className="space-y-2.5">
            {addOns.map((item) => (
              <li key={item} className="flex items-start gap-3 text-cream/65">
                <span className="text-rust mt-0.5 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Investment */}
        <div className="mt-6 border border-cream/15 rounded-lg p-8">
          <h3 className="font-serif text-xl text-cream mb-1">Investment</h3>
          <p className="text-rust text-sm font-medium uppercase tracking-wide mb-4">
            Scoped to your program
          </p>
          <p className="text-cream/70 leading-relaxed mb-3">
            Engagements are scoped to fit your program's size, complexity, and needs.
            Investment typically ranges from <span className="text-cream font-medium">$25,000 to $45,000</span>.
            We'll figure out the right scope together before anything is signed.
          </p>
          <p className="text-cream/55 leading-relaxed">
            If budget is a real constraint, say so in your application. I'd rather have an
            honest conversation early than waste either of our time.
          </p>
        </div>
      </div>
    </section>
  )
}
