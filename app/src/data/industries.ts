export interface HeadlinePair {
  before: string;
  after: string;
  why: string;
}

export interface Industry {
  key: string;
  label: string;
  /**
   * The benchmark rubric for this industry — what a strong profile or resume
   * looks like. Shown in the report as the standard a resume/profile is being
   * measured against, and used as scoring/detection context before real
   * analysis runs (Phase 3).
   */
  description: string;
  keywords: string[];
  headlines: HeadlinePair[];
}

export const INDUSTRIES: Industry[] = [
  {
    key: 'marketing',
    label: 'Marketing',
    description:
      'A strong Marketing profile or resume names the channels actually owned (SEO, paid, lifecycle, brand), ties every campaign to a measurable outcome (traffic, CAC, conversion, pipeline), and shows fluency with the tools recruiters search for (GA4, HubSpot, Looker) rather than listing "digital marketing" as a buzzword.',
    keywords: [
      'SEO',
      'Content Strategy',
      'GA4',
      'Email Marketing',
      'CRO',
      'A/B Testing',
      'Brand Strategy',
      'Lifecycle Marketing',
      'Paid Media',
      'HubSpot',
      'Marketing Automation',
      'Demand Generation',
      'Attribution',
      'Positioning',
    ],
    headlines: [
      {
        before: 'Marketing enthusiast looking for new opportunities',
        after: 'Marketing Manager | Growth & Content for DTC Brands | +142% organic traffic in 12 months',
        why: 'Recruiters search by role, niche and outcome. This headline matches all three — and the number gives it proof.',
      },
      {
        before: 'Digital marketing / social media / content',
        after: 'Content & Social Lead | B2B SaaS | 3.2M impressions across 12 channels',
        why: 'Keyword soup reads as spam; role + niche + proof reads as expertise.',
      },
    ],
  },
  {
    key: 'software',
    label: 'Software',
    description:
      'A strong Software profile or resume states the stack and scale you actually operate at (languages, cloud, distributed systems), attaches an ownership outcome to each role (uptime, latency, throughput, incidents resolved), and shows technical leadership (design docs, mentoring, on-call) rather than just a list of frameworks.',
    keywords: [
      'System Design',
      'AWS',
      'Kubernetes',
      'Observability',
      'Technical Leadership',
      'Incident Response',
      'Mentoring',
      'Open Source',
      'CI/CD',
      'Microservices',
      'API Design',
      'Code Review',
      'Scalability',
      'Cloud Architecture',
    ],
    headlines: [
      {
        before: 'Software Engineer at Acme',
        after: 'Senior Software Engineer | Distributed Systems & Cloud (AWS, K8s) | 99.95% uptime',
        why: 'Your stack and the result you own should be searchable — not just your employer.',
      },
      {
        before: 'Full stack developer. Python. JS. SQL',
        after: 'Full-Stack Engineer | React & Go | Shipped 3 products used by 400k people',
        why: 'Adding the scale you have shipped turns a tool list into evidence.',
      },
    ],
  },
  {
    key: 'sales',
    label: 'Sales',
    description:
      'A strong Sales profile or resume states the deal size, segment and quota you carried (SMB vs. enterprise, ACV, quota attainment), names the CRM and methodology you run (Salesforce, MEDDIC, discovery), and proves performance with a number every recruiter checks first — quota percentage or revenue closed.',
    keywords: [
      'Pipeline Management',
      'Salesforce',
      'SaaS',
      'Forecasting',
      'Deal Desk',
      'Enterprise Sales',
      'Discovery',
      'Negotiation',
      'Quota Attainment',
      'Account Management',
      'MEDDIC',
      'Prospecting',
      'Territory Planning',
      'Renewals',
    ],
    headlines: [
      {
        before: 'Sales professional seeking challenges',
        after: 'Enterprise AE | SaaS $1–10M ACV | 128% of quota for 3 consecutive years',
        why: 'Buyers and recruiters both filter on deal size and quota performance.',
      },
      {
        before: 'Business development / partnerships',
        after: 'Partnerships Lead | Cloud & SaaS | 14 strategic deals closed in 2025',
        why: '"BD" is vague; the industry plus a closed count makes you specific and memorable.',
      },
    ],
  },
  {
    key: 'product',
    label: 'Product',
    description:
      'A strong Product profile or resume names the product surface owned (0-to-1, growth, platform), shows a research/data method (user research, A/B testing, SQL, cohorts) behind every decision, and reports outcomes in user or business metrics (activation, retention, revenue) rather than feature ship lists.',
    keywords: [
      'Roadmapping',
      'A/B Testing',
      'SQL',
      'User Research',
      'Onboarding',
      'Cohort Analysis',
      'GTM',
      'OKRs',
      'Prioritization',
      'Stakeholder Management',
      'Product Analytics',
      'Discovery',
      'North Star Metric',
      'Experimentation',
    ],
    headlines: [
      {
        before: 'Product Manager',
        after: 'Product Manager | B2B Onboarding | Cut time-to-value from 14d to 3d',
        why: 'A role plus a metric outcome shows you ship — not just manage.',
      },
      {
        before: 'PM looking for great teams',
        after: 'Senior PM | 0-to-1 Consumer Apps | 2.1M installs across 3 launches',
        why: 'Recruiters search for the problems you have solved, not the teams you want.',
      },
    ],
  },
  {
    key: 'design',
    label: 'Design',
    description:
      'A strong Design profile or resume names the discipline and domain (product, brand, motion; fintech, mobile), shows craft with the tools recruiters expect (Figma, prototyping, design systems), and proves impact with shipped volume and validated results (usability testing, accessibility, conversion lift) rather than a portfolio link alone.',
    keywords: [
      'Design Systems',
      'Figma',
      'Prototyping',
      'Usability Testing',
      'Accessibility',
      'Motion Design',
      'Design Tokens',
      'Developer Handoff',
      'User Research',
      'Wireframing',
      'Information Architecture',
      'Visual Design',
      'Design Ops',
      'Interaction Design',
    ],
    headlines: [
      {
        before: 'UX/UI designer',
        after: 'Product Designer | Fintech & Mobile | 40+ shipped flows, 2 design systems',
        why: 'Discipline + domain + volume of shipped work is what hiring managers search.',
      },
      {
        before: 'Graphic designer | open to work',
        after: 'Brand & Product Designer | Identity systems with 3 award nominations',
        why: 'Drop "open to work" into your headline; state your craft and your proof instead.',
      },
    ],
  },
  {
    key: 'finance',
    label: 'Finance',
    description:
      'A strong Finance profile or resume names the specialty (FP&A, RevOps, M&A, controllership), states the scale owned (ARR, budget size, headcount modeled) and shows fluency with the frameworks and tools finance recruiters search for (financial modeling, IFRS/GAAP, Excel/SQL) rather than a generic "finance professional" label.',
    keywords: [
      'FP&A',
      'P&L',
      'Budgeting',
      'RevOps',
      'M&A Modeling',
      'IFRS',
      'Cash Flow',
      'Unit Economics',
      'Financial Modeling',
      'Forecasting',
      'GAAP',
      'Variance Analysis',
      'Treasury',
      'Investor Relations',
    ],
    headlines: [
      {
        before: 'Finance manager',
        after: 'Finance Manager | SaaS RevOps | Built P&L for 3 product lines, $12M ARR',
        why: 'Niche (RevOps) plus scale (ARR) separates you from 90% of "finance" profiles.',
      },
      {
        before: 'Looking for finance opportunities',
        after: 'Senior Financial Analyst | FP&A & M&A Modeling | Big 4 to SaaS',
        why: 'Career trajectory plus speciality is the fastest way to be picked from search.',
      },
    ],
  },
  {
    key: 'operations',
    label: 'Operations',
    description:
      'A strong Operations profile or resume names the function owned (supply chain, logistics, RevOps, facilities), quantifies scope (hubs, volume, headcount, budget) and proves impact with efficiency or cost numbers (cycle time, cost reduction, error rate) rather than a list of responsibilities.',
    keywords: [
      'Process Improvement',
      'Lean',
      'Supply Chain',
      'ERP',
      'Vendor Management',
      'KPI Dashboards',
      'SOPs',
      'Capacity Planning',
      'Six Sigma',
      'Inventory Management',
      'Logistics',
      'Cross-Functional Leadership',
      'Cost Reduction',
      'Change Management',
    ],
    headlines: [
      {
        before: 'Operations manager',
        after: 'Operations Lead | Logistics & 3PL | 38% cost reduction across 5 hubs',
        why: 'Operations credibility lives in the number, not the title.',
      },
      {
        before: 'Supply chain / logistics',
        after: 'Supply Chain Manager | Cold-chain, EU | 120k units/month, zero compliance incidents',
        why: 'Scope (region, volume) and risk ownership (compliance) are your differentiators.',
      },
    ],
  },
  {
    key: 'education',
    label: 'Education',
    description:
      'A strong Education profile or resume names the subject, level and program owned (AP/IB, K-12, EdTech), shows a teaching or design method (differentiated instruction, curriculum design, data-driven coaching) and reports a student or program outcome (pass rate, adoption, growth) rather than years of tenure alone.',
    keywords: [
      'Curriculum Design',
      'IEP',
      'EdTech',
      'Differentiated Instruction',
      'Classroom Management',
      'Data Literacy',
      'AP/IB',
      'Coaching',
      'Student Assessment',
      'Instructional Design',
      'Professional Development',
      'Learning Outcomes',
      'Special Education',
      'Curriculum Alignment',
    ],
    headlines: [
      {
        before: 'Teacher',
        after: 'High-School Physics Teacher | AP Program Lead | 94% pass rate, 5 yrs',
        why: 'Subject + program + student outcome — the three things school leaders search.',
      },
      {
        before: 'Looking for teaching positions',
        after: 'Learning Designer | K-12 EdTech | Curriculum used by 60+ schools',
        why: 'The move into ed-tech is a differentiator — say it explicitly.',
      },
    ],
  },
];
