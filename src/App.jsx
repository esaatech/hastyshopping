import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './components/organisms/Hero.jsx'
import { FeaturedSection } from './components/organisms/FeaturedSection.jsx'
import { HowItWorksSection } from './components/organisms/HowItWorksSection.jsx'
import { TestimonialsSection } from './components/organisms/TestimonialsSection.jsx'
import { NewsletterSection } from './components/organisms/NewsletterSection.jsx'
import { Footer } from './components/organisms/Footer.jsx'
import { LoginPage } from './components/organisms/LoginPage.jsx'
import { SignupPage } from './components/organisms/SignupPage.jsx'
import './styles/hero.css'

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
