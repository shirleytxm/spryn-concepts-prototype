// Mock data for the AI Product Management Tool

export type MilestonePhase =
  | 'shaping'
  | 'design-ready'
  | 'designing'
  | 'development-ready'
  | 'development'
  | 'uat';

export interface Project {
  id: string;
  name: string;
  progress: number;
  image: string;
  updatedAt: string;
  createdAt: string;
  members: { avatar: string; name: string }[];
  extraMembers: number;
  color: string;
}

export interface Milestone {
  id: string;
  name: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
  startDate: string;
  endDate: string;
  sprintDays: number;
  storyPoints: number;
  model: string;
  phase: MilestonePhase;
  deliverables: Deliverable[];
  // Design phase
  screenCount?: number;
  storyCount?: number;
  generationActivity?: string;
  // Screen designs (shown in dev-ready + uat)
  screenDesigns?: { name: string; image: string }[];
  // Development active
  developmentActivities?: { title: string; subtitle: string }[];
  // UAT completed
  previewUrl?: string;
  milestoneSummary?: string;
  whatChanged?: string[];
  storiesCompleted?: string[];
  githubPR?: { number: number; branch: string };
}

export interface Deliverable {
  id: string;
  name: string;
  effort: 'High' | 'Medium' | 'Low';
  status?: 'completed' | 'in-progress' | 'not-started';
  activeAgents?: string[];
  userStory?: { asA: string; iWant: string; soThat: string };
  acceptanceCriteria: { text: string; done: boolean; inProgress?: boolean }[];
  uiDesigns?: { name: string; image: string }[];
}

export interface Artifact {
  id: string;
  name: string;
  type: 'spec' | 'roadmap' | 'issues' | 'preview';
  category: 'specifications' | 'project-management' | 'previews';
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'agent' | 'user';
  content: string;
  timestamp: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  task: string;
}

export const agents: Agent[] = [
  { id: 'pm', name: 'John', role: 'Product Manager', task: 'Build a PRD' },
  { id: 'arch', name: 'Sarah', role: 'Architect', task: 'Design System Architecture' },
  { id: 'ux', name: 'Mike', role: 'UX Designer', task: 'Create UX Specifications' },
];

export const projects: Project[] = [
  {
    id: 'spryn',
    name: 'Spryn',
    progress: 63,
    image: 'https://images.unsplash.com/photo-1708518804744-51c3ff8e5c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaCUyMHN0YXJ0dXAlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MjA4MDQ3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    updatedAt: 'about 3 months ago',
    createdAt: 'about 4 months ago',
    members: [
      { avatar: 'https://i.pravatar.cc/48?img=1', name: 'Alice' },
      { avatar: 'https://i.pravatar.cc/48?img=2', name: 'Bob' },
      { avatar: 'https://i.pravatar.cc/48?img=3', name: 'Charlie' },
    ],
    extraMembers: 3,
    color: '#ffb625',
  },
  {
    id: 'astravis',
    name: 'Astravis',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1715079166919-268ae39c2dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2FsaWJyYXRpb24lMjBkYXNoYm9hcmQlMjBVSXxlbnwxfHx8fDE3NzIwODA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    updatedAt: 'about 3 months ago',
    createdAt: 'about 4 months ago',
    members: [
      { avatar: 'https://i.pravatar.cc/48?img=4', name: 'Dana' },
      { avatar: 'https://i.pravatar.cc/48?img=5', name: 'Eve' },
      { avatar: 'https://i.pravatar.cc/48?img=6', name: 'Frank' },
    ],
    extraMembers: 4,
    color: '#ee3a3a',
  },
  {
    id: 'mip',
    name: 'MIP',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1673539371050-74bb976b7a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVkJTIwYWJzdHJhY3QlMjBjaGVzcyUyMHBpZWNlfGVufDF8fHx8MTc3MjA4MDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    updatedAt: 'about 3 months ago',
    createdAt: 'about 4 months ago',
    members: [
      { avatar: 'https://i.pravatar.cc/48?img=7', name: 'Grace' },
      { avatar: 'https://i.pravatar.cc/48?img=8', name: 'Hank' },
    ],
    extraMembers: 2,
    color: '#22c55e',
  },
  {
    id: 'kairo',
    name: 'Kairo',
    progress: 78,
    image: 'https://images.unsplash.com/photo-1707056789794-e130d8739de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBwbGFuZXQlMjBzcGFjZSUyMG9yYml0fGVufDF8fHx8MTc3MjA4MDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    updatedAt: 'about 3 months ago',
    createdAt: 'about 4 months ago',
    members: [
      { avatar: 'https://i.pravatar.cc/48?img=9', name: 'Ivy' },
      { avatar: 'https://i.pravatar.cc/48?img=10', name: 'Jack' },
      { avatar: 'https://i.pravatar.cc/48?img=11', name: 'Kate' },
    ],
    extraMembers: 0,
    color: '#22c55e',
  },
  {
    id: 'plus-minus-clinic',
    name: 'Plus Minus Clinic',
    progress: 23,
    image: 'https://images.unsplash.com/photo-1693834125090-4888830b9c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBjcm93biUyMGxvZ28lMjBtaW5pbWFsfGVufDF8fHx8MTc3MjA4MDQ4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    updatedAt: 'about 3 months ago',
    createdAt: 'about 4 months ago',
    members: [
      { avatar: 'https://i.pravatar.cc/48?img=12', name: 'Leo' },
      { avatar: 'https://i.pravatar.cc/48?img=13', name: 'Mia' },
      { avatar: 'https://i.pravatar.cc/48?img=14', name: 'Nina' },
    ],
    extraMembers: 1,
    color: '#ee3a3a',
  },
];

export const artifacts: Artifact[] = [
  { id: 'product-brief', name: 'Product Brief', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'prd', name: 'Product Requirements Do...', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'architecture', name: 'Architecture', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'ux-spec', name: 'UX Specifications', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'epics', name: 'Epics', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'proposal', name: 'Proposal', type: 'spec', category: 'specifications', icon: 'file-text' },
  { id: 'roadmap', name: 'Roadmap', type: 'roadmap', category: 'project-management', icon: 'gantt-chart' },
  { id: 'issues', name: 'Issues', type: 'issues', category: 'project-management', icon: 'circle-dot' },
  { id: 'design-system', name: 'Design System', type: 'preview', category: 'previews', icon: 'palette' },
  { id: 'prototype', name: 'Prototype', type: 'preview', category: 'previews', icon: 'monitor' },
];

// Shared screen design images (Figma assets)
const SCREEN_IMG_1 = 'figma:asset/4a0b625d1a14616d01c408a075f1459f85bd6c5e.png';
const SCREEN_IMG_2 = 'figma:asset/a8e0e7565684673839b7b5b3bf9c6932e53c0e10.png';
const SCREEN_IMG_3 = 'figma:asset/b8b63f1eb93b65b2e908b0d691deef97f32c3a33.png';
const SCREEN_IMG_4 = 'https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpbiUyMHNjcmVlbiUyMFVJJTIwZGVzaWduJTIwZGFya3xlbnwxfHx8fDE3NzIwODA0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080';
const SCREEN_IMG_5 = 'https://images.unsplash.com/photo-1666278749123-6cc58220fda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWdudXAlMjBmbG93JTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3MjA4MDQ4MXww&ixlib=rb-4.1.0&q=80&w=1080';

export const milestones: Milestone[] = [
  // ─── M1: UAT/Completed ──────────────────────────────────────────────────────
  {
    id: 'm1',
    name: 'M1: Infrastructure & Set Up',
    progress: 100,
    status: 'completed',
    startDate: 'Feb 10',
    endDate: 'Feb 24, 2026',
    sprintDays: 14,
    storyPoints: 6,
    model: 'Claude Opus 4.6',
    phase: 'uat',
    previewUrl: 'staging.spryn.io/m1-infrastructure-review',
    milestoneSummary:
      'Establishes the complete technical foundation for the Spryn platform including design system, routing architecture, component library, and CI/CD pipeline. All infrastructure services are live and verified.',
    whatChanged: [
      'Added src/styles/theme.css — design tokens, color palette, typography scale',
      'Added src/app/routes.ts — React Router data mode with nested route config',
      'Updated vite.config.ts — optimised build pipeline with code splitting',
      'Added .github/workflows/deploy.yml — 24 pipeline tests, all passing',
    ],
    storiesCompleted: [
      'Frontend Foundation & Design System',
      'React Router Setup & Navigation',
      'Component Library Integration',
      'CI/CD Pipeline Configuration',
    ],
    githubPR: { number: 112, branch: 'feat/m1-infrastructure-foundation' },
    screenDesigns: [
      { name: 'Design System', image: SCREEN_IMG_1 },
      { name: 'Component Library', image: SCREEN_IMG_2 },
      { name: 'Routing Overview', image: SCREEN_IMG_3 },
      { name: 'Build Pipeline', image: SCREEN_IMG_4 },
    ],
    deliverables: [
      {
        id: 'd1-1',
        name: 'Frontend Foundation & Design System',
        effort: 'Low',
        status: 'completed',
        userStory: {
          asA: 'As a developer joining the project',
          iWant: 'I want a consistent design system and Tailwind configuration in place',
          soThat: 'So that I can build UI components with shared tokens and styles without making ad-hoc decisions',
        },
        acceptanceCriteria: [
          { text: 'CLAUDE.md contains design system guidelines and color tokens', done: true },
          { text: 'Tailwind config reflects project colours/theme and builds without errors', done: true },
          { text: 'Home.tsx renders a responsive landing page at root path', done: true },
        ],
      },
      {
        id: 'd1-2',
        name: 'React Router Setup & Navigation',
        effort: 'Low',
        status: 'completed',
        userStory: {
          asA: 'As a user navigating the platform',
          iWant: 'I want smooth, predictable routing between pages',
          soThat: 'So that I can move through the app without page flashes or broken back-navigation',
        },
        acceptanceCriteria: [
          { text: 'Router is configured in data mode with nested routes', done: true },
          { text: 'All route transitions are smooth with no layout flash', done: true },
          { text: '404 not-found route is handled gracefully', done: true },
        ],
      },
      {
        id: 'd1-3',
        name: 'Component Library Integration',
        effort: 'Medium',
        status: 'completed',
        userStory: {
          asA: 'As a developer building features',
          iWant: 'I want a pre-configured component library with icons and animation support',
          soThat: 'So that I can assemble consistent, accessible UI without building from scratch',
        },
        acceptanceCriteria: [
          { text: 'Shadcn/UI components installed and theme-aligned', done: true },
          { text: 'Lucide React icon set available project-wide', done: true },
          { text: 'Motion library configured for animation', done: true },
        ],
      },
      {
        id: 'd1-4',
        name: 'CI/CD Pipeline Configuration',
        effort: 'Low',
        status: 'completed',
        userStory: {
          asA: 'As a developer shipping code',
          iWant: 'I want automated builds, type checks, and preview deployments on every push',
          soThat: 'So that I can catch errors early and share working previews without manual deployment steps',
        },
        acceptanceCriteria: [
          { text: 'GitHub Actions workflow runs on every push to main', done: true },
          { text: 'Build succeeds without TypeScript errors', done: true },
          { text: 'Preview deployment URL generated per PR', done: true },
        ],
      },
    ],
  },

  // ─── M2: Development (active) ───────────────────────────────────────────────
  {
    id: 'm2',
    name: 'M2: Auth & Onboarding',
    progress: 72,
    status: 'in-progress',
    startDate: 'Feb 10',
    endDate: 'Feb 24, 2026',
    sprintDays: 14,
    storyPoints: 8,
    model: 'Claude Opus 4.6',
    phase: 'development',
    developmentActivities: [
      {
        title: 'Testing in progress — 12 of 16 ACs passed',
        subtitle: 'QA Agent is running acceptance criteria for SSO & Magic Link',
      },
      {
        title: 'Implementing Stories…',
        subtitle: 'Developer Agent is working on Biometric Login…',
      },
    ],
    deliverables: [
      {
        id: 'd2-1',
        name: 'User Login & Registration Flow',
        effort: 'Low',
        status: 'completed',
        userStory: {
          asA: 'As a registered user',
          iWant: 'I want to log in securely using email/password or existing session',
          soThat: 'So that I can access my authenticated dashboard and personal data',
        },
        acceptanceCriteria: [
          { text: 'User can log in with valid email and password', done: true },
          { text: 'System validates credentials and shows inline error for invalid credentials', done: true },
          { text: 'Data is persisted securely with user session tokens stored server-side', done: true },
          { text: "Clicking 'Forgot password' navigates to password reset flow", done: true },
        ],
      },
      {
        id: 'd2-2',
        name: 'SSO & Magic Link',
        effort: 'Low',
        status: 'in-progress',
        activeAgents: ['QA', 'Developer'],
        userStory: {
          asA: 'As a registered user',
          iWant: 'I want to sign in via SSO or magic link',
          soThat: 'So that I can access the platform without remembering credentials',
        },
        acceptanceCriteria: [
          { text: 'User can authenticate via SSO provider and receive successful login response', done: true },
          { text: "Magic link sent within 2 minutes and expires after 15 minutes", done: false, inProgress: true },
          { text: 'System validates SSO assertion and creates a user session', done: false },
          { text: 'Fallback to email-based login if SSO/magic link fails', done: false },
        ],
      },
      {
        id: 'd2-3',
        name: 'Biometric Login',
        effort: 'High',
        status: 'in-progress',
        activeAgents: ['Developer'],
        userStory: {
          asA: 'As a mobile user',
          iWant: 'I want to authenticate using Face ID or fingerprint',
          soThat: 'So that I can log in quickly without typing credentials',
        },
        acceptanceCriteria: [
          { text: 'Face ID / Touch ID prompt appears on supported devices', done: true },
          { text: 'Biometric auth falls back to PIN on failure', done: false, inProgress: true },
          { text: 'Biometric credentials stored in device secure enclave only', done: false },
        ],
      },
      {
        id: 'd2-4',
        name: 'Onboarding Setup',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a new user',
          iWant: 'I want to complete onboarding with profile and preferences',
          soThat: 'So that I can start using the platform with tailored settings',
        },
        acceptanceCriteria: [
          { text: 'User completes profile with required fields', done: false },
          { text: 'Preferences saved and applied to dashboard visuals', done: false },
          { text: 'Onboarding progress persists if interrupted', done: false },
        ],
      },
    ],
  },

  // ─── M3: Development Ready (Start Dev button) ───────────────────────────────
  {
    id: 'm3',
    name: 'M3: Dashboard & Clients',
    progress: 48,
    status: 'in-progress',
    startDate: 'Mar 3',
    endDate: 'Mar 17, 2026',
    sprintDays: 14,
    storyPoints: 10,
    model: 'Claude Opus 4.6',
    phase: 'development-ready',
    screenDesigns: [
      { name: 'Client Dashboard', image: SCREEN_IMG_1 },
      { name: 'Client Profile', image: SCREEN_IMG_2 },
      { name: 'Communication Hub', image: SCREEN_IMG_3 },
      { name: 'Analytics View', image: SCREEN_IMG_4 },
      { name: 'Insights Panel', image: SCREEN_IMG_5 },
    ],
    deliverables: [
      {
        id: 'd3-1',
        name: 'Client Dashboard Overview',
        effort: 'Low',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic staff member',
          iWant: 'I want a unified dashboard showing upcoming appointments and client activity',
          soThat: 'So that I can manage the clinic\'s daily operations efficiently',
        },
        acceptanceCriteria: [
          { text: 'Dashboard loads within 2s and displays today\'s appointments', done: false },
          { text: 'KPI cards show client count, revenue, and upcoming bookings', done: false },
          { text: 'Dashboard refreshes data every 60 seconds', done: false },
        ],
      },
      {
        id: 'd3-2',
        name: 'Client Profile Management',
        effort: 'Low',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic receptionist',
          iWant: 'I want to view and edit client profiles including history and notes',
          soThat: 'So that I can provide personalised service to returning clients',
        },
        acceptanceCriteria: [
          { text: 'Staff can search clients by name, email, or phone', done: false },
          { text: 'Profile shows treatment history, invoices, and communication log', done: false },
          { text: 'All edits are audit-logged with timestamp and staff ID', done: false },
        ],
      },
      {
        id: 'd3-3',
        name: 'Client Communication Hub',
        effort: 'High',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic manager',
          iWant: 'I want to send targeted messages and notifications to clients',
          soThat: 'So that I can keep clients informed and drive re-bookings',
        },
        acceptanceCriteria: [
          { text: 'Staff can compose and send SMS/email from within the app', done: false },
          { text: 'Message templates available for common scenarios', done: false },
          { text: 'Delivery status tracked and shown per message', done: false },
        ],
      },
      {
        id: 'd3-4',
        name: 'Analytics Overview',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic owner',
          iWant: 'I want to see revenue trends and client retention metrics',
          soThat: 'So that I can make informed decisions about the business',
        },
        acceptanceCriteria: [
          { text: 'Revenue chart shows weekly and monthly views', done: false },
          { text: 'Retention rate calculated from rebooking data', done: false },
          { text: 'Data exportable to CSV for further analysis', done: false },
        ],
      },
    ],
  },

  // ─── M4: Designing (screen generation in progress) ──────────────────────────
  {
    id: 'm4',
    name: 'M4: Invoicing & Contracts',
    progress: 25,
    status: 'in-progress',
    startDate: 'Mar 17',
    endDate: 'Mar 31, 2026',
    sprintDays: 14,
    storyPoints: 9,
    model: 'Claude Opus 4.6',
    phase: 'designing',
    screenCount: 16,
    generationActivity: 'UX Agent is generating Payment Processing screens…',
    deliverables: [
      {
        id: 'd4-1',
        name: 'Invoice Generation',
        effort: 'Medium',
        status: 'completed',
        userStory: {
          asA: 'As a clinic receptionist',
          iWant: 'I want to generate invoices automatically after each appointment',
          soThat: 'So that clients receive accurate billing without manual effort',
        },
        acceptanceCriteria: [
          { text: 'Invoice auto-generated on appointment completion', done: true },
          { text: 'Invoice includes itemised services and GST calculation', done: true },
          { text: 'PDF version available for download and email', done: true },
        ],
      },
      {
        id: 'd4-2',
        name: 'Contract Templates',
        effort: 'Low',
        status: 'completed',
        userStory: {
          asA: 'As a clinic manager',
          iWant: 'I want reusable contract templates for treatment packages',
          soThat: 'So that clients can sign agreements digitally before procedures',
        },
        acceptanceCriteria: [
          { text: 'Template library with at least 5 preset contract types', done: true },
          { text: 'Electronic signature captured and stored with timestamp', done: true },
          { text: 'Signed contracts retrievable from client profile', done: true },
        ],
      },
      {
        id: 'd4-3',
        name: 'Payment Processing Integration',
        effort: 'High',
        status: 'in-progress',
        activeAgents: ['UX'],
        userStory: {
          asA: 'As a client',
          iWant: 'I want to pay for services via card, Apple Pay, or bank transfer',
          soThat: 'So that I can settle invoices quickly and securely',
        },
        acceptanceCriteria: [
          { text: 'Stripe integration supports card and Apple/Google Pay', done: false, inProgress: true },
          { text: 'Payment confirmation sent via email within 30 seconds', done: false },
          { text: 'Refunds processable from within the staff portal', done: false },
        ],
      },
      {
        id: 'd4-4',
        name: 'Invoice History & Reports',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic owner',
          iWant: 'I want a filterable invoice history with export capability',
          soThat: 'So that I can reconcile accounts and prepare financial reports',
        },
        acceptanceCriteria: [
          { text: 'Invoices filterable by date range, client, and status', done: false },
          { text: 'Outstanding invoices highlighted with overdue indicators', done: false },
          { text: 'Bulk export to CSV and PDF available', done: false },
        ],
      },
    ],
  },

  // ─── M5: Design Ready (Generate Screens button available) ───────────────────
  {
    id: 'm5',
    name: 'M5: Bookkeeping & Records',
    progress: 20,
    status: 'in-progress',
    startDate: 'Apr 7',
    endDate: 'Apr 21, 2026',
    sprintDays: 14,
    storyPoints: 7,
    model: 'Claude Opus 4.6',
    phase: 'design-ready',
    screenCount: 12,
    storyCount: 4,
    deliverables: [
      {
        id: 'd5-1',
        name: 'Transaction Records',
        effort: 'Low',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic accountant',
          iWant: 'I want a complete ledger of all financial transactions',
          soThat: 'So that I can ensure accurate bookkeeping and audits',
        },
        acceptanceCriteria: [
          { text: 'All transactions recorded with timestamp, amount, and category', done: false },
          { text: 'Transactions linked to invoices and client records', done: false },
          { text: 'Reconciliation report generated monthly', done: false },
        ],
      },
      {
        id: 'd5-2',
        name: 'Expense Tracking',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic manager',
          iWant: 'I want to log and categorise clinic expenses',
          soThat: 'So that I can track overheads and manage the budget accurately',
        },
        acceptanceCriteria: [
          { text: 'Expenses categorised by type (supplies, utilities, staff)', done: false },
          { text: 'Receipt images attachable to expense entries', done: false },
          { text: 'Monthly expense summary with variance against budget', done: false },
        ],
      },
      {
        id: 'd5-3',
        name: 'Financial Reports',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic owner',
          iWant: 'I want P&L, balance sheet, and cash flow reports',
          soThat: 'So that I can monitor financial health and plan ahead',
        },
        acceptanceCriteria: [
          { text: 'Standard financial reports generated on demand', done: false },
          { text: 'Reports cover selectable date ranges up to 12 months', done: false },
          { text: 'Charts visualise trends for revenue, expenses, and profit', done: false },
        ],
      },
      {
        id: 'd5-4',
        name: 'Tax Preparation Tools',
        effort: 'High',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic accountant',
          iWant: 'I want automated GST calculations and BAS report generation',
          soThat: 'So that tax lodgement is accurate and timely',
        },
        acceptanceCriteria: [
          { text: 'GST automatically calculated and separated per transaction', done: false },
          { text: 'BAS report pre-filled from transaction data each quarter', done: false },
          { text: 'One-click export to ATO-compatible format', done: false },
        ],
      },
    ],
  },

  // ─── M6: Shaping (active agents) ────────────────────────────────────────────
  {
    id: 'm6',
    name: 'M6: AI Assistant & Automation',
    progress: 15,
    status: 'in-progress',
    startDate: 'Apr 21',
    endDate: 'May 5, 2026',
    sprintDays: 14,
    storyPoints: 12,
    model: 'Claude Opus 4.6',
    phase: 'shaping',
    deliverables: [
      {
        id: 'd6-1',
        name: 'AI Conversation Interface',
        effort: 'High',
        status: 'in-progress',
        activeAgents: ['PM', 'UX', 'Architect'],
        userStory: {
          asA: 'As a clinic client',
          iWant: 'I want to chat with an AI assistant to get answers about treatments',
          soThat: 'So that I can get instant support without waiting for staff',
        },
        acceptanceCriteria: [
          { text: 'AI responds to treatment queries with clinically reviewed content', done: false, inProgress: true },
          { text: 'Conversation history persisted per user session', done: false },
          { text: 'Human handoff available when AI confidence is low', done: false },
          { text: 'Response latency under 2 seconds for common queries', done: false },
        ],
      },
      {
        id: 'd6-2',
        name: 'Automated Workflow Triggers',
        effort: 'High',
        status: 'in-progress',
        activeAgents: ['PM', 'Architect'],
        userStory: {
          asA: 'As a clinic manager',
          iWant: 'I want automated triggers for routine tasks like reminders and follow-ups',
          soThat: 'So that staff spend less time on repetitive administrative work',
        },
        acceptanceCriteria: [
          { text: 'Appointment reminders sent 24h and 2h before booking', done: true },
          { text: 'Follow-up messages sent 3 days post-treatment', done: false, inProgress: true },
          { text: 'Trigger rules configurable by clinic staff via UI', done: false },
        ],
      },
      {
        id: 'd6-3',
        name: 'Smart Recommendations Engine',
        effort: 'High',
        status: 'in-progress',
        activeAgents: ['PM', 'UX'],
        userStory: {
          asA: 'As a returning client',
          iWant: 'I want personalised treatment recommendations based on my history',
          soThat: 'So that I discover relevant services I haven\'t tried yet',
        },
        acceptanceCriteria: [
          { text: 'Recommendations based on past bookings and skin profile', done: false, inProgress: true },
          { text: 'At least 3 personalised suggestions shown on dashboard', done: false },
          { text: 'Recommendation model updated weekly from new booking data', done: false },
        ],
      },
      {
        id: 'd6-4',
        name: 'Natural Language Processing',
        effort: 'High',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic staff member',
          iWant: 'I want to search client records and reports using natural language',
          soThat: 'So that I can find information quickly without navigating menus',
        },
        acceptanceCriteria: [
          { text: 'NLP search returns relevant results for common queries', done: false },
          { text: 'Search understands abbreviations and clinic-specific terminology', done: false },
          { text: 'Results ranked by relevance with highlighted matching terms', done: false },
        ],
      },
    ],
  },

  // ─── M7: Shaping (early stage) ──────────────────────────────────────────────
  {
    id: 'm7',
    name: 'M7: Settings & Support',
    progress: 5,
    status: 'in-progress',
    startDate: 'May 5',
    endDate: 'May 19, 2026',
    sprintDays: 14,
    storyPoints: 5,
    model: 'Claude Opus 4.6',
    phase: 'shaping',
    deliverables: [
      {
        id: 'd7-1',
        name: 'User Profile & Preferences',
        effort: 'Low',
        status: 'in-progress',
        activeAgents: ['PM', 'UX'],
        userStory: {
          asA: 'As a registered user',
          iWant: 'I want to manage my profile, notification preferences, and privacy settings',
          soThat: 'So that I control my experience and data on the platform',
        },
        acceptanceCriteria: [
          { text: 'User can update name, email, phone, and profile photo', done: false, inProgress: true },
          { text: 'Notification preferences configurable per channel (SMS, email, push)', done: false },
          { text: 'Account deletion request handled within 30 days per APP', done: false },
        ],
      },
      {
        id: 'd7-2',
        name: 'Help Centre & Documentation',
        effort: 'Low',
        status: 'not-started',
        userStory: {
          asA: 'As a new user',
          iWant: 'I want searchable help articles and video guides',
          soThat: 'So that I can resolve common issues without contacting support',
        },
        acceptanceCriteria: [
          { text: 'Help centre contains at least 20 articles covering core features', done: false },
          { text: 'Search returns relevant articles within 1 second', done: false },
          { text: 'In-app support chat available as fallback', done: false },
        ],
      },
      {
        id: 'd7-3',
        name: 'Role-Based Access Control',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As a clinic admin',
          iWant: 'I want to assign roles (owner, manager, receptionist) with different permissions',
          soThat: 'So that staff can only access data relevant to their responsibilities',
        },
        acceptanceCriteria: [
          { text: 'Three default roles with preset permission sets', done: false },
          { text: 'Custom permission overrides available per user', done: false },
          { text: 'Permission changes logged with admin ID and timestamp', done: false },
        ],
      },
    ],
  },

  // ─── M8: Shaping (just started, 0%) ─────────────────────────────────────────
  {
    id: 'm8',
    name: 'M8: Documentation & Deployment',
    progress: 0,
    status: 'not-started',
    startDate: 'May 19',
    endDate: 'Jun 2, 2026',
    sprintDays: 14,
    storyPoints: 4,
    model: 'Claude Opus 4.6',
    phase: 'shaping',
    deliverables: [
      {
        id: 'd8-1',
        name: 'API Documentation',
        effort: 'Low',
        status: 'not-started',
        userStory: {
          asA: 'As a third-party developer',
          iWant: 'I want comprehensive API documentation with examples',
          soThat: 'So that I can integrate with the platform without needing support',
        },
        acceptanceCriteria: [
          { text: 'All public API endpoints documented with request/response examples', done: false },
          { text: 'Authentication flow and error codes clearly explained', done: false },
          { text: 'Interactive API playground available in the docs', done: false },
        ],
      },
      {
        id: 'd8-2',
        name: 'Production Deployment Configuration',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As the DevOps engineer',
          iWant: 'I want a fully configured production environment with auto-scaling',
          soThat: 'So that the platform handles peak load reliably at launch',
        },
        acceptanceCriteria: [
          { text: 'AWS infrastructure provisioned via Terraform', done: false },
          { text: 'Auto-scaling policies configured for web and API tiers', done: false },
          { text: 'Monitoring and alerting set up in CloudWatch', done: false },
        ],
      },
      {
        id: 'd8-3',
        name: 'Performance & Load Testing',
        effort: 'Medium',
        status: 'not-started',
        userStory: {
          asA: 'As the QA lead',
          iWant: 'I want verified performance benchmarks before launch',
          soThat: 'So that the platform meets the 99.9% uptime SLA from day one',
        },
        acceptanceCriteria: [
          { text: 'Load test simulates 500 concurrent users without degradation', done: false },
          { text: 'P95 page load time under 3 seconds under load', done: false },
          { text: 'Stress test identifies breaking point and failover behaviour', done: false },
        ],
      },
    ],
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'agent',
    content: `**Target users:** Tech-savvy Gen Z and Millennial adults who are proactive about mental health - specifically those on therapy waitlists or between sessions who need ongoing daily guidance and are open to AI-powered interactions.\n\n**What makes it special:** Your proprietary empathy engine trained on crisis worker data, evidence-based foundation with consulting psychologist oversight, and the focus on preventing functional freeze states rather than just general wellness.\n\nHow does this align with your vision? Should we refine any of these points before we move forward with the PRD structure?\n\nAlso, I want to understand - what's driving the urgency around this project right now? Is there a specific timeline or market opportunity you're responding to?`,
    timestamp: '16 Jan 2026, 17:17',
  },
  {
    id: '2',
    role: 'user',
    content: 'What is the current status of this project?',
    timestamp: '25 Feb 2026, 12:08',
  },
  {
    id: '3',
    role: 'agent',
    content: `Here's your project status as of today:\n\n**Overall Progress: 15.6% complete** (2 of 8 milestones active)\n\n**M1: Infrastructure & Set Up** — ✅ Completed (100%)\nAll foundational deliverables shipped: design system in CLAUDE.md, Tailwind theme configuration, and modular landing page. No blockers.\n\n**M2: Auth & Onboarding** — 🟡 In Progress (72%)\n- \"User Login & Registration Flow\" is complete\n- \"SSO & Magic Link\" is actively being worked on by QA and Developer agents\n- \"Biometric Login\" is in progress by Developer agent\n- \"Onboarding Setup\" not started\n\n**M3–M8** — Shaping / Design phases\n\n---\n\n**⚠️ Risks & Complexities I'm Flagging:**\n\n**1. SSO Integration Complexity (M2, High)**\nSSO assertion validation and magic link token security involve third-party dependencies. If SSO provider onboarding takes longer than expected, this could slip M2 by 1–2 weeks.\n\n**2. Magic Link Security Surface (M2, Medium)**\nThe acceptance criteria require preventing token reuse and monitoring for phishing attempts. This is non-trivial.\n\n**3. Timeline Compression (M3–M8, High)**\n6 milestones remain. The current pace means the Jun 2 deadline for M8 is tight.\n\nWould you like me to generate a risk mitigation plan, or should we re-scope any milestone timelines?`,
    timestamp: '25 Feb 2026, 12:08',
  },
];

export const specContent = {
  title: 'Product Requirements Document',
  sections: [
    {
      id: 's1',
      heading: 'Executive Summary',
      content: `The Plus Minus Clinic App is a custom unified digital platform built exclusively for Plus Minus Clinic, a Sydney-based skin and aesthetics clinic. This bespoke solution addresses critical operational fragmentation by serving as their centralized hub that combines CRM, content delivery, and commerce capabilities. Acting as Plus Minus Clinic's private "Instagram + WeChat + booking system," the platform eliminates dependency on third-party platforms while streamlining operations for both clinic staff and clients. The urgency is driven by September 2025 advertising restrictions that will eliminate the clinic's primary marketing channels, making this owned digital presence essential for business continuity. The solution replaces multiple disconnected systems with a single platform that handles all client touchpoints, from content consumption to booking to service delivery, while providing complete ownership and control over their digital presence.`,
    },
    {
      id: 's2',
      heading: 'What Makes This Special',
      content: `Unlike generic clinic management software or standard booking platforms, the Plus Minus Clinic App is custom-built to solve Plus Minus Clinic's specific operational challenges and regulatory constraints. The primary differentiator is the bespoke nature - it's designed around their exact workflows, client journey, and business model rather than forcing them to adapt to a one-size-fits-all solution. This approach ensures perfect alignment with their September 2025 regulatory challenge while integrating seamlessly with their current processes, eliminating unnecessary features or forced workflows common in generic platforms.`,
    },
    {
      id: 's3',
      heading: 'Project Classification',
      content: `This project is classified as a custom enterprise application build with moderate complexity. It involves full-stack development across web and mobile platforms, integration with existing third-party services, and requires compliance with healthcare advertising regulations.`,
    },
    {
      id: 's4',
      heading: 'Success Criteria',
      content: `The project will be considered successful when: (1) All core features are deployed and functional across web and mobile platforms, (2) Client adoption reaches 60% of existing patient base within 3 months of launch, (3) Operational efficiency improves by at least 30% as measured by staff time spent on manual tasks, (4) The platform successfully replaces all marketing channels affected by the September 2025 advertising restrictions.`,
    },
    {
      id: 's5',
      heading: 'Product Scope',
      content: `The product scope encompasses a client-facing mobile app, a clinic staff web portal, a content management system, an integrated booking and scheduling system, a CRM module, and an e-commerce storefront for skincare products. Out of scope for the initial release are AI-powered skin analysis, telemedicine capabilities, and insurance claim processing.`,
    },
    {
      id: 's6',
      heading: 'User Journeys',
      content: `Three primary user journeys have been identified and documented: the new client onboarding journey, the returning client booking journey, and the staff content management journey. Each journey maps the complete end-to-end experience from initial touchpoint to task completion.`,
    },
    {
      id: 's7',
      heading: 'Journey 1: Sarah - Breaking t...',
      content: `Sarah is a 32-year-old marketing professional who discovers Plus Minus Clinic through a friend's recommendation. Her journey begins with downloading the app, creating an account, browsing available treatments, reading educational content about her skin concerns, and ultimately booking her first consultation. Key pain points addressed include reducing the friction of first-time booking and providing enough information to build trust before the first visit.`,
    },
    {
      id: 's8',
      heading: 'Journey 2: Marcus - Reclaimi...',
      content: `Marcus is a 45-year-old executive and existing client who regularly visits the clinic for anti-aging treatments. His journey focuses on the rebooking experience, loyalty rewards, accessing his treatment history, purchasing recommended skincare products, and managing his appointment schedule. The key improvement is consolidating all these interactions into a single platform instead of using multiple channels.`,
    },
    {
      id: 's9',
      heading: 'Journey 3: Aisha - Finding Li...',
      content: `Aisha is a clinic receptionist who manages daily operations. Her journey covers content creation and scheduling, managing client bookings, processing product orders, handling client communications, and generating operational reports. The primary goal is reducing context-switching between different tools and automating repetitive tasks.`,
    },
    {
      id: 's10',
      heading: 'Journey Requirements Sum...',
      content: `Across all three user journeys, common requirements include: seamless authentication, real-time notifications, offline content access, responsive design across all devices, accessibility compliance (WCAG 2.1 AA), and sub-3-second page load times.`,
    },
    {
      id: 's11',
      heading: 'Domain Requirements',
      content: `The healthcare and aesthetics domain imposes specific requirements around patient data handling, treatment records management, before/after photo storage with consent tracking, and compliance with the Australian Privacy Principles (APPs) under the Privacy Act 1988.`,
    },
    {
      id: 's12',
      heading: 'Regulatory Compliance',
      content: `The platform must comply with the Therapeutic Goods Administration (TGA) advertising regulations effective September 2025, the Australian Health Practitioner Regulation Agency (AHPRA) guidelines, and general consumer protection laws. All marketing content displayed through the app must pass through an automated compliance checking system.`,
    },
    {
      id: 's13',
      heading: 'Data Privacy Requirements',
      content: `Client health information must be encrypted at rest and in transit. The system must support data portability requests, right-to-deletion requests, and maintain comprehensive audit logs. All data must be stored within Australian data centers in compliance with local data sovereignty requirements.`,
    },
    {
      id: 's14',
      heading: 'Safety and Clinical Standards',
      content: `The platform must enforce mandatory cooling-off periods for certain treatment bookings, display required disclaimers for cosmetic procedures, and maintain a clear separation between medical advice (which the app does not provide) and general educational content about treatments and skincare.`,
    },
    {
      id: 's15',
      heading: 'Deferred Requirements',
      content: `The following features have been deferred to Phase 2: AI skin analysis tool, telemedicine video consultations, insurance claim integration, multi-clinic support, and advanced analytics dashboard with predictive modeling.`,
    },
    {
      id: 's16',
      heading: 'Current Requirements',
      content: `Phase 1 requirements include: user registration and authentication, content browsing and search, appointment booking and management, product catalogue and e-commerce, push notifications, basic CRM functionality, staff content management tools, and reporting dashboard.`,
    },
    {
      id: 's17',
      heading: 'Technical Foundation',
      content: `The technical stack will consist of React Native for mobile, Next.js for the web portal, PostgreSQL for the primary database, Redis for caching, AWS for cloud infrastructure, and Stripe for payment processing. The architecture follows a microservices pattern with an API gateway.`,
    },
    {
      id: 's18',
      heading: 'Project Type',
      content: `This is a greenfield project with no legacy system migration required. However, data import from the existing booking system (Cliniko) and CRM (HubSpot) will be necessary during the initial deployment phase.`,
    },
    {
      id: 's19',
      heading: 'Platform Requirements',
      content: `The mobile app must support iOS 15+ and Android 12+. The web portal must support the latest two versions of Chrome, Safari, Firefox, and Edge. The platform must maintain 99.9% uptime with automatic failover capabilities.`,
    },
  ],
};
