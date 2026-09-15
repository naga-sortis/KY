/**
 * Firebase bootstrap — Phase 3 (accounts + analytics).
 *
 * Config comes from Vite env vars (`VITE_FIREBASE_*`, see `.env.example`) so no
 * secret ever lives in source. If the app is built without them — the default
 * for anyone who clones the repo without setting up a Firebase project — every
 * export below degrades to a no-op and the app keeps working exactly as it did
 * in Phase 2.5: local-only, no sign-in, no network calls.
 */

import { type FirebaseApp, initializeApp } from 'firebase/app';
import { type Auth, GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { type Firestore, getFirestore } from 'firebase/firestore';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/** True only when every required field is present — otherwise Firebase is not initialised. */
export const firebaseEnabled = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);

let app: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let dbInstance: Firestore | null = null;

if (firebaseEnabled) {
  try {
    app = initializeApp(config);
    authInstance = getAuth(app);
    dbInstance = getFirestore(app);
  } catch {
    // Bad/partial config at runtime: fall back to local-only mode rather than crash the app.
    app = null;
    authInstance = null;
    dbInstance = null;
  }
}

export const firebaseApp = app;
export const auth = authInstance;
export const db = dbInstance;

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
