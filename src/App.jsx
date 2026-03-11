import { Hero } from './components/organisms/Hero.jsx'
import { FeaturedSection } from './components/organisms/FeaturedSection.jsx'
import { HowItWorksSection } from './components/organisms/HowItWorksSection.jsx'
import { TestimonialsSection } from './components/organisms/TestimonialsSection.jsx'
import { NewsletterSection } from './components/organisms/NewsletterSection.jsx'
import { Footer } from './components/organisms/Footer.jsx'
import './styles/hero.css'

function App() {
  return (
    <>
      <main id="main" className="page">
        <Hero />
        <FeaturedSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

export default App
