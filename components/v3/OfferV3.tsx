// V3 OFFER: "The 90-Day Belonging + Outcomes Build"
// Forest green background, light text.
// Three pillar cards (A / B / C) in a row with a connector diagram below.
// Optional add-ons in a two-column list.
// Investment inset box (slightly lighter forest bg).
// CTA: "Apply for a Fit Call" (terra).

const pillars = [
  {
    label: 'A',
    title: 'Belonging-Centered Culture & Practices',
    description:
      "The routines, norms, and staff behaviors that create a context where struggling youth stay. We look at what's actually happening day-to-day and redesign the pieces that are pushing kids or staff toward the exit.",
  },
  {
    label: 'B',
    title: 'Staff Development',
    description:
      "Your staff are your program. We build their capacity through practical training, coaching, and tools they'll actually use, not binders that live on a shelf. Grounded in Collaborative & Proactive Solutions and trauma-informed practice, made practical for the real Tuesday afternoon.",
  },
  {
    label: 'C',
    title: 'Outcomes + Reporting System',
    description:
      "Simple, sustainable data capture that tells your story without burning out your team. No more hand-counting sign-in sheets across three spreadsheets at 11pm. We build dashboards, establish a monthly story rhythm, and create the documentation your funders and board actually want to read.",
  },
]

const addOns = [
  'Custom Airtable data system build-out',
  'Outcomes narrative for funder and board reporting',
  'Intake and referral process redesign',
  'Reporting cadence implementation',
  'Funding stream mapping: braiding, compliance, and supplantation awareness',
]

export default function OfferV3() {
  return (
    <section id="offer" className="bg-forest py-28 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-light/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-terra/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-warm mb-4 leading-snug">
            The 90-Day Belonging + Outcomes Build
          </h2>
          <p className="font-dm-sans text-xl text-warm/70 mb-6 leading-relaxed">
            A structured engagement that changes how your program operates and how you talk about it.
          </p>
          <p className="font-dm-sans text-warm/60 leading-relaxed">
            This isn't a training series. It's a hands-on build. We work together across three
            pillars, customized to where your program is right now.
          </p>
        </div>

        {/* Three pillar cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="bg-forest-light/40 border border-warm/10 rounded-3xl p-8 flex flex-col"
            >
              {/* Label */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border-2 border-terra/50 text-terra font-serif text-2xl font-bold mb-6">
                {pillar.label}
              </div>
              <h3 className="font-serif text-lg text-warm mb-4 leading-snug">{pillar.title}</h3>
              <p className="font-dm-sans text-warm/60 text-sm leading-relaxed flex-1">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* A -> B -> C connector diagram */}
        <div className="flex items-center justify-center gap-3 mb-16 px-4">
          {pillars.map((pillar, i) => (
            <div key={pillar.label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-serif text-xl font-bold text-terra">{pillar.label}</span>
                <span className="font-dm-sans text-warm/40 text-xs text-center max-w-[80px] hidden sm:block leading-tight">
                  {pillar.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </div>
              {i < pillars.length - 1 && (
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="shrink-0">
                  <path d="M0 8h28M22 2l6 6-6 6" stroke="#C4521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
          <p className="font-dm-sans text-warm/35 text-xs ml-4 hidden md:block">
            Built together. Customized to where you are.
          </p>
        </div>

        {/* Optional add-ons */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-warm mb-6">Optional Add-On Modules</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {addOns.map((item) => (
              <div key={item} className="flex items-start gap-3 font-dm-sans text-warm/60 text-sm">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-terra/60" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Investment box */}
        <div className="bg-forest-light/30 border border-warm/10 rounded-2xl p-8 mb-10">
          <h3 className="font-serif text-xl text-warm mb-3">Investment</h3>
          <p className="font-dm-sans text-warm/70 leading-relaxed mb-3">
            Engagements are scoped to fit your program's size, complexity, and needs. Investment
            typically ranges from $25,000 to $45,000. We'll figure out the right scope together
            before anything is signed.
          </p>
          <p className="font-dm-sans text-warm/45 text-sm italic leading-relaxed">
            If budget is a real constraint, say so in your application. I'd rather have an honest
            conversation early than waste either of our time.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/apply"
            className="inline-flex items-center gap-2 bg-terra hover:bg-terra-dark text-white px-10 py-4 rounded-2xl text-lg font-medium font-dm-sans transition-all shadow-lg shadow-terra/20 hover:-translate-y-0.5"
          >
            Apply for a Fit Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      {/* Wave to warm */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path d="M0,30 C360,64 720,4 1080,34 C1260,50 1380,28 1440,32 L1440,64 L0,64 Z" fill="#FAF8F4" />
        </svg>
      </div>
    </section>
  )
}
