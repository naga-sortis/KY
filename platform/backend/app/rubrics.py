"""
Industry keyword rubrics, ported from KY's app/src/data/industries.ts.

This is the one deliberate piece of continuity with the old KY app (see the
Provenance architecture doc's "what survives" note): the same per-industry
keyword lists that powered KY's keyword-gap analysis now seed the structured
skill-overlap signal in the matching engine below.
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class Industry:
    key: str
    label: str
    description: str
    keywords: tuple[str, ...]


INDUSTRIES: list[Industry] = [
    Industry(
        key="marketing",
        label="Marketing",
        description=(
            "Channels actually owned (SEO, paid, lifecycle, brand), every campaign tied to a "
            "measurable outcome (traffic, CAC, conversion, pipeline), fluency with the tools "
            "recruiters search for (GA4, HubSpot, Looker)."
        ),
        keywords=(
            "SEO", "Content Strategy", "GA4", "Email Marketing", "CRO", "A/B Testing",
            "Brand Strategy", "Lifecycle Marketing", "Paid Media", "HubSpot",
            "Marketing Automation", "Demand Generation", "Attribution", "Positioning",
        ),
    ),
    Industry(
        key="software",
        label="Software",
        description=(
            "The stack and scale actually operated at (languages, cloud, distributed systems), "
            "an ownership outcome per role (uptime, latency, throughput, incidents resolved), "
            "technical leadership (design docs, mentoring, on-call)."
        ),
        keywords=(
            "System Design", "AWS", "Kubernetes", "Observability", "Technical Leadership",
            "Incident Response", "Mentoring", "Open Source", "CI/CD", "Microservices",
            "API Design", "Code Review", "Scalability", "Cloud Architecture",
        ),
    ),
    Industry(
        key="sales",
        label="Sales",
        description=(
            "Deal size, segment and quota carried (SMB vs. enterprise, ACV, quota attainment), "
            "the CRM and methodology run (Salesforce, MEDDIC, discovery), quota percentage or "
            "revenue closed."
        ),
        keywords=(
            "Pipeline Management", "Salesforce", "SaaS", "Forecasting", "Deal Desk",
            "Enterprise Sales", "Discovery", "Negotiation", "Quota Attainment",
            "Account Management", "MEDDIC", "Prospecting", "Territory Planning", "Renewals",
        ),
    ),
    Industry(
        key="product",
        label="Product",
        description=(
            "The product surface owned (0-to-1, growth, platform), a research/data method "
            "(user research, A/B testing, SQL, cohorts) behind decisions, outcomes in user or "
            "business metrics (activation, retention, revenue)."
        ),
        keywords=(
            "Roadmapping", "A/B Testing", "SQL", "User Research", "Onboarding",
            "Cohort Analysis", "GTM", "OKRs", "Prioritization", "Stakeholder Management",
            "Product Analytics", "Discovery", "North Star Metric", "Experimentation",
        ),
    ),
    Industry(
        key="design",
        label="Design",
        description=(
            "Discipline and domain (product, brand, motion; fintech, mobile), craft with the "
            "tools recruiters expect (Figma, prototyping, design systems), shipped volume and "
            "validated results (usability testing, accessibility, conversion lift)."
        ),
        keywords=(
            "Design Systems", "Figma", "Prototyping", "Usability Testing", "Accessibility",
            "Motion Design", "Design Tokens", "Developer Handoff", "User Research",
            "Wireframing", "Information Architecture", "Visual Design", "Design Ops",
            "Interaction Design",
        ),
    ),
    Industry(
        key="finance",
        label="Finance",
        description=(
            "The specialty (FP&A, RevOps, M&A, controllership), scale owned (ARR, budget size, "
            "headcount modeled), fluency with financial modeling, IFRS/GAAP, Excel/SQL."
        ),
        keywords=(
            "FP&A", "P&L", "Budgeting", "RevOps", "M&A Modeling", "IFRS", "Cash Flow",
            "Unit Economics", "Financial Modeling", "Forecasting", "GAAP", "Variance Analysis",
            "Treasury", "Investor Relations",
        ),
    ),
    Industry(
        key="operations",
        label="Operations",
        description=(
            "The function owned (supply chain, logistics, RevOps, facilities), scope "
            "quantified (hubs, volume, headcount, budget), efficiency or cost numbers "
            "(cycle time, cost reduction, error rate)."
        ),
        keywords=(
            "Process Improvement", "Lean", "Supply Chain", "ERP", "Vendor Management",
            "KPI Dashboards", "SOPs", "Capacity Planning", "Six Sigma", "Inventory Management",
            "Logistics", "Cross-Functional Leadership", "Cost Reduction", "Change Management",
        ),
    ),
    Industry(
        key="education",
        label="Education",
        description=(
            "Subject, level and program owned (AP/IB, K-12, EdTech), a teaching or design "
            "method (differentiated instruction, curriculum design, data-driven coaching), a "
            "student or program outcome (pass rate, adoption, growth)."
        ),
        keywords=(
            "Curriculum Design", "IEP", "EdTech", "Differentiated Instruction",
            "Classroom Management", "Data Literacy", "AP/IB", "Coaching", "Student Assessment",
            "Instructional Design", "Professional Development", "Learning Outcomes",
            "Special Education", "Curriculum Alignment",
        ),
    ),
]

ALL_KEYWORDS: list[str] = sorted({kw for ind in INDUSTRIES for kw in ind.keywords})


def detect_industry(text: str) -> Industry:
    """Best-effort industry match by keyword frequency — same approach as KY's detectIndustry()."""
    lowered = text.lower()
    best = INDUSTRIES[0]
    best_score = -1
    for ind in INDUSTRIES:
        score = sum(lowered.count(kw.lower()) for kw in ind.keywords)
        if score > best_score:
            best_score = score
            best = ind
    return best
