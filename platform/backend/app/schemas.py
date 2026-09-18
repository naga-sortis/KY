from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class JobCreate(BaseModel):
    title: str
    description: str
    location: str | None = None
    must_have_skills: list[str] = Field(default_factory=list)
    nice_to_have_skills: list[str] = Field(default_factory=list)
    semantic_weight: float = 0.5
    must_have_weight: float = 0.35
    nice_to_have_weight: float = 0.15


class JobOut(JobCreate):
    model_config = ConfigDict(from_attributes=True)
    id: str
    created_at: datetime


class CandidateOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    source_filename: str
    name: str | None
    email: str | None
    phone: str | None
    skills: list[str]
    years_experience: int | None
    industry_key: str | None
    industry_label: str | None
    created_at: datetime


class MatchOut(BaseModel):
    candidate: CandidateOut
    score: float
    semantic_score: float
    must_have_matched: list[str]
    must_have_missing: list[str]
    nice_to_have_matched: list[str]
    summary: str
