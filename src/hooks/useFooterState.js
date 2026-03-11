/**
 * Footer – loaded state for entrance animations.
 */

import { useState, useEffect } from 'react';

const LOADED_DELAY_MS = 100;

/**
 * @returns {{ loaded: boolean }}
 */
export function useFooterState() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), LOADED_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  return { loaded };
}
