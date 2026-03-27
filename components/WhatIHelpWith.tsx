const painPoints = [
  {
    title: 'Grant & Contract Reporting',
    description:
      "Drowning in data pulls before every report deadline? I help you build reporting systems that don't eat your week — or require you to reconstruct them from scratch every quarter.",
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
    title: 'Outcomes Tracking',
    description:
      "If you're not sure what your data is actually telling you about your program, you're not alone. I help you design tracking that's readable, honest, and useful — not just impressive-looking to funders.",
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
    title: 'Program Design Clarity',
    description:
      "When enrollment is soft or retention is inconsistent, there's usually a reason — and it's usually findable. I help you trace what's actually happening so you can fix the right thing.",
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
    title: 'Funder-Ready Stories',
    description:
      "Numbers alone don't move grant committees. I help you translate your outcomes data into plain-language narratives that tell the real story of your program's impact.",
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

export default function WhatIHelpWith() {
  return (
    <section id="services" className="bg-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-navy mb-4">What I help with</h2>
        <p className="text-navy/55 text-lg mb-16 max-w-2xl">
          Most of this work shows up in the same four places. Any of them sound familiar?
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className={`rounded-3xl border p-8 transition-shadow hover:shadow-lg ${point.bg} ${point.border}`}
            >
              <div className={`mb-5 ${point.iconColor}`}>{point.icon}</div>
              <h3 className="font-serif text-xl text-navy mb-3">{point.title}</h3>
              <p className="text-navy/60 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
