export interface Role {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface AcademicProject {
  title: string;
  institution: string;
  period: string;
  note?: string;
  bullets: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const workExperience: Role[] = [
  {
    title: 'International Operations & Automation Lead',
    company: 'Linjer',
    type: 'Full-time',
    period: 'Sep 2025 – Jan 2026',
    location: 'London, UK · Hybrid',
    bullets: [
      'Led CX and operations automation initiatives, reducing manual handling time per task by ~40% and enabling scalable returns, refunds, and exception workflows across regions.',
      'Optimised a returns & post-purchase revenue stack, generating six-figure incremental revenue through exchanges, store credit incentives, and upsell flows while lowering refund leakage.',
      'Drove operational cost recovery through data & automation — invoice reconciliation, SEO, PageSpeed audits, and LLM-ready content pipelines (llm.txt) that increased content reach by ~32%.',
    ],
  },
  {
    title: 'Asset Performance Analytics Intern',
    company: 'Baker Hughes',
    type: 'Internship',
    period: 'Jun 2022 – Aug 2022',
    location: 'Dubai, UAE · Hybrid',
    bullets: [
      'Led creation of thermodynamic performance monitoring and diagnostic tools, significantly boosting operational efficiency.',
      'Directed development of advanced thermodynamic monitoring systems for energy sector equipment, resulting in a ~50% increase in design throughput.',
      'Collaborated with cross-functional teams to integrate monitoring solutions with existing systems, ensuring seamless deployment and adoption.',
    ],
  },
  {
    title: 'Teaching Assistant — Control Engineering',
    company: 'American University of Beirut',
    type: 'Part-time',
    period: 'Sep 2021 – Dec 2021',
    location: 'Beirut, Lebanon',
    bullets: [
      'Wrote customer specifications and requirements for a two-phase control systems course project.',
      'Instructed students in MATLAB-based controller design (frequency response, root locus, PID) for a robotic arm simulation.',
      'Assessed and graded submissions for 40+ students.',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'MSc — Control and Optimisation',
    institution: 'Imperial College London',
    period: '',//'2023 – 2024',
  },
  {
    degree: 'BEng — Electrical & Computer Engineering',
    institution: 'American University of Beirut',
    period: '',//'2019 – 2023',
  },
];

export const academicProjects: AcademicProject[] = [
  {
    title: 'MSc Thesis — Robust Control of Inverters for Renewable Energy Systems',
    institution: 'Imperial College London',
    period: '',//'Dec 2023 – Sep 2024',
    bullets: [
      'Applied multi-objective robust control to design controllers for grid-interface inverters, balancing reference tracking, control effort, and robustness.',
      'Developed a frequency-specific control framework (FFBRL) that improved grid stability and reduced control effort by 56% versus traditional H∞ and PI controllers.',
      'Analysed trade-offs in robust control metrics and developed new design heuristics for frequency-domain stability vs. time-domain performance.',
    ],
  },
  {
    title: 'Final Year Project — Smart Vital Sensors',
    institution: 'American University of Beirut',
    period: '',//'Sep 2022 – Jun 2023',
    note: 'Accepted into iMETA 2023 conference',
    bullets: [
      'Designed a custom VR rollercoaster scene and exposed 50+ participants to controlled optic-flow conditions while measuring physiological parameters and cybersickness (SSQ).',
      'Built a cross-platform data-logging app using Flutter and Firebase to collect, store, and visualise readings in a dashboard.',
      'Developed ML models (KNN, Logistic Regression, Random Forests) for binary and ternary cybersickness classification, achieving 85% accuracy.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: 'Responsible Conduct of Research for Engineers',
    issuer: 'CITI Program',
    date: 'Feb 2023',
    credentialId: '52650612',
  },
];
