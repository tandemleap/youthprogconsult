// V2 NEW SECTION: Outcomes / What Changes
// Not present in v1.
// Goal: help the reader picture the after-state in concrete, operational terms.
// Placed between Qualification and About to close the persuasion arc before the bio.

const outcomes = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="2" y="6" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <path d="M8 16l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'text-sky',
    bg: 'bg-sky/8',
    border: 'border-sky/15',
    heading: 'A reporting workflow staff can maintain',
    detail: 'Not a system held together by one person who built it at 11 p.m.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <circle cx="16" cy="16" r="5" fill="currentColor" fillOpacity="0.6" />
        <line x1="16" y1="3" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: 'text-coral',
    bg: 'bg-coral/8',
    border: 'border-coral/15',
    heading: 'Outcome measures that reflect reality',
    detail: 'Data you can stand behind in a funder conversation without qualification.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M6 26 L6 18 M12 26 L12 12 M18 26 L18 16 M24 26 L24 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 10 C8 6 14 14 20 8 C23 5 26 7 28 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      </svg>
    ),
    color: 'text-amber',
    bg: 'bg-amber/8',
    border: 'border-amber/15',
    heading: 'Less scramble at grant deadline time',
    detail: 'Because the data is already organized and the narrative is already grounded.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="3" y="4" width="26" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <path d="M11 22 l5 6 5-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
        <line x1="8" y1="11" x2="24" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    color: 'text-rose',
    bg: 'bg-rose/8',
    border: 'border-rose/15',
    heading: 'Clearer language for funder conversations',
    detail: 'A narrative that connects your work to your outcomes in plain terms.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <circle cx="22" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
        <path d="M5 26 C5 21 8 19 10 19 C12 19 15 20 16 20 C17 20 20 19 22 19 C24 19 27 21 27 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    color: 'text-sky',
    bg: 'bg-sky/8',
    border: 'border-sky/15',
    heading: 'A better read on enrollment and retention',
    detail: 'An understanding of where the friction is and what needs to change to address it.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4 L20 12 L29 13 L22.5 19.5 L24 28 L16 24 L8 28 L9.5 19.5 L3 13 L12 12 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" strokeLinejoin="round" />
      </svg>
    ),
    color: 'text-amber',
    bg: 'bg-amber/8',
    border: 'border-amber/15',
    heading: 'More confidence in what is and is not working',
    detail: "A clearer picture of where to put energy and where to stop spending it.",
  },
]

export default function OutcomesV2() {
  return (
    <section className="bg-sky-pale py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-5">What changes after working together</h2>
          <p className="text-navy/60 text-lg leading-relaxed">
            The goal isn't a document you file away. It's operational clarity, and systems that
            hold up without requiring heroics from your team every quarter.
          </p>
        </div>

        {/* Outcome grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((item) => (
            <div
              key={item.heading}
              className={`${item.bg} border ${item.border} rounded-2xl p-6 flex flex-col gap-3`}
            >
              <div className={item.color}>{item.icon}</div>
              <h3 className="font-serif text-lg text-navy leading-snug">{item.heading}</h3>
              <p className="text-navy/55 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
