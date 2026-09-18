const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string | null;
  must_have_skills: string[];
  nice_to_have_skills: string[];
  semantic_weight: number;
  must_have_weight: number;
  nice_to_have_weight: number;
  created_at: string;
}

export interface Candidate {
  id: string;
  source_filename: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  skills: string[];
  years_experience: number | null;
  industry_key: string | null;
  industry_label: string | null;
  created_at: string;
}

export interface Match {
  candidate: Candidate;
  score: number;
  semantic_score: number;
  must_have_matched: string[];
  must_have_missing: string[];
  nice_to_have_matched: string[];
  summary: string;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, init);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText}: ${body}`);
  }
  return res.json() as Promise<T>;
}

export interface JobInput {
  title: string;
  description: string;
  location: string;
  must_have_skills: string[];
  nice_to_have_skills: string[];
}

export function createJob(input: JobInput): Promise<Job> {
  return request('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
}

export function listJobs(): Promise<Job[]> {
  return request('/api/jobs');
}

export function listCandidates(): Promise<Candidate[]> {
  return request('/api/candidates');
}

export function getMatches(jobId: string): Promise<Match[]> {
  return request(`/api/jobs/${jobId}/matches`);
}

export async function uploadCandidates(files: FileList | File[]): Promise<Candidate[]> {
  const form = new FormData();
  Array.from(files).forEach((f) => form.append('files', f));
  const res = await fetch(`${BASE}/api/candidates/upload`, { method: 'POST', body: form });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText}: ${body}`);
  }
  return res.json();
}
