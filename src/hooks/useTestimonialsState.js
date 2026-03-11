/**
 * Testimonials section state – active index, loaded, paused (autoplay).
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { TESTIMONIALS } from '../constants/testimonials.js';

const ROTATE_INTERVAL_MS = 4000;
const LOADED_DELAY_MS = 100;

/**
 * @returns {{
 *   active: number,
 *   setActive: (n: number) => void,
 *   loaded: boolean,
 *   paused: boolean,
 *   setPaused: (v: boolean) => void,
 *   handleSelect: (i: number) => void,
 *   featured: import('../types/testimonials.js').Testimonial,
 *   testimonials: import('../types/testimonials.js').Testimonial[],
 * }}
 */
export function useTestimonialsState() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), LOADED_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const handleSelect = useCallback((i) => {
    setActive(i);
    setPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  return {
    active,
    setActive,
    loaded,
    paused,
    setPaused,
    handleSelect,
    featured: TESTIMONIALS[active],
    testimonials: TESTIMONIALS,
  };
}
