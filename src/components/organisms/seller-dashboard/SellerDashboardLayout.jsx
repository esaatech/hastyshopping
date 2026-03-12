import { useState } from 'react'
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SELLER_DASHBOARD_NAV } from '../../../constants/sellerDashboard.js'
import '../../../styles/seller-dashboard.css'
import { useAuth } from '../../../context/AuthContext.jsx'

export function SellerDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const base = '/seller/dashboard'
  const path = location.pathname.replace(base, '').replace(/^\//, '') || ''
  const currentNav = SELLER_DASHBOARD_NAV.find((n) => (n.path ? n.path === path : !path)) || SELLER_DASHBOARD_NAV[0]

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <div className="sd-shell">
      <aside className={`sd-sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
        <div className="sd-logo-row">
          <div className="sd-logo-icon">🏪</div>
          {sidebarOpen && (
            <div className="sd-logo-text">
              Hasty<span>Shopping</span>
            </div>
          )}
        </div>

        {sidebarOpen && (
          <div className="sd-seller-info">
            <div className="sd-seller-chip">
              <div className="sd-seller-avatar">👩🏾</div>
              <div>
                <div className="sd-seller-name">Mama Chukwu&apos;s Kitchen</div>
                <div className="sd-seller-badge">🟡 Seller Portal</div>
              </div>
            </div>
          </div>
        )}

        <nav className="sd-nav">
          {SELLER_DASHBOARD_NAV.map((n) => {
            const to = n.path ? `${base}/${n.path}` : base
            return (
              <NavLink
                key={n.id}
                to={to}
                end={!n.path}
                className={({ isActive }) => `sd-nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="sd-nav-icon">{n.icon}</span>
                {sidebarOpen && <span className="sd-nav-label">{n.label}</span>}
              </NavLink>
            )
          })}
        </nav>

        <div className="sd-collapse-btn">
          <button
            type="button"
            className="sd-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
      </aside>

      <div className="sd-main">
        <header className="sd-topbar">
          <h1 className="sd-page-title">
            {currentNav.icon} {currentNav.label}
          </h1>
          <div className="sd-topbar-right">
            <div className="sd-icon-btn" role="button" tabIndex={0} aria-label="Notifications">
              🔔<div className="notif-dot" />
            </div>
            <button type="button" className="sd-icon-btn" aria-label="Help">
              ❓
            </button>
            <button type="button" className="sd-profile-btn" onClick={handleSignOut}>
              <div className="sd-profile-avatar">👩🏾</div>
              <div className="sd-profile-name">Sign Out</div>
            </button>
          </div>
        </header>

        <div className="sd-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
