/**
 * Phase 3 — resume/profile file upload.
 *
 * Extracts plain text from an uploaded PDF, DOCX or TXT file so it can flow
 * into the exact same real-analysis pipeline as a pasted profile (see
 * parse/profile.ts). Extraction runs entirely client-side (pdf.js + mammoth,
 * both bundled) — the file itself is never sent anywhere.
 */

/**
 * pdf.js and mammoth are both heavy (the pdf.js worker alone is >1MB) and only
 * needed by the small share of visitors who upload a file instead of pasting.
 * Both are dynamically imported inside the extract* functions below so the
 * main bundle — and everyone who just pastes text — stays light.
 */

export class ResumeParseError extends Error {}

const MAX_FILE_BYTES = 15 * 1024 * 1024;

export function isSupportedResumeFile(file: File): boolean {
  return /\.(pdf|docx|txt)$/i.test(file.name);
}

/** Extracts plain text from a PDF, DOCX or TXT file. Throws ResumeParseError on anything it can't handle. */
export async function extractTextFromFile(file: File): Promise<string> {
  if (file.size > MAX_FILE_BYTES) {
    throw new ResumeParseError('That file is too large (max 15MB).');
  }
  const name = file.name.toLowerCase();

  let text: string;
  if (name.endsWith('.pdf')) {
    text = await extractPdfText(file);
  } else if (name.endsWith('.docx')) {
    text = await extractDocxText(file);
  } else if (name.endsWith('.txt')) {
    text = await file.text();
  } else {
    throw new ResumeParseError('Unsupported file type. Upload a PDF, DOCX or TXT file.');
  }

  const trimmed = text.trim();
  if (!trimmed) {
    throw new ResumeParseError('No readable text found in that file — it may be a scanned image without a text layer.');
  }
  return trimmed;
}

async function extractPdfText(file: File): Promise<string> {
  const [pdfjsLib, { default: pdfWorkerUrl }] = await Promise.all([
    import('pdfjs-dist'),
    // eslint-disable-next-line import/no-unresolved -- Vite's `?url` asset import, typed in vite-env.d.ts
    import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
  ]);
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const pages: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const line = content.items.map((item) => ('str' in item ? item.str : '')).join(' ');
    pages.push(line);
  }
  return pages.join('\n\n');
}

async function extractDocxText(file: File): Promise<string> {
  const mammoth = await import('mammoth');
  const buffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer: buffer });
  return result.value;
}
