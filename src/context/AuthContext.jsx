import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firebaseAuth, firebaseDb } from '../firebase/firebase.js';

const AuthContext = createContext({
  user: null,
  profile: null,
  initializing: true,
  profileLoading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [profileLoading, setProfileLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (u) => {
      setUser(u);
      setInitializing(false);
      if (!u) {
        try {
          window.localStorage.removeItem('hs_last_role');
        } catch {
          // ignore
        }
      }
    });
    return () => unsub();
  }, []);

  // Load minimal profile (including role) from Firestore when user changes
  useEffect(() => {
    if (!user) {
      setProfile(null);
      setProfileLoading(false);
      return;
    }
    let cancelled = false;
    setProfileLoading(true);
    (async () => {
      try {
        const snap = await getDoc(doc(firebaseDb, 'users', user.uid));
        if (!cancelled) {
          setProfile(snap.exists() ? snap.data() : null);
          setProfileLoading(false);
        }
      } catch (e) {
        console.error('[AuthContext] Failed to load user profile', e);
        if (!cancelled) {
          setProfile(null);
          setProfileLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      profile,
      initializing,
      profileLoading,
      async signOut() {
        try {
          await firebaseSignOut(firebaseAuth);
          try {
            window.localStorage.removeItem('hs_last_role');
          } catch {
            // ignore
          }
        } catch (e) {
          console.error('[AuthContext] signOut failed', e);
        }
      },
    }),
    [user, profile, initializing, profileLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

