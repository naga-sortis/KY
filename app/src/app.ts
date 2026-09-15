import { landingHtml, wireLanding } from './views/landing';
import type { LandingHandlers } from './views/landing';
import { scanningHtml, runScan } from './views/scanning';
import { reportHtml, wireReport } from './views/report';
import { historyHtml, wireHistory } from './views/history';
import { openPlanModal } from './views/plan';
import { analyze, analyzeText, computeAlerts, computeDelta } from './analysis';
import type { AnalysisResult } from './analysis';
import { parseProfileUrl } from './lib/url';
import { newAuditId, previousAuditFor, saveAudit } from './lib/store';
import type { ProfileFlags } from './parse/profile';
import { completeRedirectSignIn, watchAuth } from './lib/auth';
import { logEvent, pullCloudAudits, syncAuditToCloud } from './lib/cloud';

const app = document.getElementById('app') as HTMLElement | null;

let cleanupPrevView: () => void = () => {};

function switchView(render: () => void): void {
  cleanupPrevView();
  cleanupPrevView = () => {};
  render();
}

export function initApp(): void {
  if (!app) return;
  completeRedirectSignIn();
  watchSignInForCloudSync();
  renderLanding();
}

/** On each fresh sign-in, pull that user's cloud audit history down into local storage so History shows it too. */
function watchSignInForCloudSync(): void {
  let lastUid: string | null = null;
  watchAuth((user) => {
    const uid = user?.uid ?? null;
    if (uid && uid !== lastUid) {
      logEvent('sign_in', { provider: user!.provider });
      pullCloudAudits(uid).then((audits) => audits.forEach((a) => saveAudit(a)));
    }
    lastUid = uid;
  });
}

export function renderLanding(): void {
  if (!app) return;
  switchView(() => {
    app.innerHTML = landingHtml();
    const handlers: LandingHandlers = {
      onAudit: handleAudit,
      onPaste: handlePaste,
      onHistory: renderHistory,
      onOpenPlan: openPlanModal,
    };
    cleanupPrevView = wireLanding(app, handlers);
    window.scrollTo(0, 0);
  });
}

export function renderHistory(): void {
  if (!app) return;
  switchView(() => {
    app.innerHTML = historyHtml();
    wireHistory(app, { onBack: renderLanding });
    window.scrollTo(0, 0);
  });
}

/** Phase 1 demo path: a URL scored against sample data. */
function handleAudit(raw: string): void {
  showReport(analyze(parseProfileUrl(raw)));
}

/** Phase 2 path: real analysis of pasted profile text (including text extracted from an uploaded resume). */
function handlePaste(text: string, flags: Record<string, boolean>): void {
  const f: Partial<ProfileFlags> = {
    photo: flags.photo ?? null,
    banner: flags.banner ?? null,
    customUrl: flags.customUrl ?? null,
    featured: flags.featured ?? null,
    active90: flags.active90 ?? null,
  };
  showReport(analyzeText(text, f));
}

function showReport(result: AnalysisResult): void {
  if (!app) return;

  // Phase 2.5: compare against the last saved run of the same profile.
  const prev = previousAuditFor(result.profileKey);
  const delta = computeDelta(result, prev);
  const enriched: AnalysisResult = { ...result, delta, alerts: computeAlerts(result, prev, delta) };
  logEvent('audit_run', { mode: enriched.mode, industry: enriched.industry, overall: enriched.overall });

  switchView(() => {
    if (!app) return;
    app.innerHTML = scanningHtml(enriched);
    runScan(app, () => {
      if (!app) return;
      app.innerHTML = reportHtml(enriched);
      wireReport(app, enriched, {
        onRestart: renderLanding,
        onHistory: renderHistory,
        onSave: (r) => saveResult(r),
      });
      window.scrollTo(0, 0);
    });
  });
}

function saveResult(r: AnalysisResult): void {
  const audit = {
    id: newAuditId(),
    profileKey: r.profileKey,
    label: r.name,
    source: r.input.display,
    industry: r.industry,
    mode: r.mode,
    overall: r.overall,
    percentile: r.percentile,
    sections: r.sections.filter((s) => s.basis !== 'unknown').map((s) => ({ key: s.key, score: s.score })),
    covered: r.keywordReport?.covered ?? [],
    gaps: r.keywordReport ? r.keywordReport.gaps : r.keywords,
    createdAt: new Date().toISOString(),
  };
  saveAudit(audit);
  logEvent('audit_saved', { mode: audit.mode, industry: audit.industry, overall: audit.overall });
  void syncAuditToCloud(audit);
}
