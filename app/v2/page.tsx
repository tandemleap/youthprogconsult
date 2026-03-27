// =============================================================================
// ALTERNATE HOMEPAGE — V2
// Route: /v2
// =============================================================================
// Purpose: A/B testing version for stronger messaging and positioning.
// The existing homepage at / is untouched.
//
// What changed structurally (v2 vs v1):
//   + Added PainV2 section (new): plainspoken recognition before services
//   + Added OutcomesV2 section (new): concrete after-state between Who and About
//   ~ ServicesV2: outcome-oriented card titles and descriptions
//   ~ OffersV2: replaces HowItWorks with explicit deliverables per engagement
//   ~ QualificationV2: added "Not the right fit" column alongside "Best fit"
//   ~ AboutV2: tightened to 3 paragraphs; added explicit buyer-relevance bridge sentence
//   ~ ContactV2: duration fixed to 30 min everywhere; CTA label unified
//   ~ NavV2: CTA unified to "Schedule a Free Consult"
//
// Components live in: /components/v2/
// =============================================================================

import NavV2 from '@/components/v2/NavV2'
import HeroV2 from '@/components/v2/HeroV2'
import PainV2 from '@/components/v2/PainV2'
import ServicesV2 from '@/components/v2/ServicesV2'
import OffersV2 from '@/components/v2/OffersV2'
import QualificationV2 from '@/components/v2/QualificationV2'
import OutcomesV2 from '@/components/v2/OutcomesV2'
import AboutV2 from '@/components/v2/AboutV2'
import ContactV2 from '@/components/v2/ContactV2'

export const metadata = {
  title: 'Scott Griffiths Consulting — Youth-Serving Program Systems',
  description:
    'I help youth-serving organizations fix the reporting, tracking, and program systems that keep good work from showing up clearly.',
}

export default function HomeV2() {
  return (
    <>
      <NavV2 />
      <main>
        {/* 1. Hero: sharpened value prop and named pain points */}
        <HeroV2 />

        {/* 2. Pain/Recognition: concrete recognition before presenting the solution */}
        <PainV2 />

        {/* 3. Services: outcome-framed service areas */}
        <ServicesV2 />

        {/* 4. Offers: tangible engagements with explicit deliverables */}
        <OffersV2 />

        {/* 5. Qualification: best fit + not a fit columns */}
        <QualificationV2 />

        {/* 6. Outcomes: the concrete after-state clients leave with */}
        <OutcomesV2 />

        {/* 7. About: tighter bio with buyer-relevance bridge */}
        <AboutV2 />

        {/* 8. Contact: consistent CTA language and 30-min duration */}
        <ContactV2 />
      </main>
      <footer className="bg-navy-dark py-8 px-6 text-center">
        <p className="text-warm/30 text-sm">
          © {new Date().getFullYear()} Scott Griffiths Consulting
        </p>
      </footer>
    </>
  )
}
