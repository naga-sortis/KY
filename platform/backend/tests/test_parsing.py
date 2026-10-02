import datetime
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.parsing import (
    extract_current_role_text,
    extract_email,
    extract_name,
    extract_phone,
    extract_skills,
    extract_years_experience,
    is_currently_employed,
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


def test_is_currently_employed_true_for_open_date_range():
    assert is_currently_employed("Senior Engineer, Acme Corp, 2021 - Present") is True
    assert is_currently_employed("Marketing Lead, Beta Inc, 2020 - Current") is True


def test_is_currently_employed_false_when_latest_role_has_an_end_date():
    text = "Senior Engineer, Acme Corp, 2015 - 2018\nJunior Engineer, Beta Inc, 2012 - 2015"
    assert is_currently_employed(text) is False


def test_extract_current_role_text_stops_before_the_previous_job():
    text = (
        "2021 - Present: Senior Data Scientist at Acme Corp. Built PyTorch pipelines, "
        "led a team of 3.\n"
        "2018 - 2021: Marketing Coordinator at Beta Inc. Ran email campaigns, GA4 reporting."
    )
    current = extract_current_role_text(text)
    assert current is not None
    assert "PyTorch" in current
    assert "Marketing Coordinator" not in current
    assert "email campaigns" not in current


def test_extract_current_role_text_is_none_when_nothing_is_ongoing():
    text = "2015 - 2018: Senior Engineer at Acme Corp, Kubernetes and AWS."
    assert extract_current_role_text(text) is None


def test_parse_candidate_flags_stale_experience_as_not_currently_relevant():
    # A candidate who did this kind of work years ago but has since moved to
    # an unrelated role should not be read as "currently a software match" --
    # the whole point of separating current-role signal from whole-resume
    # keyword presence (the HR-screener distinction the feature exists for).
    text = (
        "Jordan Lee\n"
        "jordan.lee@example.com\n"
        "2022 - Present: Marketing Manager at Globex. Runs SEO, email marketing and "
        "HubSpot campaigns.\n"
        "2016 - 2020: Software Engineer at Acme Corp. Kubernetes, AWS, CI/CD, "
        "distributed systems.\n"
    )
    record = parse_candidate(text)
    assert record.currently_employed is True
    # Whole-resume skills still see the old software keywords (unchanged legacy field).
    assert "Kubernetes" in record.skills
    # But the current-role signal reflects only the active job.
    assert "Kubernetes" not in record.current_role_skills
    assert "HubSpot" in record.current_role_skills
    assert record.current_role_industry is not None
    assert record.current_role_industry.key == "marketing"
