# KY — Resume & LinkedIn Profile Audit

Upload a resume — no LinkedIn API, no OAuth, no permissions — and get a benchmarked score (0–100) across
8 sections, real keyword coverage against a detailed industry rubric, rewrites for your weakest sections,
and a score history that shows whether your edits actually worked. If your resume contains a LinkedIn
profile link, KY offers a (clearly labelled demo-data) LinkedIn audit for it too, alongside your real
resume result — it never replaces it.

**Local-first, cloud-optional.** The audit itself still runs entirely in your browser — no account, no
upload to a server, no network call — exactly as in Phase 2.5. Phase 3 adds two things on top, both
opt-in: sign in with Google or GitHub to sync your audit history across devices, and (only when a
Firebase project is configured for the build) anonymous, aggregate usage analytics. Neither your resume
text nor your profile text is ever sent anywhere. See [Phase 3](#phase-3--accounts--analytics) below.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173 (serves the app/ source)
npm run test     # engine + view tests (node:test, bundled by Vite)
npm run check    # tests + type-check + production build
npm run pages    # type-check + build + publish to repo root (GitHub Pages)
```

Sign-in and cloud sync are dormant until you set up a Firebase project — see
[Phase 3](#phase-3--accounts--analytics). With no `.env.local`, `npm run dev` behaves exactly like
Phase 2.5: fully local, no sign-in button rendered.

## Three ways in

| Mode | What it scores | Label |
| --- | --- | --- |
| **Upload a resume** (primary/default tab) | Text extracted client-side from a PDF, DOCX or TXT resume — real parsing, real scores | `Real analysis` |
| **Paste text** | The text you actually paste — real parsing, real scores | `Real analysis` |
| **LinkedIn URL** | Curated/seeded sample data, so you can explore the report without pasting anything | `Demo data` |

Why resume-first: a real LinkedIn audit would need LinkedIn's API and OAuth permissions KY deliberately
does not request (see [Compliance](#compliance)). A resume needs none of that — upload it and KY reads it
entirely client-side. All three modes are free and clearly labelled in the UI; the LinkedIn URL tab exists
only so the demo never dead-ends for someone who wants to see a full report without uploading anything.

### Getting your resume/profile text in

Fastest: drag a PDF, DOCX or TXT resume onto the upload zone (also works with LinkedIn's own
*More → Save to PDF* export) — `app/src/parse/resume.ts` extracts the text with pdf.js / mammoth, entirely
in your browser, and drops it into the same box below so you can review it before scoring. The file itself
is never sent anywhere; only the extracted text feeds the audit.

Or paste it manually: open your LinkedIn profile → `Ctrl/Cmd + A` → `Ctrl/Cmd + C` → paste. Rough
formatting is fine either way; the parser is tolerant of layout differences.

Photo, banner, custom URL, Featured and posting recency cannot be read from text, so the form has five
optional checkboxes for them. **Unchecked sections are excluded from the score and the remaining
weights are re-normalised** — KY does not guess at things it cannot see.

### If your resume/paste contains a LinkedIn link

`analysis.ts`'s `detectLinkedInUrl()` scans the extracted/pasted text for a `linkedin.com/in/...` (or
`/pub/...`) link. If found, the report shows a banner offering a **demo** LinkedIn audit for that URL —
one click reuses the existing seeded/curated demo engine (`analyze()` / `data/profiles.ts`), the same
engine the LinkedIn URL tab already uses. This is explicitly *not* a real fetch of that profile — KY has
no LinkedIn API access and doesn't want any — it's a convenience so you don't have to retype the URL into
the demo tab yourself. If no LinkedIn link is found, nothing changes: the resume result stands on its own,
which is the common case and the one this build optimises for.

## What shipped

### Phase 1 — the demo
Landing page, audit flow, 8-section report, radar chart, industry percentile, keyword gaps, headline
rewrite, share/copy/PDF loop, and two curated sample profiles plus seeded estimates for any other URL.

### Phase 2 — real analysis
- **Real profile parsing** (`app/src/parse/profile.ts`) — name, headline, location, About, roles,
  bullets, dates, education, certifications, skills and links, extracted from pasted text.
- **Real scoring** (`app/src/parse/score.ts`) — every number derives from a signal found in the text:
  word-count bands, bullet density, the share of bullets carrying a number, date recency, keyword
  coverage. Each section reports its `basis` (`measured` / `partial` / `unknown`) plus what it got right.
- **Real keyword coverage** (`app/src/parse/keywords.ts`) — industry detection by term frequency, then
  every industry term is searched for in the paste and reported with the sections it appears in. A
  "gap" is a term genuinely absent, not a random sample.
- **Per-section rewrites** (`app/src/parse/rewrite.ts`) — headline, About, the weakest experience
  bullets and the skills list, assembled from facts in your own text. Deterministic templates, no API
  key and nothing invented: unknown facts appear as `[bracketed placeholders]`.
- **1-page PDF report** — `Download PDF` prints a dedicated one-page A4 summary, not a screenshot of
  the app.

### Phase 2.5 — the tracking layer
- **Audit history** with a hand-rolled SVG trend line (`app/src/views/history.ts`).
- **Keyword tracking with alerts** — track the terms you want to rank for; each audit checks whether
  they still appear and warns you when one drops off.
- **What changed** — a delta strip on every repeat audit, plus alerts for score drops, section drops
  and lost/gained keyword coverage.
- **Export** — CSV and JSON of every saved run.
- **Waitlist and demo account** — persisted locally. There is no server, so nothing is sent anywhere.

> Pro is a **preview, not a product**: billing is not connected, and the Pro features are unlocked so
> they can be evaluated. The plan modal says so explicitly rather than faking a checkout. **Pricing and
> billing are Phase 4** — not part of this build.

### Phase 3 — accounts & analytics

- **Sign in with Google or GitHub** (`app/src/lib/auth.ts`, `app/src/components/authWidget.ts`) via
  Firebase Auth. Purely additive: every audit mode above still works fully signed-out. Signing in only
  unlocks cross-device history.
- **Resume/profile file upload, resume-first** (`app/src/parse/resume.ts`) — PDF (pdf.js), DOCX (mammoth)
  and TXT, parsed in the browser and dynamically imported so the ~1.5MB of parsing libraries only load for
  visitors who actually use the upload zone. Upload is the default/primary tab specifically because a real
  LinkedIn audit would need LinkedIn API access and OAuth permissions KY does not request — a resume
  needs none of that.
- **LinkedIn-link detection & redirect** (`analysis.ts`'s `detectLinkedInUrl`) — if the uploaded/pasted
  text contains a `linkedin.com/in/...` link, the report offers a one-click **demo** LinkedIn audit for it
  (reusing the existing seeded/curated demo engine) alongside — never instead of — the real resume result.
  No real profile is fetched; there is still no LinkedIn API integration anywhere in this app.
- **Detailed industry rubrics** (`app/src/data/industries.ts`) — each of the 8 industries now carries a
  `description`: a written "what a strong profile/resume in this field looks like" benchmark, plus an
  expanded (~14-term) keyword list. This is the standard both industry detection and keyword-gap analysis
  score resumes/profiles against, and it's shown directly in the report's Keyword coverage card.
- **Cross-device audit history** (`app/src/lib/cloud.ts`) — when signed in, each saved audit mirrors to
  `users/{uid}/audits/{id}` in Firestore, and a fresh sign-in pulls that history back down into local
  storage. Local storage stays the source of truth for the current browser either way.
- **Anonymous usage analytics** — aggregate events only (`audit_run`, `audit_saved`, `resume_uploaded`,
  `sign_in`) written to Firestore's `analytics_events` collection: event type, mode, industry, score.
  Never the resume or profile text itself. See `firestore.rules` for the access rules (events are
  write-only from the client; nobody can read them back except from the Firebase console / a trusted
  backend).
- **Graceful degradation** — none of the above requires a Firebase project. Ship the app with no
  `VITE_FIREBASE_*` env vars set and it behaves exactly like Phase 2.5: no sign-in button, no network
  calls, fully local. See [Setup: Firebase (optional)](#setup-firebase-optional).

## Tech

- **Vite + TypeScript (strict) + Tailwind CSS v4.** The scoring/rendering core has zero runtime
  dependencies; Firebase (auth + Firestore) and the resume parsers (pdf.js, mammoth) are the only added
  dependencies, and the parsers are dynamically imported so they never load for a paste-only visit.
- Charts (score dial, radar, trend) are hand-rolled SVG — no chart library.
- Scoring is deterministic: the same input always produces the same report. The Phase 1 URL mode seeds
  its estimates with FNV-1a + mulberry32.
- All user-derived strings are HTML-escaped (there is a test for it).
- Tests run under `node:test`; `scripts/run-tests.mjs` bundles `tests/*.test.ts` with Vite first, so no
  test framework needs installing.

## Deploying (GitHub Pages)

GitHub Pages for this repo is in **branch-deploy** mode and serves the `main` branch root.
The published site is committed at the repo root (`index.html`, `assets/`, `favicon.svg`):

1. Make changes in `app/`
2. Run `npm run pages` — rebuilds and copies the site to the repo root
3. Commit the root `index.html`, `assets/` and `favicon.svg` and push to `main`
4. Pages rebuilds automatically (~1 minute)

Source layout: the Vite app lives in `app/` (`root: 'app'`, `base: './'` so the site
works under the `/KY/` sub-path). `dist/` is scratch output — never commit it.

## Setup: Firebase (optional)

Not required — skip this and everything above still works, fully local, no sign-in button. Set it up
only if you want Google/GitHub sign-in and cross-device history:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Add a Web App to it and copy the config values it gives you.
3. **Authentication → Sign-in method** → enable **Google**, and enable **GitHub** (GitHub needs an OAuth
   App at [github.com/settings/developers](https://github.com/settings/developers); set its callback URL
   to the one Firebase shows on the GitHub provider screen).
4. **Firestore Database** → create a database, then deploy the rules in `firestore.rules` (Firebase
   console → Firestore → Rules, or `firebase deploy --only firestore:rules` with the Firebase CLI).
5. Copy `.env.example` to `.env.local` and fill in the six `VITE_FIREBASE_*` values. `.env.local` is
   git-ignored and Vite only exposes `VITE_`-prefixed vars to the client.
6. If deploying to GitHub Pages via `npm run pages`, make sure `.env.local` (or equivalent env vars) is
   present at build time — GitHub Pages serves the built output, not a live server, so the config is
   baked in at build time, not read at runtime.

None of these six values are secret in the sense of granting access on their own — they identify the
Firebase project — but they're kept out of the committed history via `.env.local` regardless.

## Project structure

```
index.html, assets/, favicon.svg   # PUBLISHED site (built output, served by GitHub Pages)
app/                               # Vite source (root: 'app')
  index.html
  src/
    app.ts                 # view switching + audit flow + history persistence + auth/cloud wiring
    analysis.ts            # analysis engine: demo (URL) and real (text) modes, deltas, alerts
    parse/
      profile.ts           # pasted text -> structured profile (roles, bullets, dates, skills)
      score.ts             # real per-section scoring from extracted signals
      keywords.ts          # industry detection + real keyword coverage
      rewrite.ts           # deterministic per-section rewrites
      resume.ts            # PDF/DOCX/TXT -> plain text (pdf.js + mammoth, dynamically imported)
    data/
      sections.ts          # 8 audited sections, weights, issues, fixes
      industries.ts        # 8 industries: keywords + headline rewrites
      profiles.ts          # curated sample profiles (Sarah, Michael)
    components/
      charts.ts            # SVG score dial + radar chart + score trend
      icons.ts             # inline SVG icon set + brand marks (Google, GitHub)
      authWidget.ts        # header sign-in button / avatar menu
    lib/
      store.ts             # local storage: audits, tracked keywords, waitlist, account, export
      firebase.ts          # Firebase init from env vars; no-ops when unconfigured
      auth.ts               # Google/GitHub sign-in, sign-out, auth state
      cloud.ts              # Firestore analytics events + cross-device audit sync
      dom.ts, random.ts, url.ts
    views/
      landing.ts           # marketing page + tabbed audit form (upload / paste / URL) + auth widget
      scanning.ts          # animated analysis steps (wording differs per mode)
      report.ts            # report view + coverage + rewrites + print page
      history.ts           # saved audits, trend line, keyword tracking, export
      plan.ts              # Pro plan preview modal
tests/                     # engine + view tests (node:test)
scripts/
  run-tests.mjs            # bundles tests/*.test.ts with Vite, runs node --test
  sync-pages.mjs           # copies dist/ to the repo root
firestore.rules            # Firestore security rules for analytics_events + per-user audits
.env.example                # Firebase config template (copy to .env.local)
dist/                      # scratch build output (git-ignored)
```

## Roadmap

- **Phase 1:** interactive demo — shipped.
- **Phase 2:** real analysis of pasted profile text, per-section rewrites, 1-page PDF — shipped.
- **Phase 2.5:** audit history, score trends, keyword tracking with alerts, export — shipped.
- **Phase 3:** resume upload (now the primary path — no LinkedIn API needed), LinkedIn-link detection with
  a demo-audit redirect, detailed industry rubrics, Google/GitHub sign-in, cross-device history and usage
  analytics via Firestore — shipped.
- **Phase 4 (next):** Stripe billing for Pro, weekly automated re-audits with email alerts, team/agency
  features (candidate pipelines), browser extension.

### Compliance

KY does not scrape LinkedIn, does not use the LinkedIn API, requests no LinkedIn OAuth permissions and
never asks for LinkedIn credentials. This is exactly why resume upload is the primary path in Phase 3: it
gets a real, immediate audit without any of that. Real analysis only ever runs on text the user supplies
themselves, whether pasted or extracted from an uploaded file. The LinkedIn URL tab — and the one-click
"demo LinkedIn audit" offered when a resume contains a LinkedIn link — are both explicitly labelled demo
data, seeded/curated rather than fetched. Sign-in and Firestore sync (Phase 3) are opt-in and never gate
the audit itself. Not affiliated with LinkedIn Corporation.
