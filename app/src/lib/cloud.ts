/**
 * Phase 3 — Firestore: aggregate usage analytics + cross-device audit sync.
 *
 * Local storage (lib/store.ts) stays the source of truth for the current
 * browser and the only thing that works with no Firebase project configured.
 * Everything here is additive and best-effort: a write failure here never
 * blocks or corrupts the local flow, it's just not synced this time.
 *
 * Privacy: analytics_events never carries resume/profile text, only the
 * numbers already shown in the UI (score, industry, mode). Per-user audit
 * documents mirror exactly what's already saved locally and are only
 * readable by that user (see firestore.rules).
 */

import { addDoc, collection, doc, getDocs, limit, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import type { StoredAudit } from './store';

export type AnalyticsEvent = 'audit_run' | 'audit_saved' | 'resume_uploaded' | 'sign_in';

/** Fire-and-forget analytics write. No-ops silently when Firebase isn't configured. */
export function logEvent(type: AnalyticsEvent, data: Record<string, string | number | boolean> = {}): void {
  if (!db) return;
  addDoc(collection(db, 'analytics_events'), {
    type,
    ...data,
    createdAt: serverTimestamp(),
  }).catch(() => {
    /* analytics are best-effort */
  });
}

/** Mirrors a saved local audit into the signed-in user's cloud history. No-ops when signed out or unconfigured. */
export function syncAuditToCloud(audit: StoredAudit): Promise<void> {
  const uid = auth?.currentUser?.uid;
  if (!db || !uid) return Promise.resolve();
  return setDoc(doc(db, 'users', uid, 'audits', audit.id), audit).catch(() => {
    /* best-effort */
  });
}

/** Fetches a signed-in user's cloud audit history (most recent first), for merging into local storage after sign-in. */
export async function pullCloudAudits(uid: string): Promise<StoredAudit[]> {
  if (!db) return [];
  try {
    const snap = await getDocs(query(collection(db, 'users', uid, 'audits'), orderBy('createdAt', 'desc'), limit(60)));
    return snap.docs.map((d) => d.data() as StoredAudit);
  } catch {
    return [];
  }
}
