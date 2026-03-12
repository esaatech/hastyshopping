/**
 * Firebase-backed auth API adapter.
 *
 * This keeps our hooks calling a single "API layer" today,
 * while letting us swap implementations later (Django backend).
 */

import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firebaseAuth, firebaseDb } from '../firebase/firebase.js';

let persistenceReady = false;

async function ensurePersistence() {
  if (persistenceReady) return;
  await setPersistence(firebaseAuth, browserLocalPersistence);
  persistenceReady = true;
}

function mapAuthError(err) {
  const code = err?.code || '';
  if (code === 'auth/invalid-credential') return 'Invalid email or password.';
  if (code === 'auth/user-not-found') return 'No account found with this email.';
  if (code === 'auth/wrong-password') return 'Invalid email or password.';
  if (code === 'auth/email-already-in-use') return 'This email is already in use.';
  if (code === 'auth/weak-password') return 'Password is too weak.';
  if (code === 'auth/popup-closed-by-user') return 'Google sign-in was cancelled.';
  return err?.message || 'Something went wrong. Please try again.';
}

/**
 * Buyer email/password signup.
 * @param {import('../types/auth.js').SignupForm} body
 */
export async function buyerSignup(body) {
  await ensurePersistence();
  const cred = await createUserWithEmailAndPassword(firebaseAuth, body.email, body.password);
  if (body.fullName?.trim()) {
    await updateProfile(cred.user, { displayName: body.fullName.trim() });
  }
  // Optional profile doc (useful now; aligns with future Django shape)
  await setDoc(
    doc(firebaseDb, 'users', cred.user.uid),
    {
      role: 'buyer',
      fullName: body.fullName || '',
      email: body.email,
      city: body.city || '',
      province: body.province || '',
      postalCode: body.postalCode || '',
      categories: Array.isArray(body.categories) ? body.categories : [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { ok: true, uid: cred.user.uid };
}

/**
 * Buyer email/password login.
 * @param {{ email: string, password: string }} body
 */
export async function buyerLogin(body) {
  await ensurePersistence();
  const cred = await signInWithEmailAndPassword(firebaseAuth, body.email, body.password);
  return { ok: true, uid: cred.user.uid };
}

export async function buyerLoginWithGoogle() {
  await ensurePersistence();
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(firebaseAuth, provider);
  await setDoc(
    doc(firebaseDb, 'users', cred.user.uid),
    {
      role: 'buyer',
      fullName: cred.user.displayName || '',
      email: cred.user.email || '',
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { ok: true, uid: cred.user.uid };
}

/**
 * Seller email/password login.
 * @param {{ email: string, password: string }} body
 */
export async function sellerLoginFirebase(body) {
  await ensurePersistence();
  const cred = await signInWithEmailAndPassword(firebaseAuth, body.email, body.password);
  return { ok: true, uid: cred.user.uid };
}

export async function sellerLoginWithGoogle() {
  await ensurePersistence();
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(firebaseAuth, provider);
  await setDoc(
    doc(firebaseDb, 'users', cred.user.uid),
    {
      role: 'seller',
      fullName: cred.user.displayName || '',
      email: cred.user.email || '',
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { ok: true, uid: cred.user.uid };
}

/**
 * Seller signup/apply. Creates auth user and stores application details in Firestore.
 * If Firestore is not set up or write fails, we still succeed (auth user exists) and log the error.
 * @param {import('../types/seller.js').SellerSignupForm} body
 */
export async function sellerSignupFirebase(body) {
  await ensurePersistence();
  const cred = await createUserWithEmailAndPassword(firebaseAuth, body.email, body.password);
  if (body.fullName?.trim()) {
    await updateProfile(cred.user, { displayName: body.fullName.trim() });
  }

  try {
    await setDoc(
      doc(firebaseDb, 'sellerApplications', cred.user.uid),
      {
        uid: cred.user.uid,
        fullName: body.fullName || '',
        email: body.email,
        storeName: body.storeName || '',
        whatsapp: body.whatsapp || '',
        storeDesc: body.storeDesc || '',
        state: body.state || '',
        city: body.city || '',
        categories: Array.isArray(body.categories) ? body.categories : [],
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
    await setDoc(
      doc(firebaseDb, 'users', cred.user.uid),
      {
        role: 'seller',
        fullName: body.fullName || '',
        email: body.email,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      },
      { merge: true },
    );
  } catch (firestoreErr) {
    // Auth user is already created; Firestore may be missing or rules blocking. Log and continue.
    console.error('[Seller signup] Firestore write failed (account was created):', firestoreErr);
  }

  return { ok: true, uid: cred.user.uid };
}

export { mapAuthError };

