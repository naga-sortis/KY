"""
Multi-CV file segmentation — the InfoJobs-bulk-export problem from the
architecture doc: one downloaded file, several candidates appended with no
delimiter.

Heuristic: a page that opens with both a name-shaped line and an email
address near its top is treated as the start of a new candidate; any page
without that combined signal is treated as a continuation of the previous
candidate. This is a real assumption worth stating plainly: it works well for
one-resume-per-page-or-more exports with a header block (the common case),
and can mis-split unusual two-column or image-heavy templates. Swapping in a
trained layout-segmentation model is the documented production upgrade path
— see the architecture doc, stage 2.
"""

from __future__ import annotations

from .parsing import (
    CandidateRecord,
    extract_email,
    extract_name,
    extract_pages_from_pdf,
    extract_text_from_docx,
    extract_text_from_txt,
    parse_candidate,
)


def _looks_like_new_candidate(page_text: str) -> bool:
    head = "\n".join(page_text.splitlines()[:8])
    return extract_email(head) is not None and extract_name(page_text) is not None


def group_pages(pages: list[str]) -> list[list[int]]:
    """Groups page indices into one group per detected candidate, in order."""
    groups: list[list[int]] = []
    current: list[int] = []
    for i, page_text in enumerate(pages):
        if current and _looks_like_new_candidate(page_text):
            groups.append(current)
            current = [i]
        else:
            current.append(i)
    if current:
        groups.append(current)
    return groups


def segment_and_parse_file(filename: str, data: bytes) -> list[CandidateRecord]:
    """Dispatches by extension. Only PDFs are segmented (page-aware); DOCX/TXT are one candidate each."""
    lower = filename.lower()
    if lower.endswith(".pdf"):
        pages = extract_pages_from_pdf(data)
        groups = group_pages(pages)
        return [parse_candidate("\n".join(pages[i] for i in group)) for group in groups]
    if lower.endswith(".docx"):
        return [parse_candidate(extract_text_from_docx(data))]
    if lower.endswith(".txt"):
        return [parse_candidate(extract_text_from_txt(data))]
    raise ValueError(f"Unsupported file type: {filename}")
