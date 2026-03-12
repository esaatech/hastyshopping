import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Hero } from './components/organisms/Hero.jsx'
import { FeaturedSection } from './components/organisms/FeaturedSection.jsx'
import { HowItWorksSection } from './components/organisms/HowItWorksSection.jsx'
import { TestimonialsSection } from './components/organisms/TestimonialsSection.jsx'
import { NewsletterSection } from './components/organisms/NewsletterSection.jsx'
import { Footer } from './components/organisms/Footer.jsx'
import { LoginPage } from './components/organisms/LoginPage.jsx'
import { SignupPage } from './components/organisms/SignupPage.jsx'
import { SellerLoginPage } from './components/organisms/SellerLoginPage.jsx'
import { SellerSignupPage } from './components/organisms/SellerSignupPage.jsx'
import {
  SellerDashboardLayout,
  SellerDashboardOverview,
  SellerDashboardOrders,
  SellerDashboardProducts,
  SellerDashboardEarnings,
  SellerDashboardReviews,
  SellerDashboardSettings,
} from './components/organisms/seller-dashboard/index.js'
import { useAuth } from './context/AuthContext.jsx'
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

function HomeOrDashboard() {
  const { user, profile, initializing } = useAuth()
  if (initializing) return null
  if (user && profile?.role === 'seller') {
    return <Navigate to="/seller/dashboard" replace />
  }
  return <HomePage />
}

function AuthAwareLogin() {
  const { user, profile, initializing } = useAuth()
  if (initializing) return null
  if (user && profile?.role === 'seller') return <Navigate to="/seller/dashboard" replace />
  if (user) return <Navigate to="/" replace />
  return <LoginPage />
}

function AuthAwareSignup() {
  const { user, profile, initializing } = useAuth()
  if (initializing) return null
  if (user && profile?.role === 'seller') return <Navigate to="/seller/dashboard" replace />
  if (user) return <Navigate to="/" replace />
  return <SignupPage />
}

function AuthAwareSellerLogin() {
  const { user, profile, initializing } = useAuth()
  if (initializing) return null
  if (user && profile?.role === 'seller') return <Navigate to="/seller/dashboard" replace />
  return <SellerLoginPage />
}

function AuthAwareSellerSignup() {
  const { user, profile, initializing } = useAuth()
  if (initializing) return null
  if (user && profile?.role === 'seller') return <Navigate to="/seller/dashboard" replace />
  return <SellerSignupPage />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeOrDashboard />} />
        <Route path="/login" element={<AuthAwareLogin />} />
        <Route path="/signup" element={<AuthAwareSignup />} />
        <Route path="/seller/login" element={<AuthAwareSellerLogin />} />
        <Route path="/seller/signup" element={<AuthAwareSellerSignup />} />
        <Route path="/seller/dashboard" element={<SellerDashboardLayout />}>
          <Route index element={<SellerDashboardOverview />} />
          <Route path="orders" element={<SellerDashboardOrders />} />
          <Route path="products" element={<SellerDashboardProducts />} />
          <Route path="earnings" element={<SellerDashboardEarnings />} />
          <Route path="reviews" element={<SellerDashboardReviews />} />
          <Route path="settings" element={<SellerDashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
