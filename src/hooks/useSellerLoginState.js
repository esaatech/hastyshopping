/**
 * Seller login page state – email, password, loading, error.
 */

import { useState, useEffect, useCallback } from 'react';
import { sellerLogin } from '../api/endpoints.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useSellerLoginState() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await sellerLogin({ email, password });
      // TODO: set seller auth state / redirect to seller dashboard
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    loading,
    error,
    loaded,
    handleLogin,
  };
}
