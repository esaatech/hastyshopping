/**
 * Hero section constants – categories, floating items, stats, featured seller.
 */

/** @type {string[]} */
export const CATEGORIES = [
  'Food & Spices',
  'Fashion & Fabric',
  'Beauty',
  'Electronics',
  'Groceries',
  'Jewelry',
];

/** @type {import('../types/hero.js').FloatingItem[]} */
export const FLOATING_ITEMS = [
  { emoji: '🫙', label: 'Ogbono', top: '12%', left: '8%', delay: 0 },
  { emoji: '👗', label: 'Ankara', top: '20%', right: '7%', delay: 0.4 },
  { emoji: '🌶️', label: 'Peppers', top: '55%', left: '5%', delay: 0.8 },
  { emoji: '💄', label: 'Skincare', top: '70%', right: '8%', delay: 0.2 },
  { emoji: '🫘', label: 'Beans', bottom: '20%', left: '12%', delay: 1 },
  { emoji: '🧴', label: 'Shea Butter', top: '38%', right: '4%', delay: 0.6 },
];

/** @type {import('../types/hero.js').StatItem[]} */
export const STATS = [
  { value: '2,400+', label: 'Verified Sellers' },
  { value: '18K+', label: 'Orders Delivered' },
  { value: '3', label: 'Countries Served' },
];

/** @type {import('../types/hero.js').Seller} */
export const FEATURED_SELLER = {
  name: "Mama Chukwu's Store",
  location: '📍 Lagos, Nigeria · ⭐ 4.9 (312 reviews)',
  badge: '✓ Verified',
  avatarEmoji: '🏪',
  products: [
    { emoji: '🫙', name: 'Ogbono Soup', price: '₦2,400' },
    { emoji: '🌶️', name: 'Pepper Mix', price: '₦1,800' },
    { emoji: '🫘', name: 'Black Beans', price: '₦3,200' },
    { emoji: '🥜', name: 'Groundnut', price: '₦1,500' },
    { emoji: '🌿', name: 'Uziza Leaf', price: '₦900' },
    { emoji: '🧅', name: 'Onion Set', price: '₦2,100' },
  ],
  delivery: { text: 'Ships to Canada', days: '7–14 days' },
};

/** @type {import('../types/hero.js').MiniStatCard[]} */
export const MINI_STATS = [
  { value: '98%', label: 'Delivery Success', icon: '🚚' },
  { value: 'Secure', label: 'Buyer Protection', icon: '🔒' },
];

export const NAV_LINKS = ['Browse Sellers', 'Categories', 'How It Works', 'About'];
