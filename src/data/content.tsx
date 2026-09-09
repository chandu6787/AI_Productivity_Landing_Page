import {
  Bot,
  Workflow,
  Users,
  BarChart3,
  ShieldCheck,
  Zap,
  Rocket,
  Building2,
  Target,
  Globe,
} from 'lucide-react';

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const features = [
  {
    icon: Bot,
    title: 'AI Task Automation',
    description: 'Let NOVA handle repetitive work. Smart automation routes, assigns, and completes tasks based on your team’s patterns.',
  },
  {
    icon: Workflow,
    title: 'Visual Workflows',
    description: 'Build powerful multi-step workflows with a drag-and-drop canvas. No code required — just connect triggers and actions.',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Live cursors, instant comments, and shared boards keep everyone in sync, whether in-office or across time zones.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track velocity, bottlenecks, and team capacity with dashboards that update in real time and export to any format.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, GDPR compliant, end-to-end encryption, and granular role-based access controls built in from day one.',
  },
  {
    icon: Zap,
    title: 'Instant Integrations',
    description: 'Connect 200+ tools including Slack, GitHub, Notion, Figma, and Google Workspace in a single click.',
  },
];

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description: 'Link your existing stack in minutes. NOVA integrates with 200+ apps out of the box, no setup wizard needed.',
  },
  {
    number: '02',
    title: 'Automate Your Workflows',
    description: 'Use AI suggestions or the visual builder to create workflows that route tasks, send updates, and eliminate busywork.',
  },
  {
    number: '03',
    title: 'Collaborate in Real Time',
    description: 'Bring your team onto shared boards with live presence, comments, and instant notifications across every device.',
  },
  {
    number: '04',
    title: 'Measure & Optimize',
    description: 'Track performance with real-time dashboards, identify bottlenecks, and let NOVA suggest improvements automatically.',
  },
];

export const stats = [
  { value: 10000, suffix: '+', label: 'Teams Onboard' },
  { value: 2, suffix: 'M+', label: 'Tasks Automated' },
  { value: 99, suffix: '%', label: 'Uptime SLA' },
  { value: 150, suffix: '+', label: 'Countries Served' },
];

export const solutions = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Move fast with lightweight boards, AI-assisted sprint planning, and integrations that scale from 2 to 200 people.',
    points: ['Quick onboarding', 'Free for first 5 seats', 'AI sprint planning'],
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Governance, audit trails, and SSO for organizations that need control without sacrificing speed or flexibility.',
    points: ['SSO & SCIM', 'Audit logs', 'Dedicated CSM'],
  },
  {
    icon: Target,
    title: 'Agencies',
    description: 'Manage multiple client projects in shared workspaces with white-label dashboards and per-client billing.',
    points: ['Client portals', 'White-label reports', 'Time tracking'],
  },
  {
    icon: Globe,
    title: 'Remote Teams',
    description: 'Async-first features like video comments, timezone-aware scheduling, and offline mode keep distributed teams aligned.',
    points: ['Async video notes', 'Timezone awareness', 'Offline mode'],
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP Engineering, Linear Bay',
    quote: 'NOVA replaced four separate tools for us. The AI automation alone saves my team 12 hours a week — it’s like having an extra engineer.',
    image: 'https://images.pexels.com/photos/5197205/pexels-photo-5197205.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Marcus Reid',
    role: 'Head of Operations, Brightloop',
    quote: 'We rolled NOVA out to 300 people in a single afternoon. The adoption rate was the highest of any tool we’ve ever introduced.',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'Aisha Patel',
    role: 'Founder & CEO, Lumora',
    quote: 'The analytics dashboards give me a pulse on the entire company in seconds. NOVA is the first thing I open every morning.',
    image: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    name: 'David Okafor',
    role: 'Product Lead, Northwind',
    quote: 'Our remote team finally feels connected. The live boards and async video comments bridged a 9-hour timezone gap effortlessly.',
    image: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    description: 'Everything a small team needs to get organized and ship faster.',
    monthly: 0,
    annual: 0,
    features: [
      'Up to 5 team members',
      '3 active workflows',
      'Basic analytics dashboard',
      '10 integrations',
      'Community support',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Advanced automation and analytics for growing, ambitious teams.',
    monthly: 24,
    annual: 19,
    features: [
      'Up to 50 team members',
      'Unlimited workflows',
      'Advanced analytics & reports',
      '200+ integrations',
      'AI task automation',
      'Priority support',
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Governance, security, and support tailored for large organizations.',
    monthly: null,
    annual: null,
    features: [
      'Unlimited team members',
      'Custom AI model training',
      'SSO, SCIM & audit logs',
      'Dedicated success manager',
      '99.99% uptime SLA',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'You get full access to every Pro feature for 14 days — no credit card required. At the end of the trial you can choose a plan or drop down to the free Starter tier. Your data is never deleted during a downgrade.',
  },
  {
    question: 'Can I change plans or cancel at any time?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel from your billing settings at any moment. Upgrades take effect immediately and we prorate the difference. Cancellations stop future billing — no questions asked.',
  },
  {
    question: 'Is my data secure with NOVA?',
    answer: 'Yes. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit with TLS 1.3 and at rest with AES-256. We offer granular role-based access controls and full audit trails on Enterprise plans.',
  },
  {
    question: 'Which tools does NOVA integrate with?',
    answer: 'NOVA connects to 200+ apps including Slack, GitHub, GitLab, Notion, Figma, Google Workspace, Microsoft 365, Jira, Linear, and Zendesk. You can also build custom integrations with our REST API and webhooks.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'We provide a 50% discount for registered nonprofits and educational institutions. Reach out to our sales team with your credentials and we’ll set you up within one business day.',
  },
  {
    question: 'What does the AI task automation actually do?',
    answer: 'NOVA learns from your team’s patterns to automatically route tasks to the right person, suggest due dates based on historical velocity, draft status updates, and flag at-risk projects before they slip.',
  },
];

export const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Tutorials', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'DPA', 'Cookies'],
};
