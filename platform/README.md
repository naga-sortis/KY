# Provenance — Phase 1 demo

A working slice of the [Provenance architecture](https://claude.ai/artifact/VuBvYYB1VcZpq739p5maEJ):
**ingest → segment & parse → match & rank**. Upload a job description and a
batch of resumes (including an InfoJobs-style file with several CVs appended
into one PDF), and get back a ranked, explained shortlist.

Deliberately out of scope for this phase — staged for after a pilot design
partner, per the architecture doc's own roadmap:
- authenticity/AI-content flagging
- the screening & question-generation module
- the feedback → retraining loop
- multi-tenant isolation, SSO, hosted deployment

None of those are half-built here; they're just not started, on purpose,
to keep this week's surface area small.

## Run it

```bash
# Backend — FastAPI, SQLite by default, no external services to provision
cd backend
python3 -m venv .venv && . .venv/bin/activate
pip install -r requirements-dev.txt
pytest                          # 22 tests
uvicorn app.main:app --reload   # http://localhost:8000

# Frontend — Vite + TypeScript, in another shell
cd web
npm install
VITE_API_URL=http://localhost:8000 npm run dev   # http://localhost:5174
```

Or containerized — see [DEPLOY.md](./DEPLOY.md) for the Azure/Zadara path and
an important caveat about what's been validated where.

## How it works

1. **Create a job** — title, description, and must-have / nice-to-have
   skills. Those skill lists drive the matching weights.
2. **Upload candidates** — PDF, DOCX or TXT. A PDF is split page-by-page
   wherever a new candidate's name-and-email header appears, so one bulk
   export becomes several candidate records automatically
   (`backend/app/segmentation.py`).
3. **View ranked matches** — each candidate gets a 0–100 score blending text
   similarity to the JD (TF-IDF cosine similarity) with must-have/nice-to-have
   skill coverage, plus a plain-language explanation of why
   (`backend/app/matching.py`).

The industry keyword rubrics used for skill matching are ported straight from
KY's `app/src/data/industries.ts` — the one piece of the old app that
survives the pivot (`backend/app/rubrics.py`).

## Why TF-IDF instead of a neural embedding model

This sandbox has no path to download pretrained model weights (Hugging Face
Hub is unreachable from here), and more to the point: a live demo has zero
tolerance for a model download failing mid-presentation. TF-IDF needs nothing
beyond scikit-learn, is fully deterministic, and is a legitimate resume-
matching technique on its own. `semantic_scores()` in `matching.py` is the
one function to change when swapping in sentence-transformers or a hosted
embeddings API later — nothing else in the pipeline needs to know the
difference.

## Tests

```bash
cd backend && . .venv/bin/activate && pytest -v
```

22 tests: field extraction, multi-CV segmentation (including a synthetic
multi-page PDF built on the fly), matching/ranking, storage, and a full
API-level test that uploads a bulk PDF and checks the ranking end to end.
