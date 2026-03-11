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
