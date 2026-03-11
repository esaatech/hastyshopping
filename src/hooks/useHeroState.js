/**
 * Hero section state – categories, search, loaded, particles.
 * Single hook so the hero has one source of truth.
 */

import { useState, useEffect, useCallback } from 'react';
import { CATEGORIES } from '../constants/hero.js';

const CATEGORY_ROTATE_MS = 2200;
const PARTICLE_COUNT = 28;

/**
 * @returns {{
 *   activeCategory: number,
 *   setActiveCategory: (n: number) => void,
 *   searchValue: string,
 *   setSearchValue: (s: string) => void,
 *   loaded: boolean,
 *   particles: Array<{ id: number, x: number, y: number, size: number, opacity: number, duration: number, delay: number }>,
 * }}
 */
export function useHeroState() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setLoaded(true);
    const id = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % CATEGORIES.length);
    }, CATEGORY_ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const list = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    }));
    setParticles(list);
  }, []);

  const setCategory = useCallback((index) => {
    setActiveCategory(Number(index));
  }, []);

  return {
    activeCategory,
    setActiveCategory: setCategory,
    searchValue,
    setSearchValue,
    loaded,
    particles,
  };
}
