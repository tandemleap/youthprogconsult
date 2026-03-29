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
    <section id="who" className="bg-cream-dark py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">
            Who this is for
          </h2>
          <p className="text-forest/75 text-lg leading-relaxed mb-8">
            Executive Directors and Program Directors at mid-size youth-serving organizations —
            typically running government and foundation-funded programs, managing a
            small-to-mid-size team, and doing more with less than they should have to.
          </p>
          <p className="text-forest/65 text-sm font-medium uppercase tracking-widest mb-4">
            This might be you if…
          </p>
          <ul className="space-y-3 mb-10">
            {recognitions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-forest/75 text-lg leading-snug">
                <span className="text-rust mt-1 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-forest/65 leading-relaxed mb-8">
            This isn't for large organizations with dedicated data staff. It's for the
            director who is also the program manager, the funder liaison, and the person
            who built the enrollment tracker in Google Sheets at 11pm because nobody else
            was going to do it.
          </p>
          <blockquote className="border-l-4 border-rust pl-6 py-1">
            <p className="font-serif text-xl text-forest italic leading-relaxed">
              "We don't have bandwidth to fix our systems."
            </p>
            <p className="text-forest/55 mt-3 text-base">
              That's exactly why this work starts with a conversation, not a project plan.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
