import { useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BUYER, BUYER_DASHBOARD_NAV } from '../../../constants/buyerDashboard.js'
import { useAuth } from '../../../context/AuthContext.jsx'
import '../../../styles/buyer-dashboard.css'

export function BuyerDashboardLayout() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [copied, setCopied] = useState(false)

  const base = '/buyer/dashboard'
  const path = location.pathname.replace(base, '').replace(/^\//, '') || ''

  const copyLink = async () => {
    try {
      await navigator.clipboard?.writeText(BUYER.referralLink)
    } catch {
      // ignore
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2500)
  }

  const outletContext = useMemo(
    () => ({
      copied,
      copyLink,
    }),
    [copied],
  )

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="bd-root">
      <div className="bd-shell">
        <nav className="bd-topnav">
          <div className="bd-nav-inner">
            <div className="bd-logo">
              <div className="bd-logo-icon">🏪</div>
              <div className="bd-logo-text">
                Hasty<span>Shopping</span>
              </div>
            </div>

            <div className="bd-tabs">
              {BUYER_DASHBOARD_NAV.map((t) => {
                const to = t.path ? `${base}/${t.path}` : base
                const isActive = t.path ? path === t.path : path === ''
                return (
                  <NavLink key={t.id} to={to} end={!t.path} className={`bd-tab ${isActive ? 'active' : ''}`}>
                    <span className="bd-tab-icon">{t.icon}</span>
                    {t.label}
                  </NavLink>
                )
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="bd-profile" style={{ cursor: 'default' }} role="group" aria-label="Buyer profile">
                <div className="bd-avatar">{BUYER.avatar}</div>
                <div className="bd-profile-name">{BUYER.name}</div>
              </div>
              <button
                type="button"
                className="see-all"
                onClick={handleSignOut}
                aria-label="Sign out"
                style={{ padding: '7px 12px' }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </nav>

        <div className="bd-content">
          <Outlet context={outletContext} />
        </div>
      </div>
    </div>
  )
}

