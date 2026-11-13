import Navbar               from '../components/Navbar'
import Hero                 from '../components/Hero'
import Introduction         from '../components/Introduction'
import Services             from '../components/Services'
import Industries           from '../components/Industries'
import HealthcarePartnership from '../components/HealthcarePartnership'
import CorporateWellness    from '../components/CorporateWellness'
import HowItWorks           from '../components/HowItWorks'
import CoachProfile         from '../components/CoachProfile'
import FinalCTA             from '../components/FinalCTA'
import ContactSection       from '../components/ContactSection'
import Footer               from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Industries />
        <HealthcarePartnership />
        <CorporateWellness />
        <HowItWorks />
        <CoachProfile />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
