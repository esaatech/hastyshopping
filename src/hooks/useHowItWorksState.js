/**
 * How It Works section state – active step, loaded, autoplay.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { STEPS } from '../constants/howItWorks.js';

const AUTOPLAY_INTERVAL_MS = 3000;
const LOADED_DELAY_MS = 100;

/**
 * @returns {{
 *   activeStep: number,
 *   setActiveStep: (n: number) => void,
 *   loaded: boolean,
 *   autoPlay: boolean,
 *   setAutoPlay: (v: boolean) => void,
 *   handleStepClick: (i: number) => void,
 *   step: import('../types/howItWorks.js').HowItWorksStep,
 *   steps: import('../types/howItWorks.js').HowItWorksStep[],
 * }}
 */
export function useHowItWorksState() {
  const [activeStep, setActiveStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), LOADED_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  const handleStepClick = useCallback((i) => {
    setActiveStep(i);
    setAutoPlay(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  return {
    activeStep,
    setActiveStep,
    loaded,
    autoPlay,
    setAutoPlay,
    handleStepClick,
    step: STEPS[activeStep],
    steps: STEPS,
  };
}
