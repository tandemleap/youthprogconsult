// V2 ALTERNATE SERVICES (replaces WhatIHelpWith)
// Changes from v1:
//   - Section title and intro copy tightened.
//   - Each card title reframed around the problem being solved, not just a category name.
//   - Card descriptions lead with the operational pain, then explain the fix.
//   - "Program Design Clarity" and "Funder-Ready Stories" remain distinct but descriptions
//     are more concrete about what the work actually produces.
//   - Removed "trace what's actually happening" and "fix the right thing" phrasing per brief.

const services = [
  {
    title: 'Reporting That Holds Up at Deadline',
    description:
      "If you're rebuilding your reporting system from scratch every quarter, the system isn't working for you. I help you build a structure that's repeatable, less burdensome, and accurate enough to stand behind when a funder asks questions.",
    bg: 'bg-sky/8',
    border: 'border-sky/20',
    iconColor: 'text-sky',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="3" y="23" width="9" height="14" rx="2" fill="currentColor" opacity="0.25" />
        <rect x="16" y="14" width="9" height="23" rx="2" fill="currentColor" opacity="0.5" />
        <rect x="29" y="5" width="9" height="32" rx="2" fill="currentColor" />
        <path d="M7 20 l3-5 3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'Outcome Tracking You Can Trust',
    description:
      "Vague or inconsistent outcome data is harder to defend than no data at all when a funder asks questions. I help you design tracking that captures what's actually happening in your program, in a format staff can maintain and you can use.",
    bg: 'bg-coral/8',
    border: 'border-coral/20',
    iconColor: 'text-coral',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" opacity="0.2" />
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
        <circle cx="20" cy="20" r="5" fill="currentColor" />
        <line x1="20" y1="2" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="38" y1="20" x2="33" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Enrollment and Retention Troubleshooting',
    description:
      "When participation numbers are soft or inconsistent, there's usually a concrete reason: program friction, unclear expectations, or a design mismatch with your population. I help you find where the breakdown is and what to change first.",
    bg: 'bg-amber/8',
    border: 'border-amber/20',
    iconColor: 'text-amber',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="17" cy="17" r="13" stroke="currentColor" strokeWidth="2.5" />
        <line x1="27" y1="27" x2="37" y2="37" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="12" x2="17" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Funder-Ready Narratives from Real Work',
    description:
      "Numbers alone don't move grant committees. I help you translate your outcomes into plain-language narratives grounded in your actual data, not inflated, not vague, and not something you have to rebuild from scratch each cycle.",
    bg: 'bg-rose/8',
    border: 'border-rose/20',
    iconColor: 'text-rose',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="2" y="3" width="36" height="26" rx="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <path d="M14 29 l6 8 6-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <line x1="9" y1="13" x2="31" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function ServicesV2() {
  return (
    <section id="services" className="bg-sky-pale py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* V2: intro frames the "four places systems break down" more directly */}
        <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">What I help with</h2>
        <p className="text-navy/55 text-lg mb-16 max-w-2xl">
          Four areas where systems tend to break down in youth-serving organizations. Most of my
          clients come in through one of these, and find that two or three are connected.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`rounded-3xl border p-8 transition-shadow hover:shadow-lg ${svc.bg} ${svc.border}`}
            >
              <div className={`mb-5 ${svc.iconColor}`}>{svc.icon}</div>
              <h3 className="font-serif text-xl text-navy mb-3">{svc.title}</h3>
              <p className="text-navy/60 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
