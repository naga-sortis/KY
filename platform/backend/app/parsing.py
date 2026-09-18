"""
Text extraction (PDF/DOCX/TXT) and structured field extraction from resume text.

Deliberately simple heuristics rather than a commercial resume-parsing vendor
integration (Affinda/Sovren/Textkernel, as the architecture doc recommends for
production) — this is the Phase 1 demo path: no procurement, no API keys,
nothing that can fail to authenticate mid-demo. Swapping in a vendor parser
later only touches `parse_candidate()` below.
"""

from __future__ import annotations

import io
import re
from dataclasses import dataclass, field

import pdfplumber
from docx import Document

from .rubrics import ALL_KEYWORDS, Industry, detect_industry

EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+\.[\w.-]+")
PHONE_RE = re.compile(r"(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?){2,4}\d{2,4}")
YEAR_RE = re.compile(r"\b(19|20)\d{2}\b")
NAME_LINE_RE = re.compile(r"^[A-Z][a-zA-Z'.-]+(?:\s+[A-Z][a-zA-Z'.-]+){1,3}$")


@dataclass
class CandidateRecord:
    raw_text: str
    name: str | None = None
    email: str | None = None
    phone: str | None = None
    skills: list[str] = field(default_factory=list)
    years_experience: int | None = None
    industry: Industry | None = None


def extract_pages_from_pdf(data: bytes) -> list[str]:
    """One string per page — page boundaries are exactly what the multi-CV segmenter needs."""
    pages: list[str] = []
    with pdfplumber.open(io.BytesIO(data)) as pdf:
        for page in pdf.pages:
            pages.append(page.extract_text() or "")
    return pages


def extract_text_from_docx(data: bytes) -> str:
    doc = Document(io.BytesIO(data))
    return "\n".join(p.text for p in doc.paragraphs)


def extract_text_from_txt(data: bytes) -> str:
    return data.decode("utf-8", errors="replace")


def extract_email(text: str) -> str | None:
    m = EMAIL_RE.search(text)
    return m.group(0) if m else None


def extract_phone(text: str) -> str | None:
    for line in text.splitlines()[:40]:
        m = PHONE_RE.search(line)
        if m and sum(c.isdigit() for c in m.group(0)) >= 7:
            return m.group(0).strip()
    return None


def extract_name(text: str) -> str | None:
    """The name is almost always one of the first few non-empty lines, title-cased, no digits."""
    for line in text.splitlines()[:10]:
        line = line.strip()
        if not line or EMAIL_RE.search(line) or any(c.isdigit() for c in line):
            continue
        if NAME_LINE_RE.match(line):
            return line
    return None


def extract_skills(text: str) -> list[str]:
    lowered = text.lower()
    found = []
    for kw in ALL_KEYWORDS:
        if re.search(rf"\b{re.escape(kw.lower())}\b", lowered):
            found.append(kw)
    return found


def extract_years_experience(text: str) -> int | None:
    """Rough estimate: span between the earliest year mentioned and now (or the latest year)."""
    import datetime

    years = [int(m.group(0)) for m in YEAR_RE.finditer(text)]
    if re.search(r"\b(present|current|now)\b", text, re.IGNORECASE):
        years.append(datetime.date.today().year)
    if len(years) < 2:
        return None
    span = max(years) - min(years)
    return span if 0 < span <= 50 else None


def parse_candidate(text: str) -> CandidateRecord:
    return CandidateRecord(
        raw_text=text,
        name=extract_name(text),
        email=extract_email(text),
        phone=extract_phone(text),
        skills=extract_skills(text),
        years_experience=extract_years_experience(text),
        industry=detect_industry(text),
    )
