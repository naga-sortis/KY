import { icon } from '../components/icons';
import { authAvailable } from '../lib/auth';

/**
 * Pro plan preview.
 *
 * Deliberately honest: billing is not connected, so nothing here pretends to
 * charge anyone. "Pro" simply unlocks the tracking features that already run
 * locally. Real accounts (Google/GitHub sign-in) live in the header — this
 * modal no longer fakes one.
 */

const PRO_FEATURES = [
  'Score history with a trend line across every run',
  'Keyword tracking — alerts when a term drops off your profile',
  '"What changed since your last audit" diff on each report',
  'Unlimited saved audits, plus CSV and JSON export',
];

const NOT_INCLUDED = [
  'Weekly automated re-audits and email alerts',
  'Stripe billing — no payment provider is connected',
  'Team and agency features (Phase 4)',
];

export function openPlanModal(): void {
  const el = document.createElement('div');
  el.id = 'plan-modal';
  el.className = 'fixed inset-0 z-50 grid place-items-center bg-ink/60 p-4 backdrop-blur-sm';
  el.innerHTML = `<div role="dialog" aria-modal="true" aria-labelledby="plan-title" class="animate-pop w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
  <div class="flex items-start justify-between gap-4 border-b border-slate-100 bg-slate-50 p-6">
    <div>
      <p class="text-xs font-bold uppercase tracking-wider text-amber-600">Phase 2.5 preview</p>
      <h2 id="plan-title" class="mt-1 text-xl font-extrabold text-slate-900">KY Pro</h2>
      <p class="mt-1 text-sm text-slate-500">$12 / month early bird — not chargeable in this build.</p>
    </div>
    <button type="button" data-close class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700" aria-label="Close">
      ${icon('x', 'h-5 w-5')}
    </button>
  </div>

  <div class="max-h-[60vh] overflow-y-auto p-6">
    <h3 class="text-sm font-bold text-slate-900">What Pro adds</h3>
    <ul class="mt-3 space-y-2 text-sm text-slate-600">
      ${PRO_FEATURES.map((f) => `<li class="flex items-start gap-2.5">${icon('check', 'h-4 w-4 mt-0.5 shrink-0 text-emerald-600')} ${f}</li>`).join('')}
    </ul>

    <h3 class="mt-6 text-sm font-bold text-slate-900">Not in this build</h3>
    <ul class="mt-3 space-y-2 text-sm text-slate-500">
      ${NOT_INCLUDED.map((f) => `<li class="flex items-start gap-2.5">${icon('x', 'h-4 w-4 mt-0.5 shrink-0 text-slate-300')} ${f}</li>`).join('')}
    </ul>

    <div class="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 class="text-sm font-bold text-slate-900">Account</h3>
      <p class="mt-1 text-xs leading-relaxed text-slate-500">
        ${
          authAvailable()
            ? 'Sign in with Google or GitHub from the top of the page to sync your saved audits across devices. It is optional — every audit mode works fully signed out.'
            : 'Sign-in is not configured for this build (no Firebase project). Every audit mode still works fully — this only affects cross-device history.'
        }
      </p>
    </div>
  </div>

  <div class="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
    <p class="text-xs text-slate-400">Pro features are already unlocked in this preview.</p>
    <button type="button" data-close class="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">Close</button>
  </div>
</div>`;

  document.body.appendChild(el);
  wire(el);
}

function wire(el: HTMLElement): void {
  const close = (): void => el.remove();

  el.querySelectorAll<HTMLElement>('[data-close]').forEach((b) => b.addEventListener('click', close));
  el.addEventListener('click', (e) => {
    if (e.target === el) close();
  });
}
