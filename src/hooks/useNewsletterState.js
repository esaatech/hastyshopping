/**
 * Newsletter section state – email, submitted, loaded.
 */

import { useState, useEffect, useCallback } from 'react';

const LOADED_DELAY_MS = 100;

/**
 * @returns {{
 *   email: string,
 *   setEmail: (s: string) => void,
 *   submitted: boolean,
 *   loaded: boolean,
 *   handleSubmit: () => void,
 * }}
 */
export function useNewsletterState() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), LOADED_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = useCallback(() => {
    if (email.trim().includes('@')) setSubmitted(true);
  }, [email]);

  return { email, setEmail, submitted, loaded, handleSubmit };
}
