from __future__ import annotations

import uuid
from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import models, schemas
from .db import get_db, init_db
from .matching import ScoringProfile, rank_candidates
from .parsing import CandidateRecord
from .segmentation import segment_and_parse_file
from .storage import get_storage


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(title="Provenance API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Phase 1 single-tenant demo; tighten before multi-tenant.
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok"}


# ---------- Jobs ----------

@app.post("/api/jobs", response_model=schemas.JobOut)
def create_job(payload: schemas.JobCreate, db: Session = Depends(get_db)):
    job = models.Job(**payload.model_dump())
    db.add(job)
    db.commit()
    db.refresh(job)
    return job


@app.get("/api/jobs", response_model=list[schemas.JobOut])
def list_jobs(db: Session = Depends(get_db)):
    return db.query(models.Job).order_by(models.Job.created_at.desc()).all()


@app.get("/api/jobs/{job_id}", response_model=schemas.JobOut)
def get_job(job_id: str, db: Session = Depends(get_db)):
    job = db.get(models.Job, job_id)
    if not job:
        raise HTTPException(404, "Job not found")
    return job


# ---------- Candidates ----------

SUPPORTED_EXTENSIONS = (".pdf", ".docx", ".txt")


@app.post("/api/candidates/upload", response_model=list[schemas.CandidateOut])
async def upload_candidates(files: list[UploadFile], db: Session = Depends(get_db)):
    storage = get_storage()
    created: list[models.Candidate] = []

    for file in files:
        filename = file.filename or "upload"
        if not filename.lower().endswith(SUPPORTED_EXTENSIONS):
            raise HTTPException(400, f"Unsupported file type: {filename}")

        data = await file.read()
        storage_key = f"raw/{uuid.uuid4()}-{filename}"
        storage.put(storage_key, data)

        try:
            records: list[CandidateRecord] = segment_and_parse_file(filename, data)
        except Exception as exc:  # noqa: BLE001 -- surfaced to the caller, not swallowed
            raise HTTPException(422, f"Could not read {filename}: {exc}") from exc

        for record in records:
            candidate = models.Candidate(
                source_filename=filename,
                storage_key=storage_key,
                name=record.name,
                email=record.email,
                phone=record.phone,
                skills=record.skills,
                years_experience=record.years_experience,
                industry_key=record.industry.key if record.industry else None,
                industry_label=record.industry.label if record.industry else None,
                raw_text=record.raw_text,
            )
            db.add(candidate)
            created.append(candidate)

    db.commit()
    for c in created:
        db.refresh(c)
    return created


@app.get("/api/candidates", response_model=list[schemas.CandidateOut])
def list_candidates(db: Session = Depends(get_db)):
    return db.query(models.Candidate).order_by(models.Candidate.created_at.desc()).all()


# ---------- Matching ----------

@app.get("/api/jobs/{job_id}/matches", response_model=list[schemas.MatchOut])
def get_matches(job_id: str, db: Session = Depends(get_db)):
    job = db.get(models.Job, job_id)
    if not job:
        raise HTTPException(404, "Job not found")

    candidates = db.query(models.Candidate).all()
    records = [
        CandidateRecord(
            raw_text=c.raw_text,
            name=c.name,
            email=c.email,
            phone=c.phone,
            skills=c.skills,
            years_experience=c.years_experience,
            industry=None,
        )
        for c in candidates
    ]

    profile = ScoringProfile(
        semantic_weight=job.semantic_weight,
        must_have_weight=job.must_have_weight,
        nice_to_have_weight=job.nice_to_have_weight,
        must_have_skills=tuple(job.must_have_skills),
        nice_to_have_skills=tuple(job.nice_to_have_skills),
        location=job.location,
    )

    ranked = rank_candidates(job.description, records, profile)
    return [
        schemas.MatchOut(
            candidate=schemas.CandidateOut.model_validate(candidates[r.candidate_index]),
            score=r.score,
            semantic_score=r.semantic_score,
            must_have_matched=r.must_have_matched,
            must_have_missing=r.must_have_missing,
            nice_to_have_matched=r.nice_to_have_matched,
            summary=r.summary,
        )
        for r in ranked
    ]
