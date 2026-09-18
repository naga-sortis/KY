import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from app.matching import ScoringProfile, rank_candidates
from app.parsing import parse_candidate

JD_SOFTWARE = (
    "We are hiring a Senior Software Engineer with experience in Kubernetes, AWS, "
    "distributed systems and CI/CD. Mentoring experience is a plus."
)

CANDIDATE_STRONG = (
    "Alex Morgan\nalex@example.com\nSenior Software Engineer\n"
    "2018 - Present: built distributed systems on Kubernetes and AWS, owned CI/CD "
    "pipelines, mentored three junior engineers."
)

CANDIDATE_WEAK = (
    "Priya Chandran\npriya@example.com\nMarketing Manager\n"
    "2019 - Present: ran SEO and email marketing campaigns, GA4 dashboards, HubSpot."
)


def test_strong_candidate_outranks_weak_candidate():
    profile = ScoringProfile(
        must_have_skills=("Kubernetes", "AWS", "CI/CD"),
        nice_to_have_skills=("Mentoring",),
    )
    candidates = [parse_candidate(CANDIDATE_WEAK), parse_candidate(CANDIDATE_STRONG)]
    ranked = rank_candidates(JD_SOFTWARE, candidates, profile)

    assert ranked[0].candidate_index == 1  # the strong (software) candidate, in index-1 slot
    assert ranked[0].score > ranked[1].score
    assert "Kubernetes" in ranked[0].must_have_matched
    assert ranked[0].must_have_missing == []


def test_missing_must_have_is_reported():
    profile = ScoringProfile(must_have_skills=("Kubernetes", "Terraform"))
    candidates = [parse_candidate(CANDIDATE_STRONG)]
    ranked = rank_candidates(JD_SOFTWARE, candidates, profile)

    assert "Terraform" in ranked[0].must_have_missing
    assert "Kubernetes" in ranked[0].must_have_matched


def test_scores_are_bounded_0_to_100():
    profile = ScoringProfile(must_have_skills=("Kubernetes",))
    candidates = [parse_candidate(CANDIDATE_STRONG), parse_candidate(CANDIDATE_WEAK)]
    ranked = rank_candidates(JD_SOFTWARE, candidates, profile)
    for r in ranked:
        assert 0 <= r.score <= 100


def test_empty_candidate_list_returns_empty():
    profile = ScoringProfile()
    assert rank_candidates(JD_SOFTWARE, [], profile) == []
