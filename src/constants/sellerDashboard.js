/** Shared mock data and helpers for seller dashboard */

export const REVENUE_DATA = [
  { month: 'Oct', revenue: 420000, orders: 38 },
  { month: 'Nov', revenue: 680000, orders: 61 },
  { month: 'Dec', revenue: 890000, orders: 84 },
  { month: 'Jan', revenue: 740000, orders: 67 },
  { month: 'Feb', revenue: 960000, orders: 91 },
  { month: 'Mar', revenue: 1240000, orders: 118 },
]

export const ORDERS = [
  { id: 'HS-4821', buyer: 'Adaeze O.', location: 'Toronto, ON', product: 'Ogbono & Uziza Mix', amount: 18500, status: 'Delivered', date: 'Mar 10', whatsapp: '+2348012345678' },
  { id: 'HS-4820', buyer: 'Emeka N.', location: 'Vancouver, BC', product: 'Jollof Spice Pack', amount: 12000, status: 'Shipped', date: 'Mar 10', whatsapp: '+2348023456789' },
  { id: 'HS-4819', buyer: 'Blessing A.', location: 'Calgary, AB', product: 'Stockfish Bundle', amount: 34500, status: 'Processing', date: 'Mar 09', whatsapp: '+2348034567890' },
  { id: 'HS-4818', buyer: 'Chidinma E.', location: 'Ottawa, ON', product: 'Crayfish & Ede', amount: 9800, status: 'Pending', date: 'Mar 09', whatsapp: '+2348045678901' },
  { id: 'HS-4817', buyer: 'Tunde F.', location: 'Winnipeg, MB', product: 'Pepper Soup Mix', amount: 7500, status: 'Delivered', date: 'Mar 08', whatsapp: '+2348056789012' },
  { id: 'HS-4816', buyer: 'Ngozi C.', location: 'Montreal, QC', product: 'Ogbono 1kg', amount: 22000, status: 'Disputed', date: 'Mar 07', whatsapp: '+2348067890123' },
]

export const PRODUCTS = [
  { id: 1, name: 'Ogbono & Uziza Mix', category: 'Food & Spices', price: 18500, stock: 42, sold: 184, status: 'Active', icon: '🫙' },
  { id: 2, name: 'Jollof Spice Pack', category: 'Food & Spices', price: 12000, stock: 78, sold: 312, status: 'Active', icon: '🌶️' },
  { id: 3, name: 'Stockfish Bundle', category: 'Groceries', price: 34500, stock: 15, sold: 67, status: 'Active', icon: '🐟' },
  { id: 4, name: 'Crayfish & Ede Pack', category: 'Food & Spices', price: 9800, stock: 0, sold: 201, status: 'Out of Stock', icon: '🦐' },
  { id: 5, name: 'Pepper Soup Mix', category: 'Food & Spices', price: 7500, stock: 93, sold: 445, status: 'Active', icon: '🍲' },
  { id: 6, name: 'Ogbono 1kg Premium', category: 'Food & Spices', price: 22000, stock: 8, sold: 89, status: 'Low Stock', icon: '🫙' },
]

export const REVIEWS = [
  { id: 1, buyer: 'Adaeze O.', avatar: '👩🏾', rating: 5, date: 'Mar 10', product: 'Ogbono & Uziza Mix', comment: 'Exactly like what I get from home! The quality is amazing, arrived well packaged. Will definitely order again.', replied: false },
  { id: 2, buyer: 'Emeka N.', avatar: '👨🏿', rating: 5, date: 'Mar 08', product: 'Jollof Spice Pack', comment: 'My wife was very happy! The spice mix is authentic and the aroma is perfect. Fast shipping too.', replied: true },
  { id: 3, buyer: 'Blessing A.', avatar: '👩🏿', rating: 4, date: 'Mar 05', product: 'Stockfish Bundle', comment: 'Good quality stockfish. Packaging was solid. Took 12 days which is fine for international shipping.', replied: false },
  { id: 4, buyer: 'Tunde F.', avatar: '👨🏾', rating: 5, date: 'Feb 28', product: 'Pepper Soup Mix', comment: 'Fantastic product! Bought for my brother\'s birthday party and everyone loved the pepper soup.', replied: true },
]

export const PAYOUTS = [
  { id: 'PO-221', date: 'Mar 01', amount: 840000, status: 'Paid', method: 'Bank Transfer' },
  { id: 'PO-198', date: 'Feb 01', amount: 720000, status: 'Paid', method: 'Bank Transfer' },
  { id: 'PO-174', date: 'Jan 01', amount: 560000, status: 'Paid', method: 'Bank Transfer' },
  { id: 'PO-151', date: 'Dec 01', amount: 890000, status: 'Paid', method: 'Bank Transfer' },
]

export const STATUS_COLORS = {
  Delivered: { bg: 'rgba(22,196,98,0.12)', border: 'rgba(22,196,98,0.3)', color: '#16c462' },
  Shipped: { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)', color: '#60a5fa' },
  Processing: { bg: 'rgba(245,166,35,0.12)', border: 'rgba(245,166,35,0.3)', color: '#f5a623' },
  Pending: { bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' },
  Disputed: { bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.3)', color: '#f87171' },
  Paid: { bg: 'rgba(22,196,98,0.12)', border: 'rgba(22,196,98,0.3)', color: '#16c462' },
}

export const SELLER_DASHBOARD_NAV = [
  { id: 'overview', path: '', icon: '📊', label: 'Overview' },
  { id: 'orders', path: 'orders', icon: '📦', label: 'Orders' },
  { id: 'products', path: 'products', icon: '🛍️', label: 'Products' },
  { id: 'earnings', path: 'earnings', icon: '💰', label: 'Earnings' },
  { id: 'reviews', path: 'reviews', icon: '⭐', label: 'Reviews' },
  { id: 'settings', path: 'settings', icon: '⚙️', label: 'Settings' },
]

export const fmt = (n) => '₦' + Number(n).toLocaleString('en-NG')
