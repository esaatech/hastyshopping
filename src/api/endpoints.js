/**
 * API endpoints – all server calls go through here.
 * Each function uses the shared api client and returns typed data (see types).
 */

import { api } from './client.js';

/**
 * Fetch categories (for when backend exists). For now returns static list.
 * @returns {Promise<string[]>}
 */
export async function getCategories() {
  try {
    const res = await api.get('categories');
    const data = await res.json();
    return Array.isArray(data) ? data : data?.items ?? [];
  } catch {
    return [];
  }
}

/**
 * Fetch platform stats (for when backend exists). For now returns static list.
 * @returns {Promise<Array<{ value: string, label: string }>>}
 */
export async function getStats() {
  try {
    const res = await api.get('stats');
    const data = await res.json();
    return Array.isArray(data) ? data : data?.items ?? [];
  } catch {
    return [];
  }
}

/**
 * Search sellers/products (for when backend exists).
 * @param {string} query
 * @returns {Promise<{ sellers: unknown[], products: unknown[] }>}
 */
export async function searchSellers(query) {
  if (!query?.trim()) return { sellers: [], products: [] };
  try {
    const res = await api.get(`search?q=${encodeURIComponent(query.trim())}`);
    const data = await res.json();
    return {
      sellers: data?.sellers ?? [],
      products: data?.products ?? [],
    };
  } catch {
    return { sellers: [], products: [] };
  }
}

/**
 * Sign up (for when backend exists). Placeholder – replace with real API.
 * @param {import('../types/auth.js').SignupForm} body
 * @returns {Promise<{ ok: boolean }>}
 */
export async function signup(body) {
  // TODO: api.post('auth/signup', body);
  await new Promise((r) => setTimeout(r, 2000));
  return { ok: true };
}

/**
 * Log in (for when backend exists). Placeholder – replace with real API.
 * @param {{ email: string, password: string }} body
 * @returns {Promise<{ ok: boolean }>}
 */
export async function login(body) {
  // TODO: api.post('auth/login', body);
  await new Promise((r) => setTimeout(r, 2000));
  return { ok: true };
}

/**
 * Seller login. Placeholder – replace with real API.
 * @param {{ email: string, password: string }} body
 * @returns {Promise<{ ok: boolean }>}
 */
export async function sellerLogin(body) {
  // TODO: api.post('seller/auth/login', body);
  await new Promise((r) => setTimeout(r, 2000));
  return { ok: true };
}

/**
 * Seller signup/apply. Placeholder – replace with real API.
 * @param {import('../types/seller.js').SellerSignupForm} body
 * @returns {Promise<{ ok: boolean }>}
 */
export async function sellerSignup(body) {
  // TODO: api.post('seller/auth/signup', body);
  await new Promise((r) => setTimeout(r, 2200));
  return { ok: true };
}
