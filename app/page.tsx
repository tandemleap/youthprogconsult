import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TheWeight from '@/components/TheWeight'
import PainPoints from '@/components/PainPoints'
import TheReframe from '@/components/TheReframe'
import About from '@/components/About'
import TheOffer from '@/components/TheOffer'
import ProofSignals from '@/components/ProofSignals'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheWeight />
        <PainPoints />
        <TheReframe />
        <About />
        <TheOffer />
        <ProofSignals />
        <Contact />
      </main>
      <footer className="bg-forest-dark py-10 px-6 text-center">
        <p className="text-cream/60 text-base mb-2 leading-relaxed max-w-xl mx-auto font-serif italic">
          Helping youth programs become the place kids actually keep showing up to —
          especially the ones who need it most.
        </p>
        <p className="text-cream/30 text-sm mt-4">
          Practice name TBD | email TBD
        </p>
        <p className="text-cream/20 text-xs mt-2">
          © {new Date().getFullYear()} Scott Griffiths Consulting
        </p>
      </footer>
    </>
  )
}
