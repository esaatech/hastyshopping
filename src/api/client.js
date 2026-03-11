/**
 * Base API client – central place for all HTTP calls.
 * Use get/post/request for consistent error handling and base URL.
 */

const DEFAULT_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

/**
 * @param {string} baseUrl
 * @returns {{ get: (path: string, opts?: RequestInit) => Promise<Response>, post: (path: string, body?: unknown, opts?: RequestInit) => Promise<Response>, request: (path: string, init: RequestInit) => Promise<Response> }}
 */
export function createApi(baseUrl = DEFAULT_BASE) {
  const base = baseUrl.replace(/\/$/, '');

  /**
   * @param {string} path
   * @param {RequestInit} [opts]
   * @returns {Promise<Response>}
   */
  async function get(path, opts = {}) {
    return request(path, { ...opts, method: 'GET' });
  }

  /**
   * @param {string} path
   * @param {unknown} [body]
   * @param {RequestInit} [opts]
   * @returns {Promise<Response>}
   */
  async function post(path, body, opts = {}) {
    return request(path, {
      ...opts,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...opts.headers },
      body: body != null ? JSON.stringify(body) : undefined,
    });
  }

  /**
   * @param {string} path
   * @param {RequestInit} init
   * @returns {Promise<Response>}
   */
  async function request(path, init = {}) {
    const url = path.startsWith('http') ? path : `${base}/${path.replace(/^\//, '')}`;
    const res = await fetch(url, {
      ...init,
      headers: { Accept: 'application/json', ...init.headers },
    });
    if (!res.ok) {
      const err = new Error(res.statusText || `HTTP ${res.status}`);
      err.status = res.status;
      err.response = res;
      throw err;
    }
    return res;
  }

  return { get, post, request };
}

/** Default API instance for app use */
export const api = createApi();
