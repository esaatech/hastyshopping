/**
 * Signup page state – step, form, errors, loading, done.
 * Uses signup API from endpoints when submitting final step.
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { buyerSignup, buyerLoginWithGoogle, mapAuthError } from '../api/firebaseAuth.js';
import { SIGNUP_STEPS } from '../constants/signup.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  fullName: '',
  email: '',
  password: '',
  city: '',
  province: '',
  postalCode: '',
  categories: [],
};

export function useSignupState() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const update = useCallback((key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
  }, []);

  const toggleCat = useCallback((cat) => {
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));
  }, []);

  const validateStep0 = useCallback(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Name is required';
    if (!EMAIL_REGEX.test(form.email)) e.email = 'Valid email required';
    if (form.password.length < 8) e.password = 'Min 8 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.fullName, form.email, form.password]);

  const validateStep1 = useCallback(() => {
    const e = {};
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.province) e.province = 'Province is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.city, form.province]);

  const nextStep = useCallback(async () => {
    if (step === 0 && !validateStep0()) return;
    if (step === 1 && !validateStep1()) return;
    if (step === 2) {
      setLoading(true);
      setSubmitError('');
      try {
        await buyerSignup(form);
        setDone(true);
      } catch (e) {
        setSubmitError(mapAuthError(e));
      } finally {
        setLoading(false);
      }
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  }, [step, form, validateStep0, validateStep1]);

  const handleGoogleSignup = useCallback(async () => {
    setSubmitError('');
    setLoading(true);
    try {
      await buyerLoginWithGoogle();
      navigate('/');
    } catch (e) {
      setSubmitError(mapAuthError(e));
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const goBack = useCallback(() => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
  }, []);

  return {
    step,
    loaded,
    showPassword,
    setShowPassword,
    loading,
    done,
    form,
    update,
    toggleCat,
    errors,
    submitError,
    nextStep,
    goBack,
    steps: SIGNUP_STEPS,
    handleGoogleSignup,
  };
}
