const steps = [
  {
    number: '01',
    color: 'text-sky border-sky/40 bg-sky/15',
    title: 'Free Zoom Consult',
    subtitle: 'No charge. No pitch.',
    description:
      "60 minutes. You tell me what's working and what hurts. I listen and ask questions. At the end, we decide together whether deeper work makes sense — and if so, what that looks like.",
    items: [],
  },
  {
    number: '02',
    color: 'text-amber border-amber/40 bg-amber/15',
    title: 'Diagnostic Intensive',
    subtitle: 'Paid · Zoom · 1–2 days',
    description:
      "A structured deep dive into your program's reporting, data, and design. You get a clear picture of what's actually driving your outcomes — and a prioritized list of what to do about it.",
    items: [
      'Review of current reporting systems, data collection, and program design',
      'Root cause analysis — tracing gaps back to their actual source',
      'Written findings and prioritized recommendations you can act on',
      '30-day follow-up call included',
    ],
  },
  {
    number: '03',
    color: 'text-coral border-coral/40 bg-coral/15',
    title: 'On-Site Intensive',
    subtitle: 'Paid · In person · 1–3 days',
    description:
      "Everything in the Diagnostic, plus in-person working sessions with your team. We don't just plan — we build during the visit.",
    items: [
      'Hands-on work building or rebuilding key systems with your staff',
      'Working sessions with program and data team members',
      'Staff walkthrough so changes actually stick after I leave',
      'Follow-up implementation support available',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="bg-navy py-24 px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sky/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-warm mb-4">How it works</h2>
        <p className="text-warm/55 text-lg mb-16 max-w-2xl">
          Three ways to engage, starting with a free conversation.
        </p>

        {/* Steps — visual flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-navy-light/40 border border-warm/10 rounded-3xl p-8 flex flex-col"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 font-serif text-2xl font-bold mb-6 ${step.color}`}>
                {step.number}
              </div>
              <h3 className="font-serif text-xl text-warm mb-1">{step.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-60" style={{ color: 'inherit' }}>
                <span className={step.color.split(' ')[0]}>{step.subtitle}</span>
              </p>
              <p className="text-warm/65 leading-relaxed text-sm mb-4 flex-1">{step.description}</p>
              {step.items.length > 0 && (
                <ul className="space-y-2 mt-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-warm/55 text-sm">
                      <span className={`mt-1 shrink-0 ${step.color.split(' ')[0]}`}>▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Optional add-on */}
        <div className="border border-warm/15 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-start">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-warm/20 text-warm/30 font-serif text-3xl shrink-0">
            +
          </div>
          <div>
            <h3 className="font-serif text-xl text-warm mb-1">Implementation & Stabilization</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-warm/40 mb-3">
              Optional ongoing support
            </p>
            <p className="text-warm/60 leading-relaxed">
              Ongoing support to implement recommendations, train staff, and keep things moving.
              Scoped case-by-case based on what your organization actually needs.
            </p>
          </div>
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
            fill="#E0F0F8"
          />
        </svg>
      </div>
    </section>
  )
}
