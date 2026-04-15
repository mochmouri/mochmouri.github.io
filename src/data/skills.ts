export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Automation & Ops',
    items: [
      'Workflow Automation',
      'Process Optimisation',
      'LLM Integration',
      'Returns & Post-Purchase Systems',
      'CRM Tooling',
    ],
  },
  {
    category: 'Data & Analytics',
    items: ['Python', 'SQL', 'Pandas', 'Data Visualisation', 'Machine Learning', 'scikit-learn'],
  },
  {
    category: 'Engineering & Control',
    items: ['MATLAB', 'Simulink', 'Robust Control (H∞ / PID)', 'Signal Processing', 'Power Electronics'],
  },
  {
    category: 'Software & Dev',
    items: ['Flutter', 'Firebase', 'JavaScript', 'Git'],
  },
  {
    category: 'Tools',
    items: ['PageSpeed Optimisation', 'Thermodynamic Monitoring', 'Cross-platform Development'],
  },
];
