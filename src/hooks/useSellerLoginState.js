/**
 * Seller login page state – email, password, loading, error.
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { mapAuthError, sellerLoginFirebase, sellerLoginWithGoogle } from '../api/firebaseAuth.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useSellerLoginState() {
  const navigate = useNavigate();
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
      await sellerLoginFirebase({ email, password });
      navigate('/seller/dashboard');
    } catch (e) {
      setError(mapAuthError(e));
    } finally {
      setLoading(false);
    }
  }, [email, password, navigate]);

  const handleGoogleLogin = useCallback(async () => {
    setError('');
    setLoading(true);
    try {
      await sellerLoginWithGoogle();
      navigate('/seller/dashboard');
    } catch (e) {
      setError(mapAuthError(e));
    } finally {
      setLoading(false);
    }
  }, [navigate]);

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
    handleGoogleLogin,
  };
}
