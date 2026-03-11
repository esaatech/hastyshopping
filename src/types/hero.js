/**
 * Hero section & UI shape definitions.
 * Use these in JSDoc for components and hooks.
 */

/**
 * @typedef {Object} StatItem
 * @property {string} value
 * @property {string} label
 */

/**
 * @typedef {Object} FloatingItem
 * @property {string} emoji
 * @property {string} label
 * @property {string} [top]
 * @property {string} [bottom]
 * @property {string} [left]
 * @property {string} [right]
 * @property {number} [delay]
 */

/**
 * @typedef {Object} Particle
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {number} size
 * @property {number} opacity
 * @property {number} duration
 * @property {number} delay
 */

/**
 * @typedef {Object} Product
 * @property {string} emoji
 * @property {string} name
 * @property {string} price
 */

/**
 * @typedef {Object} Seller
 * @property {string} name
 * @property {string} location
 * @property {string} [badge]
 * @property {string} [avatarEmoji]
 * @property {Product[]} products
 * @property {{ text: string, days?: string }} [delivery]
 */

/**
 * @typedef {Object} MiniStatCard
 * @property {string} value
 * @property {string} label
 * @property {string} [icon]
 */

export const HERO_TYPES = true;
