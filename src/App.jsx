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
import {
  BuyerDashboardLayout,
  BuyerDashboardHome,
  BuyerDashboardOrders,
  BuyerDashboardSaved,
  BuyerDashboardReferral,
  BuyerDashboardAddresses,
  BuyerDashboardSettings,
} from './components/organisms/buyer-dashboard/index.js'
import { useAuth } from './context/AuthContext.jsx'
import './styles/hero.css'

function RequireRole({ role, children }) {
  const { user, profile, initializing, profileLoading } = useAuth()
  if (initializing) return <div style={{ padding: 24, color: '#fff' }}>Loading…</div>
  if (!user) return <Navigate to="/login" replace />

  const lastRole = (() => {
    try {
      return window.localStorage.getItem('hs_last_role')
    } catch {
      return null
    }
  })()

  const effectiveRole = profile?.role || lastRole

  // While profile is loading and we don't have a fallback role, show loader instead of a blank screen.
  if (profileLoading && !effectiveRole) {
    return <div style={{ padding: 24, color: '#fff' }}>Loading your dashboard…</div>
  }

  if (!effectiveRole) {
    return <Navigate to="/" replace />
  }

  if (effectiveRole !== role) {
    if (effectiveRole === 'seller') return <Navigate to="/seller/dashboard" replace />
    if (effectiveRole === 'buyer') return <Navigate to="/buyer/dashboard" replace />
    return <Navigate to="/" replace />
  }

  return children
}

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
  const { initializing } = useAuth()
  if (initializing) return null
  return <LoginPage />
}

function AuthAwareSignup() {
  const { initializing } = useAuth()
  if (initializing) return null
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
        <Route
          path="/seller/dashboard"
          element={(
            <RequireRole role="seller">
              <SellerDashboardLayout />
            </RequireRole>
          )}
        >
          <Route index element={<SellerDashboardOverview />} />
          <Route path="orders" element={<SellerDashboardOrders />} />
          <Route path="products" element={<SellerDashboardProducts />} />
          <Route path="earnings" element={<SellerDashboardEarnings />} />
          <Route path="reviews" element={<SellerDashboardReviews />} />
          <Route path="settings" element={<SellerDashboardSettings />} />
        </Route>
        <Route
          path="/buyer/dashboard"
          element={(
            <RequireRole role="buyer">
              <BuyerDashboardLayout />
            </RequireRole>
          )}
        >
          <Route index element={<BuyerDashboardHome />} />
          <Route path="orders" element={<BuyerDashboardOrders />} />
          <Route path="saved" element={<BuyerDashboardSaved />} />
          <Route path="referral" element={<BuyerDashboardReferral />} />
          <Route path="addresses" element={<BuyerDashboardAddresses />} />
          <Route path="settings" element={<BuyerDashboardSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
