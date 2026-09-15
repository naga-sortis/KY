/**
 * Phase 3 — real sign-in (Google / GitHub via Firebase Auth).
 *
 * This sits alongside, not instead of, the local-only flow: KY still runs a
 * full audit with no account. Signing in only unlocks cross-device history
 * (see lib/cloud.ts) — it never gates the audit itself.
 */

import {
  type User,
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { auth, firebaseEnabled, githubProvider, googleProvider } from './firebase';

export type AuthProviderId = 'google' | 'github';

export interface CurrentUser {
  uid: string;
  name: string;
  email: string | null;
  photoUrl: string | null;
  provider: string;
}

function toCurrentUser(u: User): CurrentUser {
  return {
    uid: u.uid,
    name: u.displayName || u.email || 'Signed in',
    email: u.email,
    photoUrl: u.photoURL,
    provider: u.providerData[0]?.providerId ?? 'unknown',
  };
}

/** True when a Firebase project is actually configured for this build. */
export function authAvailable(): boolean {
  return firebaseEnabled && auth !== null;
}

/** Subscribe to sign-in state. No-ops immediately with `null` when Firebase isn't configured. */
export function watchAuth(cb: (user: CurrentUser | null) => void): () => void {
  if (!auth) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(auth, (u) => cb(u ? toCurrentUser(u) : null));
}

async function signInPopupOrRedirect(provider: typeof googleProvider | typeof githubProvider): Promise<void> {
  if (!auth) throw new Error('Sign-in is not configured for this build.');
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    const code = (err as { code?: string }).code ?? '';
    // Popups are blocked in some embedded / mobile browsers — fall back to a full redirect.
    if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
      await signInWithRedirect(auth, provider);
      return;
    }
    if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
    throw err;
  }
}

export function signInWithGoogle(): Promise<void> {
  return signInPopupOrRedirect(googleProvider);
}

export function signInWithGitHub(): Promise<void> {
  return signInPopupOrRedirect(githubProvider);
}

/** Completes a signInWithRedirect() round trip, if one is in flight. Safe to call unconditionally on load. */
export async function completeRedirectSignIn(): Promise<void> {
  if (!auth) return;
  try {
    await getRedirectResult(auth);
  } catch {
    // Ignore — surfaced to the user via the normal signed-out state.
  }
}

export function signOutUser(): Promise<void> {
  if (!auth) return Promise.resolve();
  return signOut(auth);
}
