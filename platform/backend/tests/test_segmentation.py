import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.segmentation import group_pages, segment_and_parse_file
from pdf_fixtures import make_pdf


CANDIDATE_A = [
    "Alex Morgan",
    "alex.morgan@example.com",
    "Senior Software Engineer",
    "2018 - Present: Kubernetes, AWS, CI/CD",
]
CANDIDATE_A_PAGE_2 = [
    "continued experience",
    "2014 - 2018: Junior Engineer",
    "Skills: Kubernetes, AWS",
]
CANDIDATE_B = [
    "Priya Chandran",
    "priya.chandran@example.com",
    "Marketing Manager",
    "2019 - Present: SEO, GA4, HubSpot",
]


def test_group_pages_splits_on_new_candidate_header():
    pages = [
        "Alex Morgan\nalex.morgan@example.com\nSenior Engineer",
        "continued\nmore experience text",
        "Priya Chandran\npriya.chandran@example.com\nMarketing Manager",
    ]
    groups = group_pages(pages)
    assert groups == [[0, 1], [2]]


def test_group_pages_single_candidate_stays_together():
    pages = [
        "Alex Morgan\nalex.morgan@example.com\nSenior Engineer",
        "continued\nmore experience text",
        "even more continued text, no header here",
    ]
    groups = group_pages(pages)
    assert groups == [[0, 1, 2]]


def test_segment_and_parse_pdf_splits_two_candidates():
    pdf_bytes = make_pdf([CANDIDATE_A, CANDIDATE_A_PAGE_2, CANDIDATE_B])
    candidates = segment_and_parse_file("bulk_export.pdf", pdf_bytes)
    assert len(candidates) == 2
    names = {c.name for c in candidates}
    assert names == {"Alex Morgan", "Priya Chandran"}
    software_candidate = next(c for c in candidates if c.name == "Alex Morgan")
    assert "Kubernetes" in software_candidate.skills


def test_segment_and_parse_txt_is_single_candidate():
    data = "Alex Morgan\nalex@example.com\nKubernetes, AWS".encode("utf-8")
    candidates = segment_and_parse_file("resume.txt", data)
    assert len(candidates) == 1
    assert candidates[0].name == "Alex Morgan"
