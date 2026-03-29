export default function About() {
  return (
    <section id="about" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Headshot */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute inset-2 rounded-lg bg-rust/20 rotate-2 transform" />
              <img
                src="/scott-headshot.jpg"
                alt="Scott Griffiths"
                className="relative rounded-lg w-full object-cover object-top shadow-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            <p className="text-rust font-medium text-sm uppercase tracking-widest mb-6">
              About
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-8">
              I didn't learn this in a workshop. I built it with real teenagers in a real program.
            </h2>
            <div className="space-y-5 text-forest/75 text-lg leading-relaxed">
              <p>
                I'm the Program Director of SPARK, a healing-centered afterschool program in
                northern Wisconsin serving teenagers — including a lot of teenagers that other
                systems have already given up on. Youth with attendance issues. Youth with school
                discipline records. Youth who have every reason not to come back.
              </p>
              <p className="font-serif text-xl text-forest italic">
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
              <p>
                Most consultants hand you a framework. I help you build the whole thing —
                culture, practices, data systems, and reporting — in a way your funders will
                believe because it's actually true.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
