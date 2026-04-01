# CLAUDE.md — youthprogconsult

Project context and conventions for Claude Code sessions.

---

## What this project is

A single-page marketing website for **Scott Griffiths Consulting**, a solo consulting practice
focused on youth-serving organizations. Scott helps nonprofits, public agencies, and grant-funded
programs fix the reporting, tracking, and program systems that prevent good work from showing up
clearly to funders.

The site is currently in active copy and positioning development. Three parallel homepage versions
exist for side-by-side comparison before a final version is chosen.

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript 5** (strict mode)
- **Tailwind CSS 3** (custom config, no component library)
- **Google Fonts** via `next/font/google` — Lora (serif) and Inter (sans) loaded globally;
  DM Sans loaded scoped to `/v3` via `app/v3/layout.tsx`
- **Formspree** for contact form submissions (V1/V2) — form ID placeholder in `Contact.tsx`
- **Calendly** for scheduling (V1/V2) — URL placeholder in `Contact.tsx`
- **Vercel** deployment target (`vercel.json` present)

---

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # lint
```

The build will fail in network-restricted environments due to Google Fonts fetching.
TypeScript checks (`./node_modules/.bin/tsc --noEmit`) work offline and are the reliable
way to validate code in those environments.

---

## Routes

| Route    | Description                                      | Status      |
|----------|--------------------------------------------------|-------------|
| `/`      | V1 — original homepage                           | Live        |
| `/v2`    | V2 — sharper messaging, same visual system       | Comparison  |
| `/v3`    | V3 — new copy direction, editorial layout        | Comparison  |
| `/apply` | Fit call application — form embed placeholder    | Placeholder |

All three homepage versions share a `VersionSwitcher` badge (bottom-right corner) that lets
you flip between them. Remove `VersionSwitcher` from all three pages before going live.

---

## Project structure

```
app/
  layout.tsx              # Root layout — loads Inter + Lora fonts globally
  page.tsx                # V1 homepage
  globals.css             # Tailwind directives + smooth scroll
  v2/
    page.tsx              # V2 homepage
  v3/
    layout.tsx            # V3 nested layout — loads DM Sans, scoped to /v3 only
    page.tsx              # V3 homepage
  apply/
    page.tsx              # /apply placeholder — embed Fillout or Qualtrics form here

components/
  Nav.tsx                 # V1 nav (shared scroll behavior pattern)
  Hero.tsx                # V1 hero
  WhatIHelpWith.tsx       # V1 services section
  HowItWorks.tsx          # V1 process / offers section
  WhoThisIsFor.tsx        # V1 audience section
  About.tsx               # V1 about section
  Contact.tsx             # V1/V2 contact form (Formspree + Calendly)
  VersionSwitcher.tsx     # Floating V1/V2/V3 switcher badge — remove before launch

  v2/
    NavV2.tsx             # V2 nav — CTA label "Schedule a Free Consult"
    HeroV2.tsx            # V2 hero — concrete value prop headline
    PainV2.tsx            # V2 pain/recognition section (new in V2)
    ServicesV2.tsx        # V2 services — outcome-framed card titles
    OffersV2.tsx          # V2 offers — explicit deliverables per engagement
    QualificationV2.tsx   # V2 who-this-is-for — best fit + not a fit columns
    OutcomesV2.tsx        # V2 outcomes — what clients leave with (new in V2)
    AboutV2.tsx           # V2 about — tighter bio, buyer-relevance bridge sentence
    ContactV2.tsx         # V2 contact — 30-min duration consistent throughout

  v3/
    NavV3.tsx             # V3 nav — "What You'll Get" + "Apply for a Fit Call"
    HeroV3.tsx            # V3 hero — weight/mission framing, no photo
    WeightV3.tsx          # V3 — "carrying all of it" prose section (no heading)
    PainV3.tsx            # V3 — pull-quote pain points with accent bar markers
    ReframeV3.tsx         # V3 — belonging positioning + Content/Context comparison
    AboutV3.tsx           # V3 about — new headshot, pull quote
    OfferV3.tsx           # V3 — 90-Day Belonging + Outcomes Build, pillar cards
    ProofV3.tsx           # V3 — proof signals with custom checkmarks
    ApplicationV3.tsx     # V3 — application gate leading to /apply

public/
  scott-headshot.jpg           # Headshot used in V1 + V2
  scott-headshot-v3.jpg        # Placeholder — replace with Scott-Headshot-Morocco.png
  Scott-Headshot-Morocco.png   # New headshot for V3 (push from local if not present)
```

---

## Design system

### Color palette (tailwind.config.ts)

All versions share this palette. V3 originally used forest green / terracotta but was
switched back to match V1/V2.

```
navy:   DEFAULT #1B2C45 | light #2A4268 | dark #111D2E   — dominant dark color
sky:    DEFAULT #3590C8 | light #88BFDC | pale #E0F0F8    — accent blue
coral:  DEFAULT #E8523A | dark  #C84028 | light #F07858   — CTA / action color
amber:  DEFAULT #F09030 | light #F7C070 | pale  #FDF3E0   — secondary accent
rose:   DEFAULT #D93870 | light #F070A0 | pale  #FCE8F0   — tertiary accent
warm:   DEFAULT #FAF8F4 | dark  #F0EDE6 | darker #E4DFD8  — background / off-white
forest: DEFAULT #1E3A2F | light #2D5544 | dark  #0F211A   — V3 original (unused now)
terra:  DEFAULT #C4521A | dark  #9E3E10 | light #D9784A   — V3 original (unused now)
```

### Typography

- `font-serif` — Lora (headings across all versions)
- `font-sans` — Inter (body text V1/V2)
- `font-dm-sans` — DM Sans (body text V3 only, scoped via `app/v3/layout.tsx`)

### Section background rhythm (V1/V2 pattern)

```
Hero        bg-navy
Section     bg-warm       (off-white)
Section     bg-sky-pale   (light blue)
Section     bg-navy
Section     bg-sky-pale or bg-warm
About       bg-warm
Contact     bg-navy
Footer      bg-navy-dark
```

Wave SVG transitions are used between navy and warm sections.

---

## Key differences between versions

| | V1 | V2 | V3 |
|---|---|---|---|
| Headline framing | Poetic ("Tell me what's working") | Concrete value prop | Weight/mission ("most rewarding and challenging work") |
| Photo placement | Hero + About | Hero + About | About only |
| Pain recognition | In WhoThisIsFor | Standalone PainV2 section | Pull-quote format in PainV3 |
| Service framing | Category names | Outcome-framed titles | N/A — replaced by 90-Day offer |
| Offers | 3-step process cards | Deliverables per engagement | 90-Day Belonging + Outcomes Build with A/B/C pillars |
| Who this is for | Best fit only | Best fit + not a fit | Implicit in copy |
| Outcomes section | No | Yes (OutcomesV2) | Proof signals section |
| CTA label | "Book a Free Consult" | "Schedule a Free Consult" | "Apply for a Fit Call" |
| Contact | Formspree form + Calendly | Same | Application gate → /apply |
| Body font | Inter | Inter | DM Sans |
| Duration | Inconsistent (60 min / 30 min) | 30 min consistent | N/A |

---

## Pending items

- [ ] **Replace placeholder headshot in V3**: `public/scott-headshot-v3.jpg` is a copy of the
  V1 headshot. The correct image (`Scott-Headshot-Morocco.png`) needs to be committed from the
  local machine: `git add public/Scott-Headshot-Morocco.png && git commit && git push`
- [ ] **Formspree form ID**: Replace `YOUR_FORM_ID` in `components/Contact.tsx` and
  `components/v2/ContactV2.tsx` with the real Formspree endpoint
- [ ] **Calendly URL**: Replace `https://calendly.com/scottgriffiths` in both contact components
  with the real Calendly link
- [ ] **Embed application form**: Replace the placeholder in `app/apply/page.tsx` with a Fillout
  or Qualtrics embed once the form is ready
- [ ] **Practice name**: Nav and footer currently show "Scott Griffiths" — update if a practice
  name is chosen
- [ ] **Remove VersionSwitcher**: Delete `<VersionSwitcher />` from `app/page.tsx`,
  `app/v2/page.tsx`, and `app/v3/page.tsx` before launch
- [ ] **Retire unused versions**: Once a final version is chosen, remove the others and their
  component directories

---

## Git

- **Active branch**: `claude/modify-youthprogconsult-site-KDjRb`
- **Main branch**: `main`
- **Remote**: `tandemleap/youthprogconsult`
- Never push directly to `main` without a PR

---

## Copy tone reminders

When editing copy on this site, keep these in mind:

- Voice: plainspoken, credible, practitioner-led — not corporate, not startup, not generic nonprofit
- No em dashes (use commas, periods, or restructure)
- No vague consultant-speak unless anchored in a concrete example
- Avoid: "root causes", "trace what's actually happening", "fix the right thing"
- Prefer: "where the breakdown is", "what's creating the burden", "what needs to change first"
- Audience: directors and managers at small-to-mid-size youth-serving orgs, often wearing
  multiple hats, no dedicated data/evaluation staff
