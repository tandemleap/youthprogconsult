// =============================================================================
// ALTERNATE HOMEPAGE — V3
// Route: /v3
// =============================================================================
// Purpose: New design direction testing a different positioning, voice, and
// visual identity (forest green palette, DM Sans body font, editorial layout).
//
// The existing homepage at / (V1) and /v2 are completely untouched.
//
// What's new in V3 vs V1/V2:
//   - Entirely new color system: forest green dominant, terracotta accent
//   - DM Sans body font (humanist sans) via /v3/layout.tsx — does not affect V1/V2
//   - New hero: headline-first, no photo, two CTAs
//   - New "Weight" section: opens mid-thought with no heading, prose-only
//   - New "Pain Points" section: pull-quote format, not bullets
//   - New "Reframe" section: belonging positioning + CSS comparison cards
//   - "About" section: new headshot (scott-headshot-v3.jpg) + pull quote
//   - New "Offer" section: 90-Day Belonging + Outcomes Build with pillar cards
//   - New "Proof Signals" section
//   - New "Application Gate" section leading to /apply
//   - No contact form (replaced by /apply flow)
//
// Components live in: /components/v3/
// Fonts scoped in: /app/v3/layout.tsx
// Apply route placeholder: /app/apply/page.tsx
// =============================================================================

import NavV3 from '@/components/v3/NavV3'
import HeroV3 from '@/components/v3/HeroV3'
import WeightV3 from '@/components/v3/WeightV3'
import PainV3 from '@/components/v3/PainV3'
import ReframeV3 from '@/components/v3/ReframeV3'
import AboutV3 from '@/components/v3/AboutV3'
import OfferV3 from '@/components/v3/OfferV3'
import ProofV3 from '@/components/v3/ProofV3'
import ApplicationV3 from '@/components/v3/ApplicationV3'
import VersionSwitcher from '@/components/VersionSwitcher'

export const metadata = {
  title: 'Scott Griffiths Consulting — Youth Program Consulting',
  description:
    'Helping youth programs become the place kids actually keep showing up to — especially the ones who need it most.',
}

export default function HomeV3() {
  return (
    <>
      <NavV3 />
      <VersionSwitcher current="v3" />
      <main>
        {/* 1. Hero: new positioning — weight + "I can help" */}
        <HeroV3 />

        {/* 2. The Weight: opens mid-thought, no heading, prose recognition */}
        <WeightV3 />

        {/* 3. Pain Points: pull-quote format, not bullets */}
        <PainV3 />

        {/* 4. The Reframe: belonging positioning + Content/Context comparison */}
        <ReframeV3 />

        {/* 5. About / Credibility: new headshot, practitioner authority, pull quote */}
        <AboutV3 />

        {/* 6. The Offer: 90-Day Build with pillar cards and deliverables */}
        <OfferV3 />

        {/* 7. Proof Signals: what "working" actually looks like */}
        <ProofV3 />

        {/* 8. Application Gate: qualify leads before scheduling */}
        <ApplicationV3 />
      </main>

      <footer className="bg-forest-dark py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm-sans text-warm/30 text-sm">
            © {new Date().getFullYear()} Scott Griffiths Consulting
          </p>
          <p className="font-dm-sans text-warm/25 text-sm text-center md:text-right max-w-sm">
            Helping youth programs become the place kids actually keep showing up to — especially
            the ones who need it most.
          </p>
        </div>
      </footer>
    </>
  )
}
