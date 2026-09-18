import datetime
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.parsing import (
    extract_email,
    extract_name,
    extract_phone,
    extract_skills,
    extract_years_experience,
    parse_candidate,
)
from app.rubrics import detect_industry


def test_extract_email():
    assert extract_email("Contact: alex.morgan@example.com please") == "alex.morgan@example.com"
    assert extract_email("no email here") is None


def test_extract_name_title_case_line():
    text = "Alex Morgan\nalex.morgan@example.com\nSenior Software Engineer\n"
    assert extract_name(text) == "Alex Morgan"


def test_extract_name_ignores_lines_with_digits():
    text = "555 1234\nAlex Morgan\nalex@example.com\n"
    assert extract_name(text) == "Alex Morgan"


def test_extract_phone():
    text = "Alex Morgan\nPhone: +1 415-555-0100\nalex@example.com\n"
    assert extract_phone(text) is not None


def test_extract_skills_matches_rubric_keywords():
    text = "Experience with Kubernetes, AWS and CI/CD pipelines, mentoring junior engineers."
    skills = extract_skills(text)
    assert "Kubernetes" in skills
    assert "AWS" in skills
    assert "CI/CD" in skills
    assert "Mentoring" in skills


def test_extract_years_experience():
    text = "Senior Engineer, Acme Corp, 2018 - Present\nJunior Engineer, Beta Inc, 2014 - 2018"
    assert extract_years_experience(text) == datetime.date.today().year - 2014


def test_detect_industry_software():
    text = "Kubernetes AWS System Design Observability Microservices"
    industry = detect_industry(text)
    assert industry.key == "software"


def test_parse_candidate_end_to_end():
    text = (
        "Alex Morgan\n"
        "alex.morgan@example.com\n"
        "+1 415-555-0100\n"
        "Senior Software Engineer\n"
        "2018 - Present: distributed systems, Kubernetes, AWS, CI/CD, mentoring.\n"
        "2014 - 2018: Junior Engineer.\n"
    )
    record = parse_candidate(text)
    assert record.name == "Alex Morgan"
    assert record.email == "alex.morgan@example.com"
    assert "Kubernetes" in record.skills
    assert record.industry is not None and record.industry.key == "software"
    assert record.years_experience == datetime.date.today().year - 2014
