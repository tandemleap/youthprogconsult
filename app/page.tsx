import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatIHelpWith from '@/components/WhatIHelpWith'
import HowItWorks from '@/components/HowItWorks'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import About from '@/components/About'
import Contact from '@/components/Contact'
import VersionSwitcher from '@/components/VersionSwitcher'

export default function Home() {
  return (
    <>
      <Nav />
      <VersionSwitcher current="v1" />
      <main>
        <Hero />
        <WhatIHelpWith />
        <HowItWorks />
        <WhoThisIsFor />
        <About />
        <Contact />
      </main>
      <footer className="bg-navy-dark py-8 px-6 text-center">
        <p className="text-warm/30 text-sm">
          © {new Date().getFullYear()} Scott Griffiths Consulting
        </p>
      </footer>
    </>
  )
}
