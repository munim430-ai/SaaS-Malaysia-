import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Problem } from '@/components/sections/Problem'
import { Services } from '@/components/sections/Services'
import { WROCalculator } from '@/components/sections/WROCalculator'
import { LegalBoundary } from '@/components/sections/LegalBoundary'
import { About } from '@/components/sections/About'
import { ContactForm } from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Services />
      <WROCalculator />
      <LegalBoundary />
      <About />
      <ContactForm />
    </>
  )
}
