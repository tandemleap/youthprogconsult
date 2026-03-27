// V2 ALTERNATE ABOUT SECTION
// Changes from v1:
//   - Tightened to three paragraphs instead of four.
//   - Added explicit bridge sentence connecting biography to buyer relevance.
//   - Removed "What I bring isn't a methodology" framing; replaced with more grounded language.
//   - Removed abstract "practitioner credibility, systems-builder mindset" list.
//   - Kept all the credibility anchors: SPARK program, grant reporting, staff supervision,
//     enrollment/retention, late-night system building.

export default function AboutV2() {
  return (
    <section id="about" className="bg-warm py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Headshot */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-sky/20 rotate-2 transform" />
              <img
                src="/scott-headshot.jpg"
                alt="Scott Griffiths"
                className="relative rounded-3xl w-full object-cover object-top shadow-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8">About Scott</h2>

            {/* V2: tighter bio with explicit bridge sentence for buyer relevance */}
            <div className="space-y-5 text-navy/65 text-lg leading-relaxed">
              <p>
                I ran SPARK, a youth-serving program in Ashland, WI, for years. That meant leading
                afterschool programming, supervising staff, managing community relationships, and
                handling grant reporting, all at once, with no dedicated data person and no extra
                bandwidth to build things right the first time.
              </p>
              <p>
                The systems I recommend are ones I've built and used under real conditions. The
                reporting problems I help organizations fix are ones I've lived through. I've had
                the 11 p.m. spreadsheet nights. I've sat across from funders needing to explain
                outcomes I didn't have clean data to support. I know what it costs an organization
                when the back-end systems aren't keeping up with the front-end work.
              </p>

              {/* Bridge sentence: translates biography into buyer relevance */}
              <p>
                That means I understand both sides of this work: the direct work with young people,
                and the back-end systems that determine whether a program can stay clear, credible,
                and fundable. I do this because good youth-serving programs are worth preserving,
                and too many of them are held back by systems that were never built to support them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
