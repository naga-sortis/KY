import './style.css';
import type { Candidate, Job, Match } from './api';
import { createJob, getMatches, listCandidates, listJobs, uploadCandidates } from './api';

type Tab = 'jobs' | 'upload' | 'matches';

const state: {
  tab: Tab;
  jobs: Job[];
  candidates: Candidate[];
  selectedJobId: string | null;
  matches: Match[];
  status: { kind: 'ok' | 'error'; text: string } | null;
} = {
  tab: 'jobs',
  jobs: [],
  candidates: [],
  selectedJobId: null,
  matches: [],
  status: null,
};

const root = document.getElementById('app') as HTMLElement;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pillList(items: string[], cls = ''): string {
  return items.map((i) => `<span class="pill ${cls}">${escapeHtml(i)}</span>`).join('');
}

async function refreshJobs(): Promise<void> {
  state.jobs = await listJobs();
  if (!state.selectedJobId && state.jobs.length) state.selectedJobId = state.jobs[0]!.id;
}

async function refreshCandidates(): Promise<void> {
  state.candidates = await listCandidates();
}

async function refreshMatches(): Promise<void> {
  if (!state.selectedJobId) {
    state.matches = [];
    return;
  }
  state.matches = await getMatches(state.selectedJobId);
}

function render(): void {
  root.innerHTML = `
    <header class="top">
      <div>
        <h1>Provenance</h1>
        <div class="tag">Phase 1 demo &middot; ingest &middot; segment &amp; parse &middot; match &amp; rank</div>
      </div>
    </header>
    <nav class="tabs">
      ${tabButton('jobs', 'Jobs')}
      ${tabButton('upload', 'Upload candidates')}
      ${tabButton('matches', 'Matches')}
    </nav>
    <div id="tab-body"></div>
  `;
  const body = document.getElementById('tab-body') as HTMLElement;
  if (state.tab === 'jobs') renderJobsTab(body);
  else if (state.tab === 'upload') renderUploadTab(body);
  else renderMatchesTab(body);

  root.querySelectorAll<HTMLButtonElement>('[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.tab = btn.dataset.tab as Tab;
      state.status = null;
      render();
    });
  });
}

function tabButton(tab: Tab, label: string): string {
  return `<button data-tab="${tab}" class="${state.tab === tab ? 'active' : ''}">${label}</button>`;
}

function statusHtml(): string {
  if (!state.status) return '';
  return `<p class="status ${state.status.kind === 'ok' ? 'ok' : 'error'}">${escapeHtml(state.status.text)}</p>`;
}

// ---------- Jobs tab ----------

function renderJobsTab(body: HTMLElement): void {
  body.innerHTML = `
    <div class="card">
      <h2>New job</h2>
      <p class="hint">Describe the role once; must-have and nice-to-have skills drive the match weighting below.</p>
      <form id="job-form">
        <label for="job-title">Title</label>
        <input id="job-title" type="text" placeholder="Senior Software Engineer" required />

        <label for="job-desc">Description</label>
        <textarea id="job-desc" placeholder="What the role actually does, in plain language." required></textarea>

        <div class="row">
          <div>
            <label for="job-location">Location</label>
            <input id="job-location" type="text" placeholder="Remote / Madrid / ..." />
          </div>
        </div>

        <div class="row">
          <div>
            <label for="job-must">Must-have skills (comma-separated)</label>
            <input id="job-must" type="text" placeholder="Kubernetes, AWS, CI/CD" />
          </div>
          <div>
            <label for="job-nice">Nice-to-have skills (comma-separated)</label>
            <input id="job-nice" type="text" placeholder="Mentoring, Open Source" />
          </div>
        </div>

        <button type="submit" class="primary">Create job</button>
        ${statusHtml()}
      </form>
    </div>

    <div class="card">
      <h2>Existing jobs</h2>
      ${
        state.jobs.length
          ? `<table>
        <thead><tr><th>Title</th><th>Location</th><th>Must-have</th><th>Nice-to-have</th></tr></thead>
        <tbody>
          ${state.jobs
            .map(
              (j) => `<tr>
            <td><strong>${escapeHtml(j.title)}</strong></td>
            <td>${escapeHtml(j.location || '—')}</td>
            <td>${pillList(j.must_have_skills)}</td>
            <td>${pillList(j.nice_to_have_skills)}</td>
          </tr>`
            )
            .join('')}
        </tbody>
      </table>`
          : '<p class="empty">No jobs yet — create one above.</p>'
      }
    </div>
  `;

  const form = document.getElementById('job-form') as HTMLFormElement;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = (document.getElementById('job-title') as HTMLInputElement).value.trim();
    const description = (document.getElementById('job-desc') as HTMLTextAreaElement).value.trim();
    const location = (document.getElementById('job-location') as HTMLInputElement).value.trim();
    const must = (document.getElementById('job-must') as HTMLInputElement).value;
    const nice = (document.getElementById('job-nice') as HTMLInputElement).value;

    try {
      const job = await createJob({
        title,
        description,
        location,
        must_have_skills: splitSkills(must),
        nice_to_have_skills: splitSkills(nice),
      });
      state.selectedJobId = job.id;
      state.status = { kind: 'ok', text: `Created "${job.title}".` };
      await refreshJobs();
      render();
    } catch (err) {
      state.status = { kind: 'error', text: String(err) };
      render();
    }
  });
}

function splitSkills(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

// ---------- Upload tab ----------

function renderUploadTab(body: HTMLElement): void {
  body.innerHTML = `
    <div class="card">
      <h2>Upload candidates</h2>
      <p class="hint">
        PDF, DOCX or TXT. A PDF with several resumes appended into one file (the InfoJobs bulk-export
        case) is split automatically — each detected candidate is parsed and stored separately.
      </p>
      <input id="candidate-files" type="file" multiple accept=".pdf,.docx,.txt" />
      <div>
        <button id="upload-btn" class="primary">Upload &amp; parse</button>
      </div>
      ${statusHtml()}
    </div>

    <div class="card">
      <h2>Candidate pool (${state.candidates.length})</h2>
      ${
        state.candidates.length
          ? `<table>
        <thead><tr><th>Name</th><th>Source file</th><th>Industry</th><th>Years</th><th>Skills</th></tr></thead>
        <tbody>
          ${state.candidates
            .map(
              (c) => `<tr>
            <td><strong>${escapeHtml(c.name || '—')}</strong><br/><span style="color:var(--ink-faint);font-size:12px">${escapeHtml(c.email || '')}</span></td>
            <td>${escapeHtml(c.source_filename)}</td>
            <td>${escapeHtml(c.industry_label || '—')}</td>
            <td>${c.years_experience ?? '—'}</td>
            <td>${pillList(c.skills.slice(0, 6))}${c.skills.length > 6 ? `<span class="pill">+${c.skills.length - 6}</span>` : ''}</td>
          </tr>`
            )
            .join('')}
        </tbody>
      </table>`
          : '<p class="empty">No candidates uploaded yet.</p>'
      }
    </div>
  `;

  document.getElementById('upload-btn')!.addEventListener('click', async () => {
    const input = document.getElementById('candidate-files') as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      state.status = { kind: 'error', text: 'Choose at least one file first.' };
      render();
      return;
    }
    try {
      const created = await uploadCandidates(input.files);
      state.status = { kind: 'ok', text: `Parsed ${created.length} candidate(s) from ${input.files.length} file(s).` };
      await refreshCandidates();
      render();
    } catch (err) {
      state.status = { kind: 'error', text: String(err) };
      render();
    }
  });
}

// ---------- Matches tab ----------

function renderMatchesTab(body: HTMLElement): void {
  body.innerHTML = `
    <div class="card">
      <h2>Ranked matches</h2>
      <div class="row">
        <div>
          <label for="match-job">Job</label>
          <select id="match-job">
            ${state.jobs.map((j) => `<option value="${j.id}" ${j.id === state.selectedJobId ? 'selected' : ''}>${escapeHtml(j.title)}</option>`).join('')}
          </select>
        </div>
      </div>
      <button id="refresh-matches" class="primary">Rank candidates</button>
      ${statusHtml()}
    </div>

    ${
      state.matches.length
        ? state.matches
            .map(
              (m) => `<div class="match-row">
          <div class="head">
            <div>
              <div class="name">${escapeHtml(m.candidate.name || 'Unknown candidate')}</div>
              <div class="meta">${escapeHtml(m.candidate.source_filename)} &middot; ${escapeHtml(m.candidate.industry_label || '—')} &middot; ${m.candidate.years_experience ?? '—'} yrs</div>
            </div>
            <div class="score">${m.score}</div>
          </div>
          <div style="margin-top:8px">
            ${pillList(m.must_have_matched, 'match')}
            ${pillList(m.must_have_missing, 'missing')}
            ${pillList(m.nice_to_have_matched)}
          </div>
          <div class="summary">${escapeHtml(m.summary)}</div>
        </div>`
            )
            .join('')
        : state.jobs.length
          ? '<p class="empty">No matches yet — pick a job and click "Rank candidates".</p>'
          : '<p class="empty">Create a job first.</p>'
    }
  `;

  const select = document.getElementById('match-job') as HTMLSelectElement | null;
  select?.addEventListener('change', () => {
    state.selectedJobId = select.value;
  });

  document.getElementById('refresh-matches')?.addEventListener('click', async () => {
    if (select) state.selectedJobId = select.value;
    try {
      await refreshMatches();
      state.status = { kind: 'ok', text: `Ranked ${state.matches.length} candidate(s).` };
      render();
    } catch (err) {
      state.status = { kind: 'error', text: String(err) };
      render();
    }
  });
}

async function init(): Promise<void> {
  try {
    await Promise.all([refreshJobs(), refreshCandidates()]);
  } catch {
    state.status = { kind: 'error', text: 'Could not reach the API. Is the backend running?' };
  }
  render();
}

init();
