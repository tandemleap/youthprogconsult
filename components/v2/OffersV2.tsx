// V2 NEW SECTION: Offers / Ways to Work Together
// Changes from v1 (HowItWorks):
//   - Separates the "what you get" (offers/deliverables) from the "how we proceed" (process).
//   - Each offer now includes explicit, concrete deliverables so the engagement feels purchasable.
//   - Duration inconsistency fixed: free consult is consistently 30 minutes throughout.
//   - "Root cause analysis" and "trace what's actually happening" language removed per brief.
//   - Optional add-on is reframed as a named tier with clearer scope.

const offers = [
  {
    label: 'A',
    color: 'text-amber border-amber/40 bg-amber/15',
    labelColor: 'text-amber',
    title: 'Diagnostic Intensive',
    badge: 'Paid · Remote · 1 to 2 days',
    description:
      "A focused engagement to find where your reporting, tracking, or program design is creating the most burden. You leave with a practical plan, not a deck full of recommendations you'll never implement.",
    deliverables: [
      'Written findings memo',
      'System or process map showing where the breakdown is',
      'Top three bottlenecks, prioritized by impact',
      'Actionable recommendations with a clear starting point',
      '30-minute follow-up call included',
    ],
  },
  {
    label: 'B',
    color: 'text-coral border-coral/40 bg-coral/15',
    labelColor: 'text-coral',
    title: 'On-Site Intensive',
    badge: 'Paid · In person · 1 to 3 days',
    description:
      "For teams that need to move from diagnosis to building. We work alongside your staff to redesign or rebuild systems during the visit, not just plan to do it afterward.",
    deliverables: [
      'Revised reporting workflow or tracking structure',
      'Simplified data collection process staff can actually maintain',
      'Hands-on training and walkthrough with your team',
      'Clear next steps and a handoff plan',
      'Follow-up implementation support available',
    ],
  },
]

export default function OffersV2() {
  return (
    <section id="process" className="bg-navy py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-warm mb-4">Ways to work together</h2>
        <p className="text-warm/55 text-lg mb-16 max-w-2xl">
          Two focused engagements with concrete deliverables, plus optional ongoing support.
          Everything starts with a free 30-minute conversation.
        </p>

        {/* Main offers */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-navy-light/40 border border-warm/10 rounded-3xl p-8 flex flex-col"
            >
              {/* Label badge */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 font-serif text-2xl font-bold mb-6 ${offer.color}`}>
                {offer.label}
              </div>

              <h3 className="font-serif text-xl text-warm mb-1">{offer.title}</h3>
              <p className={`text-xs font-semibold uppercase tracking-widest mb-5 ${offer.labelColor}`}>
                {offer.badge}
              </p>
              <p className="text-warm/65 leading-relaxed text-sm mb-6 flex-1">
                {offer.description}
              </p>

              {/* Deliverables */}
              <div>
                <p className="text-warm/35 text-xs font-semibold uppercase tracking-widest mb-3">
                  What you get
                </p>
                <ul className="space-y-2">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-warm/55 text-sm">
                      <span className={`mt-1 shrink-0 ${offer.labelColor}`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on: Implementation Support */}
        <div className="border border-warm/15 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-warm/20 text-warm/30 font-serif text-3xl shrink-0">
            +
          </div>
          <div>
            <h3 className="font-serif text-xl text-warm mb-1">Implementation Support</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-warm/40 mb-3">
              Optional ongoing
            </p>
            <p className="text-warm/60 leading-relaxed">
              Ongoing support to put recommendations into practice: keeping staff on track,
              troubleshooting what comes up, and making sure the changes actually hold.
              Scoped based on what your organization needs, not a fixed retainer.
            </p>
          </div>
        </div>

        {/* CTA bridge */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all shadow-lg shadow-coral/20 hover:-translate-y-0.5"
          >
            Schedule a Free Consult
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-warm/35 text-sm mt-3">30 minutes. No charge. No pitch.</p>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 block"
        >
          <path
            d="M0,30 C360,64 720,4 1080,34 C1260,50 1380,28 1440,32 L1440,64 L0,64 Z"
            fill="#FAF8F4"
          />
        </svg>
      </div>
    </section>
  )
}
