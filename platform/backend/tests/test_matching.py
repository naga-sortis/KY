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


def test_active_role_bonus_defaults_to_zero_and_does_not_change_scores():
    # Regression guard: omitting the new field must reproduce the exact
    # scores from before this feature existed.
    profile = ScoringProfile(must_have_skills=("Kubernetes", "AWS", "CI/CD"))
    candidates = [parse_candidate(CANDIDATE_STRONG), parse_candidate(CANDIDATE_WEAK)]
    ranked = rank_candidates(JD_SOFTWARE, candidates, profile)
    baseline = rank_candidates(JD_SOFTWARE, candidates, ScoringProfile(
        must_have_skills=("Kubernetes", "AWS", "CI/CD"), active_role_bonus=0.0
    ))
    assert [r.score for r in ranked] == [r.score for r in baseline]


def test_active_in_similar_role_flag_reflects_current_position_only():
    # Someone currently doing software work scores "active"; someone whose
    # only software history is in a past, closed-out role does not, even
    # though both resumes contain identical software keywords somewhere.
    currently_active = parse_candidate(CANDIDATE_STRONG)  # 2018 - Present, software
    career_changer = parse_candidate(
        "Sam Rivera\nsam@example.com\n"
        "2022 - Present: Marketing Manager at Globex. SEO, email marketing, HubSpot.\n"
        "2015 - 2020: Software Engineer at Acme Corp. Kubernetes, AWS, CI/CD."
    )
    profile = ScoringProfile(must_have_skills=("Kubernetes", "AWS", "CI/CD"))
    ranked = rank_candidates(JD_SOFTWARE, [currently_active, career_changer], profile)

    by_index = {r.candidate_index: r for r in ranked}
    assert by_index[0].active_in_similar_role is True
    assert by_index[1].active_in_similar_role is False
    # Stale keyword presence still counts for the legacy must-have score...
    assert "Kubernetes" in by_index[1].must_have_matched


def test_active_role_bonus_can_surface_a_currently_active_candidate_above_a_stale_one():
    # The actual "HR brain" behavior the feature exists for: given a close
    # call between someone doing this work right now and someone who used to,
    # opting into the bonus should be able to flip the ordering toward "now."
    currently_active_weaker_text = parse_candidate(
        "Sam Rivera\nsam@example.com\n"
        "2021 - Present: Backend Engineer at Acme Corp. Kubernetes, AWS, CI/CD."
    )
    stale_stronger_text = parse_candidate(
        "Jordan Lee\njordan@example.com\n"
        "2023 - Present: Marketing Manager at Globex. SEO, email marketing, HubSpot, GA4.\n"
        "2015 - 2020: Senior Software Engineer at Beta Corp. Kubernetes, AWS, CI/CD, "
        "distributed systems, system design, observability, microservices, mentoring."
    )
    profile = ScoringProfile(
        must_have_skills=("Kubernetes", "AWS", "CI/CD"),
        nice_to_have_skills=("Mentoring", "System Design", "Observability", "Microservices"),
        active_role_bonus=0.3,
    )
    ranked = rank_candidates(JD_SOFTWARE, [stale_stronger_text, currently_active_weaker_text], profile)
    assert ranked[0].candidate_index == 1  # the currently-active candidate now ranks first
