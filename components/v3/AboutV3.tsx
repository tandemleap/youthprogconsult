// V3 ABOUT / CREDIBILITY
// Two-column asymmetric layout: text left (3 cols), photo right (2 cols).
// Uses the new headshot: /scott-headshot-v3.jpg
// Pull quote with coral left border, set apart from body text.
// Photo: scott-headshot-v3.jpg — save the provided image to public/scott-headshot-v3.jpg

export default function AboutV3() {
  return (
    <section id="about" className="bg-warm-dark py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">

          {/* Text — left, wider column */}
          <div className="md:col-span-3 order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8 leading-snug">
              I didn't learn this in a workshop. I built it with real teenagers in a real program.
            </h2>

            <div className="space-y-5 font-dm-sans text-lg text-navy/70 leading-relaxed mb-10">
              <p>
                I'm the Program Director of SPARK, a healing-centered afterschool program in
                northern Wisconsin serving teenagers — including a lot of teenagers that other
                systems have already given up on. Youth with attendance issues. Youth with school
                discipline records. Youth who have every reason not to come back.
              </p>
              <p>
                They keep coming back.
              </p>
              <p>
                Not because of our curriculum. Because of the context we've built — deliberately,
                over years — with the staff practices, the culture, and the data systems to back it up.
              </p>
              <p>
                I also convene a cross-sector youth coalition, write and manage grants across
                multiple funding streams, and build the data infrastructure that keeps programs
                accountable without burying staff in compliance work. I understand how these
                programs are funded — how to braid funding streams together, how to avoid
                supplantation, how to tell a story that funders believe because it's actually true.
              </p>
            </div>

            {/* Pull quote — coral left border, prominent type */}
            <blockquote className="border-l-4 border-coral pl-6 py-1">
              <p className="font-serif text-xl md:text-2xl text-navy leading-snug">
                "Most consultants hand you a framework. I help you build the whole thing —
                culture, practices, data systems, and reporting — in a way your funders will
                believe because it's actually true."
              </p>
            </blockquote>
          </div>

          {/* Photo — right, narrower column */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="relative">
              {/* Decorative offset bg */}
              <div className="absolute inset-0 rounded-3xl bg-coral/15 rotate-2 transform" />
              {/* New headshot — save provided image to public/scott-headshot-v3.jpg */}
              <img
                src="/scott-headshot-v3.jpg"
                alt="Scott Griffiths"
                className="relative rounded-3xl w-full object-cover object-top shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
