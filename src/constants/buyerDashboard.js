/** Shared mock data and helpers for buyer dashboard */

export const BUYER = {
  name: 'Adaeze',
  fullName: 'Adaeze Okonkwo',
  email: 'adaeze.o@gmail.com',
  avatar: '👩🏾',
  location: 'Toronto, ON',
  province: 'Ontario',
  referralCode: 'ADAEZE-HS24',
  referralLink: 'https://hastyshopping.com/invite/ADAEZE-HS24',
  referralCount: 3,
  referralCredits: 4500,
}

export const ORDERS = [
  {
    id: 'HS-4821',
    seller: "Mama Chukwu's Kitchen",
    sellerAvatar: '👩🏾',
    sellerWA: '+2348012345678',
    items: ['Ogbono & Uziza Mix', 'Crayfish Pack'],
    total: 18500,
    status: 'In Transit',
    trackingStep: 3,
    date: 'Mar 8, 2026',
    eta: 'Mar 18–22',
    flags: '🇳🇬→🇨🇦',
  },
  {
    id: 'HS-4780',
    seller: 'Abuja Naturals',
    sellerAvatar: '👨🏿',
    sellerWA: '+2348099887766',
    items: ['Shea Butter 500g', 'Black Soap Bundle'],
    total: 27000,
    status: 'Delivered',
    trackingStep: 5,
    date: 'Feb 20, 2026',
    eta: 'Delivered Mar 3',
    flags: '🇳🇬→🇨🇦',
  },
  {
    id: 'HS-4710',
    seller: 'Kano Craft Market',
    sellerAvatar: '👩🏾',
    sellerWA: '+2348055443322',
    items: ['Leather Sandals', 'Woven Basket'],
    total: 42000,
    status: 'Delivered',
    trackingStep: 5,
    date: 'Feb 1, 2026',
    eta: 'Delivered Feb 16',
    flags: '🇳🇬→🇨🇦',
  },
]

export const SAVED_SELLERS = [
  { id: 1, name: "Mama Chukwu's Kitchen", category: 'Food & Spices', avatar: '👩🏾', city: 'Lagos', rating: 4.9, orders: 12 },
  { id: 2, name: 'Eko Fashion House', category: 'Fashion & Fabric', avatar: '👗', city: 'Lagos', rating: 4.8, orders: 3 },
  { id: 3, name: 'Abuja Naturals', category: 'Beauty & Wellness', avatar: '🌿', city: 'Abuja', rating: 4.7, orders: 5 },
  { id: 4, name: 'Port Harcourt Gadgets', category: 'Electronics', avatar: '📱', city: 'PH', rating: 4.6, orders: 1 },
]

export const TRACKING_STEPS = [
  { label: 'Order Placed', icon: '📋', desc: 'Your order was confirmed' },
  { label: 'Seller Preparing', icon: '📦', desc: 'Seller is packing your items' },
  { label: 'In Transit', icon: '✈️', desc: 'Your order is on its way to Canada' },
  { label: 'Arrived Canada', icon: '🛬', desc: 'Package cleared customs' },
  { label: 'Delivered', icon: '✅', desc: 'Delivered to your address' },
]

export const REFERRALS = [
  { name: 'Chinyere B.', joined: 'Feb 2026', status: 'Ordered', credit: 1500 },
  { name: 'Tolu A.', joined: 'Jan 2026', status: 'Ordered', credit: 1500 },
  { name: 'Ngozi M.', joined: 'Mar 2026', status: 'Signed Up', credit: 1500 },
]

export const ADDRESSES = [
  { id: 1, label: 'Home', line1: '42 Yonge Street, Apt 8B', city: 'Toronto', province: 'ON', postal: 'M5C 1Y2', isDefault: true },
  { id: 2, label: 'Work', line1: '200 Bay Street', city: 'Toronto', province: 'ON', postal: 'M5J 2W4', isDefault: false },
]

export const BUYER_DASHBOARD_NAV = [
  { id: 'home', path: '', label: 'Home', icon: '🏠' },
  { id: 'orders', path: 'orders', label: 'My Orders', icon: '📦' },
  { id: 'saved', path: 'saved', label: 'Saved Sellers', icon: '❤️' },
  { id: 'referral', path: 'referral', label: 'Invite & Earn', icon: '🎁' },
  { id: 'addresses', path: 'addresses', label: 'Addresses', icon: '📍' },
  { id: 'settings', path: 'settings', label: 'Settings', icon: '⚙️' },
]

export const fmt = (n) => '₦' + Number(n).toLocaleString('en-NG')
export const fmtCAD = (n) => '≈ CA$' + (Number(n) / 1100).toFixed(0)

