import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
from pdf_fixtures import make_pdf

from app.db import init_db
from app.main import app

client = TestClient(app)
init_db()


CANDIDATE_A = [
    "Alex Morgan",
    "alex.morgan@example.com",
    "Senior Software Engineer",
    "2018 - Present: Kubernetes, AWS, CI/CD, mentoring engineers",
]
CANDIDATE_B = [
    "Priya Chandran",
    "priya.chandran@example.com",
    "Marketing Manager",
    "2019 - Present: SEO, GA4, HubSpot, email marketing",
]


def test_health():
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_create_and_list_job():
    resp = client.post(
        "/api/jobs",
        json={
            "title": "Senior Software Engineer",
            "description": "Kubernetes, AWS, CI/CD, distributed systems.",
            "must_have_skills": ["Kubernetes", "AWS"],
            "nice_to_have_skills": ["Mentoring"],
        },
    )
    assert resp.status_code == 200
    job = resp.json()
    assert job["title"] == "Senior Software Engineer"

    listed = client.get("/api/jobs").json()
    assert any(j["id"] == job["id"] for j in listed)


def test_upload_multi_cv_pdf_and_rank_against_job():
    job_resp = client.post(
        "/api/jobs",
        json={
            "title": "Senior Software Engineer",
            "description": "We need a Senior Software Engineer with Kubernetes, AWS and CI/CD experience.",
            "must_have_skills": ["Kubernetes", "AWS"],
            "nice_to_have_skills": ["Mentoring"],
        },
    )
    job_id = job_resp.json()["id"]

    pdf_bytes = make_pdf([CANDIDATE_A, CANDIDATE_B])
    upload_resp = client.post(
        "/api/candidates/upload",
        files=[("files", ("bulk_export.pdf", pdf_bytes, "application/pdf"))],
    )
    assert upload_resp.status_code == 200
    candidates = upload_resp.json()
    assert len(candidates) == 2
    assert {c["name"] for c in candidates} == {"Alex Morgan", "Priya Chandran"}

    matches_resp = client.get(f"/api/jobs/{job_id}/matches")
    assert matches_resp.status_code == 200
    matches = matches_resp.json()
    assert len(matches) >= 2
    # The software engineer should outrank the marketing manager for a software JD.
    assert matches[0]["candidate"]["name"] == "Alex Morgan"
    assert "Kubernetes" in matches[0]["must_have_matched"]


def test_unsupported_file_type_rejected():
    resp = client.post(
        "/api/candidates/upload",
        files=[("files", ("resume.exe", b"not a resume", "application/octet-stream"))],
    )
    assert resp.status_code == 400
