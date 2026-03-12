/**
 * Seller signup page state – step, form, validation, submit.
 */

import { useState, useEffect, useCallback } from 'react';
import { mapAuthError, sellerSignupFirebase } from '../api/firebaseAuth.js';
import { SELLER_SIGNUP_STEPS } from '../constants/sellerSignup.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = {
  fullName: '',
  email: '',
  password: '',
  storeName: '',
  whatsapp: '',
  storeDesc: '',
  state: '',
  city: '',
  categories: [],
};

export function useSellerSignupState() {
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const update = useCallback((k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
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
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!EMAIL_REGEX.test(form.email)) e.email = 'Valid email required';
    if (form.password.length < 8) e.password = 'Minimum 8 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.fullName, form.email, form.password]);

  const validateStep1 = useCallback(() => {
    const e = {};
    if (!form.storeName.trim()) e.storeName = 'Store name is required';
    if (!form.whatsapp.trim()) e.whatsapp = 'WhatsApp number is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.storeName, form.whatsapp]);

  const validateStep2 = useCallback(() => {
    const e = {};
    if (!form.state) e.state = 'Please select your state';
    if (!form.city.trim()) e.city = 'City is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.state, form.city]);

  const validateStep3 = useCallback(() => {
    const e = {};
    if (form.categories.length === 0) e.categories = 'Select at least one category';
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [form.categories]);

  const nextStep = useCallback(async () => {
    const ok = [
      validateStep0,
      validateStep1,
      validateStep2,
      validateStep3,
    ][step]();
    if (!ok) return;
    if (step === SELLER_SIGNUP_STEPS.length - 1) {
      setLoading(true);
      setSubmitError('');
      try {
        await sellerSignupFirebase(form);
        setDone(true);
      } catch (e) {
        console.error('[Seller signup]', e);
        setSubmitError(e?.message || mapAuthError(e));
      } finally {
        setLoading(false);
      }
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  }, [step, form, validateStep0, validateStep1, validateStep2, validateStep3]);

  const goBack = useCallback(() => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
  }, []);

  return {
    step,
    loaded,
    loading,
    done,
    showPassword,
    setShowPassword,
    form,
    update,
    toggleCat,
    errors,
    submitError,
    nextStep,
    goBack,
    steps: SELLER_SIGNUP_STEPS,
  };
}
