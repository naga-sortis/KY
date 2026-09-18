"""
JD-to-candidate matching: retrieve-then-rank, per the architecture doc's
recommendation against training a model from scratch.

Phase 1 substitutes TF-IDF cosine similarity for a neural embedding model —
this sandbox has no path to download pretrained embedding weights, and more
importantly a live demo has zero tolerance for a model-download failure mid-
presentation. TF-IDF needs nothing beyond scikit-learn (already a
dependency), is fully deterministic, and is a legitimate resume-matching
technique in its own right. Swapping in sentence-transformers or a hosted
embeddings API later is a one-function change — see `semantic_scores()`
below — nothing else in the pipeline needs to know the difference.

Scoring is a weighted blend of three signals, and the weights are function
parameters rather than constants specifically so a per-job "scoring profile"
(the architecture doc's customization requirement) is a config value, not a
code change.
"""

from __future__ import annotations

from dataclasses import dataclass, field

import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from .parsing import CandidateRecord


@dataclass
class ScoringProfile:
    """Per-job customization: what matters and how much."""

    semantic_weight: float = 0.5
    must_have_weight: float = 0.35
    nice_to_have_weight: float = 0.15
    must_have_skills: tuple[str, ...] = ()
    nice_to_have_skills: tuple[str, ...] = ()
    location: str | None = None


@dataclass
class MatchExplanation:
    candidate_index: int
    score: float  # 0-100
    semantic_score: float  # 0-1
    must_have_matched: list[str] = field(default_factory=list)
    must_have_missing: list[str] = field(default_factory=list)
    nice_to_have_matched: list[str] = field(default_factory=list)
    summary: str = ""


def semantic_scores(job_description: str, candidate_texts: list[str]) -> list[float]:
    """Cosine similarity between the JD and each candidate's full text, via TF-IDF."""
    if not candidate_texts:
        return []
    corpus = [job_description, *candidate_texts]
    vectorizer = TfidfVectorizer(stop_words="english", max_features=4000)
    matrix = vectorizer.fit_transform(corpus)
    jd_vec, candidate_matrix = matrix[0:1], matrix[1:]
    sims = cosine_similarity(jd_vec, candidate_matrix)[0]
    return [float(s) for s in sims]


def _skill_overlap(candidate_skills: list[str], target_skills: tuple[str, ...]) -> tuple[list[str], list[str]]:
    have = {s.lower() for s in candidate_skills}
    matched = [s for s in target_skills if s.lower() in have]
    missing = [s for s in target_skills if s.lower() not in have]
    return matched, missing


def rank_candidates(
    job_description: str,
    candidates: list[CandidateRecord],
    profile: ScoringProfile,
) -> list[MatchExplanation]:
    sims = semantic_scores(job_description, [c.raw_text for c in candidates])

    results: list[MatchExplanation] = []
    for i, (candidate, sem_score) in enumerate(zip(candidates, sims)):
        must_matched, must_missing = _skill_overlap(candidate.skills, profile.must_have_skills)
        nice_matched, _ = _skill_overlap(candidate.skills, profile.nice_to_have_skills)

        must_coverage = (
            len(must_matched) / len(profile.must_have_skills) if profile.must_have_skills else 1.0
        )
        nice_coverage = (
            len(nice_matched) / len(profile.nice_to_have_skills) if profile.nice_to_have_skills else 1.0
        )

        blended = (
            profile.semantic_weight * sem_score
            + profile.must_have_weight * must_coverage
            + profile.nice_to_have_weight * nice_coverage
        )
        score = round(float(np.clip(blended, 0, 1)) * 100, 1)

        summary_bits = []
        if must_matched:
            summary_bits.append(f"matches {len(must_matched)}/{len(profile.must_have_skills)} must-haves")
        if must_missing:
            summary_bits.append(f"missing {', '.join(must_missing)}")
        summary_bits.append(f"{round(sem_score * 100)}% text similarity to the JD")
        summary = "; ".join(summary_bits)

        results.append(
            MatchExplanation(
                candidate_index=i,
                score=score,
                semantic_score=sem_score,
                must_have_matched=must_matched,
                must_have_missing=must_missing,
                nice_to_have_matched=nice_matched,
                summary=summary,
            )
        )

    results.sort(key=lambda r: r.score, reverse=True)
    return results
