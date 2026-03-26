import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Send, Check } from 'lucide-react';
import { type Deliverable, type MilestonePhase } from './data';

// Figma screen assets used as preview images in agent activity
import imgScreen1 from 'figma:asset/4a0b625d1a14616d01c408a075f1459f85bd6c5e.png';
import imgScreen2 from 'figma:asset/a8e0e7565684673839b7b5b3bf9c6932e53c0e10.png';
import imgScreen3 from 'figma:asset/b8b63f1eb93b65b2e908b0d691deef97f32c3a33.png';

// ── Types ─────────────────────────────────────────────────────────────────────

type AgentType = 'PM' | 'UX' | 'Architect' | 'QA' | 'Developer';

interface TerminalLine {
  text: string;
  type: 'cmd' | 'pass' | 'fail' | 'running' | 'info' | 'neutral';
}

interface ActivityEntry {
  id: string;
  agent?: AgentType;
  thinking?: boolean;
  action?: { verb: string; target?: string };
  message?: string;
  terminal?: TerminalLine[];
  imageSrc?: string;
  imageCaption?: string;
  failureCard?: { title: string; body: string };
  crossCallLabel?: string;
  humanPrompt?: { question: string; options: string[] };
  storyCompleted?: string;
}

// ── Hardcoded activity threads per deliverable ID ─────────────────────────────

const THREADS: Record<string, ActivityEntry[]> = {

  // ─── M2: User Login (completed) ───────────────────────────────────────────
  'd2-1': [
    {
      id: 'a1', agent: 'Developer',
      action: { verb: 'read', target: 'src/auth/session.ts' },
      message: 'Analysed existing auth session layer. Clear separation of concerns — session tokens stored server-side with 30-day TTL. Ready to layer login form on top.',
    },
    {
      id: 'a2', agent: 'Developer',
      action: { verb: 'bash', target: 'npm run test:login' },
      terminal: [
        { text: 'PASS  src/auth/login.test.ts', type: 'pass' },
        { text: 'PASS  src/auth/session.test.ts', type: 'pass' },
        { text: 'Tests: 8 passed, 8 total', type: 'neutral' },
      ],
    },
    {
      id: 'a3', agent: 'Developer',
      action: { verb: 'write', target: 'src/auth/login.ts' },
      message: 'Implemented login form validation, credential check against API, and forgot-password redirect. Sessions persist across browser tabs with auto-refresh.',
    },
    {
      id: 'a4', agent: 'QA',
      action: { verb: 'started', target: 'AC verification suite' },
      message: 'Running acceptance tests against all 4 ACs for the User Login & Registration flow.',
      terminal: [
        { text: '$ npm spryn test --story user-login --acs', type: 'cmd' },
        { text: '✓  AC1: Login with valid credentials          PASS', type: 'pass' },
        { text: '✓  AC2: Error shown for invalid credentials   PASS', type: 'pass' },
        { text: '✓  AC3: Session persists server-side          PASS', type: 'pass' },
        { text: '✓  AC4: Forgot password redirect works        PASS', type: 'pass' },
        { text: '4/4 passed · 0 failed · 92% coverage', type: 'info' },
      ],
    },
    {
      id: 'a5', agent: 'QA',
      message: 'All 4 ACs verified — zero failures, 92% coverage. No regressions in adjacent auth flows. PM story is clear.',
    },
    {
      id: 'a6', agent: 'PM',
      message: 'All checks green ✓  Closing User Login. Every AC verified, coverage at 92%, clean diff — this one moved fast and landed clean. Story complete.',
      storyCompleted: 'All tasks finished · 4 tests passing · Build successful',
    },
  ],

  // ─── M2: SSO & Magic Link (QA failed AC → human response) ─────────────────
  'd2-2': [
    {
      id: 'b1', agent: 'QA',
      action: { verb: 'started', target: 'AC verification suite' },
      message: 'Running acceptance tests against all 4 ACs. Executing SSO OAuth flow, magic link delivery timing, session creation, and VoiceOver accessibility checks.',
      terminal: [
        { text: '$ npm spryn test --story sso-magic-link --acs', type: 'cmd' },
        { text: '✓  AC1: SSO auth via Google OAuth 2.0          PASS', type: 'pass' },
        { text: '✓  AC2: Magic link delivered < 2 min           PASS', type: 'pass' },
        { text: '✓  AC3: Session created on SSO assertion        PASS', type: 'pass' },
        { text: '   AC4: VoiceOver accessibility support         running', type: 'running' },
      ],
    },
    {
      id: 'b2', agent: 'QA',
      action: { verb: 'testing', target: 'VoiceOver AC' },
      message: 'Simulating VoiceOver navigation through all login screens. Verifying focus order and ARIA labels match design spec.',
    },
    {
      id: 'b3', agent: 'QA',
      action: { verb: 'AC4 VoiceOver test failed', target: undefined },
      failureCard: {
        title: 'AC4: VoiceOver — FAIL',
        body: 'Focus ring skips the PIN fallback button entirely on error-fallback screen. Reproducible on iOS 17 and 18. Filed bug BIO-47.',
      },
      terminal: [
        { text: '✓  AC1: Biometric prompt               PASS', type: 'pass' },
        { text: '✓  AC2: PIN fallback flow              PASS', type: 'pass' },
        { text: '✓  AC3: Session persistence            PASS', type: 'pass' },
        { text: '✗  AC4: VoiceOver — focus order skip  FAIL', type: 'fail' },
        { text: '3 passed · 1 failed · BUG: BIO-47', type: 'info' },
      ],
      crossCallLabel: 'reporting bug to Dev agent',
    },
    {
      id: 'b4', agent: 'Developer',
      message: 'BIO-47 acknowledged.\n\nPulled the error-fallback screen. The PIN button has tabIndex=-1 set erroneously in the component. Quick fix, 10 minutes.\n\nFixing focus order in error-fallback',
    },
    {
      id: 'b5', agent: 'Developer',
      message: 'Removing tabIndex=-1 from PINFallbackButton and updating focus trap logic. Re-test will follow automatically.',
    },
    {
      id: 'b6', agent: 'QA',
      action: { verb: 'escalated', target: 'AC4 failure to PM agent' },
      message: '3 ACs passing, 1 failing (VoiceOver focus order). Bug BIO-47 filed. This is an accessibility regression — requires your decision on sprint impact.',
    },
    {
      id: 'b7', agent: 'Developer',
      message: "BIO-47 fix is ready — awaiting your go-ahead.\n\ntabIndex fix staged and tested locally. 2-line change. I can ship it in 5 minutes once you give the go-ahead.",
    },
    {
      id: 'b8', agent: 'PM',
      message: 'This is P1 severity — WCAG 2.1 AA compliance is in our NFRs. Recommending we fix it in this sprint rather than accrue accessibility debt.',
    },
    {
      id: 'b9',
      humanPrompt: {
        question: 'All agents are paused waiting for your decision. Fix in sprint (recommended) or defer to BIO-47 follow-up story?',
        options: ['Fix in sprint', 'Defer to BIO-47 follow up story'],
      },
    },
  ],

  // ─── M2: Biometric Login (Dev scaffolding → missing screens → UX fix) ──────
  'd2-3': [
    {
      id: 'c1', agent: 'Developer',
      action: { verb: 'read', target: 'src/auth/sso.ts' },
      message: 'Analysed existing SSO provider integration. Token generation and expiry logic reviewed.',
    },
    {
      id: 'c2', agent: 'Developer',
      action: { verb: 'read', target: 'src/auth/magic-link.ts' },
      message: 'Reviewed token generation and expiry logic',
    },
    {
      id: 'c3', agent: 'Developer',
      action: { verb: 'bash', target: 'npm run test:auth' },
      terminal: [
        { text: 'PASS  src/auth/sso.test.ts', type: 'pass' },
        { text: 'PASS  src/auth/session.test.ts', type: 'pass' },
        { text: 'Tests: 12 passed, 12 total', type: 'neutral' },
      ],
    },
    {
      id: 'c4', agent: 'Developer',
      action: { verb: 'write', target: 'src/auth/sso-provider.ts' },
      message: 'Implemented OAuth2 callback handler and session binding.',
      imageSrc: imgScreen3,
      imageCaption: 'Preview screenshot captured',
    },
    {
      id: 'c5', agent: 'Developer',
      action: { verb: 'bash', target: 'npm run build' },
    },
    {
      id: 'c6', agent: 'Developer',
      action: { verb: 'started', target: 'implementation scaffolding' },
      message: 'Cloning story branch and setting up auth module. Reading manifest.json for screen list before wiring components.',
      terminal: [
        { text: '$ npm spryn scaffold --story biometric-auth', type: 'cmd' },
        { text: '  Reading manifest.json.', type: 'neutral' },
        { text: '  Expected: 4 screens', type: 'neutral' },
        { text: '  Found:    2 screens', type: 'neutral' },
        { text: '✗ Missing: error-fallback.pen', type: 'fail' },
        { text: '✗ Missing: pin-entry.pen', type: 'fail' },
        { text: '  Scaffold aborted — resolve missing screens', type: 'fail' },
      ],
    },
    {
      id: 'c7', agent: 'Developer',
      message: 'Scaffold failed — 2 screens missing from the manifest. Pinging UX to regenerate error-fallback.pen and pin-entry.pen.',
      crossCallLabel: 'reported missing screens to UX agent',
    },
    {
      id: 'c8', agent: 'UX',
      message: 'Missing screens acknowledged.\n\nFound the issue — both screens were skipped due to a naming collision in the batch script. Fixing and regenerating.',
      action: { verb: 'regenerating', target: 'missing screens' },
    },
    {
      id: 'c9', agent: 'UX',
      message: 'Running targeted generate for error-fallback.pen and pin-entry.pen with collision fix applied.',
      imageSrc: imgScreen1,
      imageCaption: 'error-fallback.pen — regenerated successfully',
    },
  ],

  // ─── M2: Onboarding Setup (not started, blocked) ───────────────────────────
  'd2-4': [
    {
      id: 'd1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Onboarding Setup story queued. Blocked by SSO & Magic Link (BIO-47) and Biometric Login. Will unblock once predecessors resolve. Story points: 3.',
    },
    {
      id: 'd2', agent: 'UX', thinking: true,
      message: 'Reviewing onboarding flow designs from discovery sprint. Preparing updated screens once d2-2 and d2-3 are resolved.',
    },
  ],

  // ─── M3: Client Dashboard (dev-ready, agents reviewed screens) ─────────────
  'd3-1': [
    {
      id: 'e1', agent: 'PM',
      action: { verb: 'read', target: 'ux-spec.md' },
      message: 'Screens reviewed. All 4 dashboard flows verified against story requirements — dashboard-home, KPI cards, appointment list, quick-actions. Design is production-ready.',
    },
    {
      id: 'e2', agent: 'UX',
      action: { verb: 'completed', target: '4 of 4 screens' },
      message: 'All screens for Client Dashboard Overview generated and reviewed. dashboard-home.pen, kpi-cards.pen, appointment-list.pen, quick-actions.pen are ready for scaffold.',
    },
    {
      id: 'e3', agent: 'Architect',
      action: { verb: 'read', target: 'ux-spec.md' },
      message: 'Tech stack confirmed. React + Recharts for KPI charts. REST polling every 60 seconds. No blockers — ready to scaffold.',
    },
  ],

  // ─── M3: Client Profile (dev-ready) ───────────────────────────────────────
  'd3-2': [
    {
      id: 'e4', agent: 'UX',
      action: { verb: 'completed', target: '3 of 3 screens' },
      message: 'Client profile, search results, and edit form screens generated and approved by PM.',
    },
    {
      id: 'e5', agent: 'Architect',
      action: { verb: 'read', target: 'ux-spec.md' },
      message: 'Audit logging confirmed via middleware. Search endpoint indexed on name, email, phone. Diff update pattern for profile edits. No blockers.',
    },
  ],

  // ─── M4: Invoice Gen (design completed) ───────────────────────────────────
  'd4-1': [
    {
      id: 'f1', agent: 'UX',
      action: { verb: 'completed', target: '3 of 3 screens' },
      message: 'Invoice generation screens complete — invoice-preview.pen, itemised-breakdown.pen, email-send-confirm.pen. All reviewed and approved.',
    },
    {
      id: 'f2', agent: 'PM',
      action: { verb: 'read', target: 'ux-spec.md' },
      message: 'Invoice screens reviewed. GST calculations match spec. PDF export flow is clear. Approving for development queue.',
    },
  ],

  // ─── M4: Payment Processing (screen generation in progress) ───────────────
  'd4-3': [
    {
      id: 'f4', agent: 'UX',
      action: { verb: 'started', target: 'screen generation batch' },
      message: 'Running spryn generate-screens for all 4 screens in the payment-processing flow. Expected output: .pen files with component bindings.',
      terminal: [
        { text: '$ npm spryn generate-screens --story payment-processing --all', type: 'cmd' },
        { text: '  Generating: checkout-form.pen', type: 'neutral' },
        { text: '  checkout-form.pen created (2.3s) ✓', type: 'pass' },
        { text: '  Generating: stripe-confirm.pen', type: 'neutral' },
        { text: '  stripe-confirm.pen created (1.8s) ✓', type: 'pass' },
        { text: '  Generating: success-state.pen', type: 'neutral' },
        { text: '  running...', type: 'running' },
      ],
    },
    {
      id: 'f5', agent: 'UX',
      action: { verb: 'completed', target: '2 of 4 screens' },
      message: 'checkout-form.pen and stripe-confirm.pen are ready. Generating success-state.pen now — ETA ~2s.',
    },
    {
      id: 'f6', agent: 'UX',
      action: { verb: 'generating', target: 'success-state.pen' },
      message: 'Applying component bindings and layout constraints. Estimated completion in ~1 second.',
      imageSrc: imgScreen2,
      imageCaption: 'success-state.pen — preview',
    },
  ],

  // ─── M5: Transaction Records (design-ready, shaping complete) ─────────────
  'd5-1': [
    {
      id: 'g1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Transaction Records story shaped. Specs finalised with UX. 3 screens: transaction-list.pen, filter-view.pen, detail-panel.pen. Ready for screen generation.',
    },
    {
      id: 'g2', agent: 'UX',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Read. Story is clear — will generate 3 screens: transactions list with infinite scroll, filter drawer, and detail side-panel.',
    },
    {
      id: 'g3', agent: 'Architect',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Backend confirmed: GET /transactions with cursor pagination, filter params (date range, category, amount). No blockers for design phase.',
    },
  ],

  // ─── M6: AI Conversation Interface (shaping collaboration) ────────────────
  'd6-1': [
    {
      id: 'h1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'AI Conversation Interface assigned to UX. Needs 4 flows: initial prompt entry, streaming response, follow-up continuation, and human handoff. Check with Architect on token limits and streaming protocol before finalising.',
    },
    {
      id: 'h2', agent: 'UX',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Read. Two questions for Architect: 1) Token streaming — SSE or WebSocket? 2) What triggers human handoff — confidence score threshold, and what is it?',
    },
    {
      id: 'h3', agent: 'Architect',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Streaming: SSE (Server-Sent Events), not WebSocket — simpler, battle-tested. Confidence < 70% triggers handoff queue. Max context: 8k tokens. First-token latency budget: 400ms.',
    },
    {
      id: 'h4', agent: 'UX',
      action: { verb: 'write', target: 'ux-spec.md' },
      message: "Adding: SSE streaming animation with typing indicator, human handoff modal with queue position, graceful degradation for low-confidence responses ('I'm not sure, connecting you with a human…'), and 3-second loading skeleton on initial query.",
    },
    {
      id: 'h5', agent: 'UX', thinking: true,
      message: 'Reviewing edge cases: slow connection degrading SSE to polling, mid-stream disconnection recovery, context window overflow with truncation notice, and biometric re-auth mid-session...',
    },
  ],

  // ─── M6: Automated Workflow Triggers (shaping) ────────────────────────────
  'd6-2': [
    {
      id: 'i1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Automated Workflow Triggers scoped. Two sub-flows: appointment reminders (24h + 2h) and post-treatment follow-up (3 days after). Architect to confirm event system before UX designs the config UI.',
    },
    {
      id: 'i2', agent: 'Architect',
      action: { verb: 'read', target: 'product-brief.md' },
      message: "Using AWS EventBridge for scheduling. Cron rules per clinic timezone. SMS via Twilio, email via SES. Trigger config in DynamoDB. UX can design the trigger editor — I'll share the config schema.",
    },
    {
      id: 'i3', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Updated brief with event system details. Tagging UX to begin trigger editor design — 3 screens: trigger list, rule editor, preview + test-send.',
    },
  ],

  // ─── M6: Smart Recommendations (shaping) ──────────────────────────────────
  'd6-3': [
    {
      id: 'i4', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Smart Recommendations Engine — personalised treatment suggestions based on booking history and skin profile. At least 3 suggestions on dashboard. Model updated weekly.',
    },
    {
      id: 'i5', agent: 'Architect',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Recommendation model: collaborative filtering via SageMaker, weekly batch job from DynamoDB booking data. Cold-start handled by treatment category popularity.',
    },
    {
      id: 'i6', agent: 'UX', thinking: true,
      message: 'Considering how to surface recommendations without feeling invasive. Leaning toward a "Recommended for you" section in home tab with dismiss + feedback mechanism.',
    },
  ],

  // ─── M7: User Profile (shaping, early) ───────────────────────────────────
  'd7-1': [
    {
      id: 'j1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'Creating initial spec for User Profile & Preferences. Working on 3 sections: profile editor, notification preferences (per-channel), and privacy/deletion settings.',
    },
    {
      id: 'j2', agent: 'UX', thinking: true,
      message: 'Reviewing user research from discovery sprint. Key finding: 78% of users want granular per-channel control (SMS, email, in-app push). Will design toggle system by channel type.',
    },
  ],

  // ─── M8: API Documentation (not started) ─────────────────────────────────
  'd8-1': [
    {
      id: 'k1', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: 'API Documentation scoped. Blocked on final API surface lock (post-M7). Estimated 2 story points. Will unblock once Settings & Support is complete.',
    },
  ],
};

// ── Default thread generator (fallback for deliverables without explicit data) ─
function getDefaultThread(deliverable: Deliverable, phase: MilestonePhase): ActivityEntry[] {
  const name = deliverable.name.toLowerCase().replace(/\s+/g, '-').slice(0, 20);

  if (phase === 'uat' || deliverable.status === 'completed') {
    return [
      {
        id: 'def-1', agent: 'Developer',
        action: { verb: 'write', target: `src/${name}.ts` },
        message: `Implemented ${deliverable.name}. All acceptance criteria addressed. Code reviewed and merged.`,
      },
      {
        id: 'def-2', agent: 'QA',
        action: { verb: 'started', target: 'AC verification suite' },
        terminal: [
          { text: `$ npm spryn test --story ${name} --acs`, type: 'cmd' },
          { text: `✓  All ${deliverable.acceptanceCriteria.length} ACs passing`, type: 'pass' },
          { text: '100% pass rate · 0 failures · Build clean', type: 'info' },
        ],
        message: 'All ACs verified. No regressions. PM story is clear.',
      },
      {
        id: 'def-3', agent: 'PM',
        message: `Closing ${deliverable.name}. Clean diff, full AC coverage. Story complete.`,
        storyCompleted: `All tasks finished · ${deliverable.acceptanceCriteria.length} tests passing · Build successful`,
      },
    ];
  }

  if (phase === 'designing' || (phase === 'design-ready' && deliverable.status === 'in-progress')) {
    return [
      {
        id: 'def-4', agent: 'UX',
        action: { verb: 'started', target: 'screen generation batch' },
        message: `Running screen generation for ${deliverable.name}. Reading ux-spec.md for layout constraints.`,
        terminal: [
          { text: `$ npm spryn generate-screens --story ${name} --all`, type: 'cmd' },
          { text: '  Generating screens...', type: 'neutral' },
          { text: '  running...', type: 'running' },
        ],
      },
    ];
  }

  if (phase === 'development' && deliverable.status === 'in-progress') {
    return [
      {
        id: 'def-5', agent: 'Developer',
        action: { verb: 'read', target: `src/${name}.ts` },
        message: `Analysed codebase. Starting implementation of ${deliverable.name}.`,
      },
      {
        id: 'def-6', agent: 'Developer',
        action: { verb: 'write', target: `src/${name}.ts` },
        message: 'Implementation in progress.',
      },
    ];
  }

  // Shaping / design-ready default
  return [
    {
      id: 'def-7', agent: 'PM',
      action: { verb: 'write', target: 'product-brief.md' },
      message: `${deliverable.name} spec being shaped. Reviewing requirements with UX and Architect before finalising.`,
    },
    {
      id: 'def-8', agent: 'UX',
      action: { verb: 'read', target: 'product-brief.md' },
      message: 'Reading spec. Will confirm screen count and flow structure before generation.',
    },
    {
      id: 'def-9', agent: 'Architect', thinking: true,
      message: 'Reviewing technical requirements. Confirming backend dependencies and data contracts.',
    },
  ];
}

function getActivityThread(deliverable: Deliverable, phase: MilestonePhase): ActivityEntry[] {
  return THREADS[deliverable.id] ?? getDefaultThread(deliverable, phase);
}

// ── Agent icon ────────────────────────────────────────────────────────────────
function AgentIcon({ type }: { type: AgentType }) {
  const cls = 'w-[13px] h-[13px] text-[#6b7280]';
  if (type === 'PM') return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="4" y1="4.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="4" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="4" y1="9.5" x2="7.5" y2="9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
  if (type === 'UX') return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="7" y1="1.5" x2="7" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="7" y1="9.5" x2="7" y2="12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
  if (type === 'Architect') return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="2" y="2" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="2" y="8" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="7" y1="6" x2="7" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
  if (type === 'QA') return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="1.5" y="1.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="7.5" y="1.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="1.5" y="7.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="7.5" y="7.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
  // Developer
  return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <path d="M4.5 4L2 7l2.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 4L12 7l-2.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2.5L6 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Action label ──────────────────────────────────────────────────────────────
const VERB_COLORS: Record<string, string> = {
  write: 'text-[#16a34a]',
  read: 'text-[#2563eb]',
  bash: 'text-[#7c3aed]',
  started: 'text-[#0891b2]',
  completed: 'text-[#16a34a]',
  generating: 'text-[#0891b2]',
  testing: 'text-[#0891b2]',
  escalated: 'text-[#d97706]',
  reported: 'text-[#d97706]',
  regenerating: 'text-[#0891b2]',
};

function ActionLabel({ action }: { action: { verb: string; target?: string } }) {
  const isError = action.verb.toLowerCase().includes('failed');
  const isEscalated = action.verb.startsWith('escalated') || action.verb.startsWith('reported');
  const verbColor = isError
    ? 'text-[#dc2626]'
    : isEscalated
    ? 'text-[#d97706]'
    : VERB_COLORS[action.verb] ?? 'text-[#0891b2]';

  return (
    <div className="flex items-center gap-1.5 mb-1.5">
      <span className={`font-mono text-[12px] ${verbColor}`} style={{ fontWeight: 500 }}>
        {action.verb}
      </span>
      {action.target && (
        <span className="font-mono text-[12px] text-[#ea580c] bg-[#fff7ed] px-1.5 py-0.5 rounded">
          {action.target}
        </span>
      )}
    </div>
  );
}

// ── Terminal block ────────────────────────────────────────────────────────────
function TerminalBlock({ lines }: { lines: TerminalLine[] }) {
  const lineColors: Record<string, string> = {
    cmd: 'text-[#94a3b8]',
    pass: 'text-[#4ade80]',
    fail: 'text-[#f87171]',
    running: 'text-[#fbbf24]',
    info: 'text-[#60a5fa]',
    neutral: 'text-[#cbd5e1]',
  };

  return (
    <div className="bg-[#1e1e2e] rounded-[8px] px-4 py-3 my-2 font-mono text-[12px] space-y-0.5 leading-[18px]">
      {lines.map((line, i) => (
        <div key={i} className={lineColors[line.type] ?? 'text-[#cbd5e1]'}>
          {line.text}
        </div>
      ))}
    </div>
  );
}

// ── Progress bar color by status ──────────────────────────────────────────────
function delProgressColor(deliverable: Deliverable) {
  if (deliverable.status === 'completed') return '#22c55e';
  const done = deliverable.acceptanceCriteria.filter(a => a.done).length;
  const inProg = deliverable.acceptanceCriteria.filter(a => a.inProgress).length;
  const total = deliverable.acceptanceCriteria.length;
  if (total === 0) return '#d1d5db';
  const pct = Math.round(((done + inProg * 0.5) / total) * 100);
  if (pct >= 70) return '#22c55e';
  if (pct >= 30) return '#f59e0b';
  return '#d20f1f';
}

function delProgress(deliverable: Deliverable): number {
  if (deliverable.status === 'completed') return 100;
  if (deliverable.status === 'not-started') return 0;
  const done = deliverable.acceptanceCriteria.filter(a => a.done).length;
  const inProg = deliverable.acceptanceCriteria.filter(a => a.inProgress).length;
  const total = deliverable.acceptanceCriteria.length;
  if (total === 0) return 0;
  return Math.round(((done + inProg * 0.5) / total) * 100);
}

// ── Phase badge for milestone section ────────────────────────────────────────
function MilestonePhaseBadge({ phase }: { phase: MilestonePhase }) {
  const map: Record<MilestonePhase, { label: string; bg: string; text: string }> = {
    shaping:             { label: 'Shaping',     bg: '#f3f4f6', text: '#374151' },
    'design-ready':      { label: 'Design Ready', bg: '#fff3e0', text: '#c2410c' },
    designing:           { label: 'Design',       bg: '#fff3e0', text: '#c2410c' },
    'development-ready': { label: 'Dev Ready',    bg: '#dbeafe', text: '#1d4ed8' },
    development:         { label: 'Development',  bg: '#dbeafe', text: '#1d4ed8' },
    uat:                 { label: 'UAT',           bg: '#e0f2fe', text: '#0369a1' },
  };
  const { label, bg, text } = map[phase];
  return (
    <span
      className="inline-block px-[10px] py-[3px] rounded-full text-[13px]"
      style={{ fontWeight: 600, backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
interface StoryDetailModalProps {
  deliverable: Deliverable;
  phase: MilestonePhase;
  model: string;
  milestoneName: string;
  allDeliverables: Deliverable[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onBack: () => void;
}

export function StoryDetailModal({
  deliverable,
  phase,
  model,
  milestoneName,
  allDeliverables,
  currentIndex,
  onNavigate,
  onBack,
}: StoryDetailModalProps) {
  const thread = getActivityThread(deliverable, phase);
  const hasHumanPrompt = thread[thread.length - 1]?.humanPrompt != null;

  const [humanResponse, setHumanResponse] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState('');
  const activityEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    activityEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [humanResponse]);

  // Reset state when navigating between stories
  useEffect(() => {
    setHumanResponse(null);
    setChatInput('');
  }, [deliverable.id]);

  const pct = delProgress(deliverable);
  const barColor = delProgressColor(deliverable);

  const pctTextColor =
    deliverable.status === 'completed'
      ? 'text-[#22c55e]'
      : pct >= 70
      ? 'text-[#22c55e]'
      : pct >= 30
      ? 'text-[#f59e0b]'
      : 'text-[#d20f1f]';

  // Which entries to show in the thread
  const visibleEntries = hasHumanPrompt && humanResponse == null
    ? thread
    : thread.filter(e => !e.humanPrompt);

  const handleHumanSend = (text: string) => {
    if (!text.trim()) return;
    setHumanResponse(text);
    setChatInput('');
  };

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allDeliverables.length - 1;
  const storyLabel = `Story ${currentIndex + 1} of ${allDeliverables.length}`;

  return (
    <div
      className="bg-white rounded-[14px] shadow-[0px_24px_64px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden w-full"
      style={{ maxWidth: 900, maxHeight: '90vh' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* ── Shared header: Back button + Story navigation ── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#e7e7e7] shrink-0">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[14px] text-[#374151] hover:text-[#111827] transition-colors"
          style={{ fontWeight: 500 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Story navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => hasPrev && onNavigate(currentIndex - 1)}
            disabled={!hasPrev}
            className={`p-1 rounded hover:bg-[#f3f4f6] transition-colors ${!hasPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-4 h-4 text-[#374151]" />
          </button>
          <span className="text-[14px] text-[#374151]" style={{ fontWeight: 500 }}>
            {storyLabel}
          </span>
          <button
            onClick={() => hasNext && onNavigate(currentIndex + 1)}
            disabled={!hasNext}
            className={`p-1 rounded hover:bg-[#f3f4f6] transition-colors ${!hasNext ? 'opacity-30 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-4 h-4 text-[#374151]" />
          </button>
        </div>
      </div>

      {/* ── Two-panel body ── */}
      <div className="flex flex-1 min-h-0">

      {/* ── Left panel: Story details ── */}
        <div
          className="flex flex-col shrink-0 border-r border-[#e7e7e7] overflow-y-auto bg-[#f3f4f6]"
          style={{ width: 360, scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}
          onMouseEnter={(e) => (e.currentTarget.style.scrollbarColor = '#d1d5db transparent')}
          onMouseLeave={(e) => (e.currentTarget.style.scrollbarColor = 'transparent transparent')}
>
        <div className="px-6 pt-5 pb-8 space-y-5">
          {/* MILESTONE section */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] mb-2 text-[#6b7280]" style={{ fontWeight: 600 }}>
              Milestone
            </p>
            <h3 className="text-[17px] text-[#111827] leading-[24px] mb-2" style={{ fontWeight: 700 }}>
              {milestoneName}
            </h3>
            <MilestonePhaseBadge phase={phase} />
          </div>

          {/* Divider */}
          <div className="border-t border-[#cccccc]" />

          {/* STORY label + name */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] mb-2 text-[#6b7280]" style={{ fontWeight: 600 }}>
              Story
            </p>
            <h2 className="text-[22px] text-[#111827] leading-[28px]" style={{ fontWeight: 700 }}>
              {deliverable.name}
            </h2>
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="flex-1 h-[6px] rounded-full overflow-hidden bg-[#cccccc]">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: barColor }}
                />
              </div>
              <span className={`text-[14px] shrink-0 ${pctTextColor}`} style={{ fontWeight: 600 }}>
                {pct}%
              </span>
            </div>
          </div>

          {/* User story */}
          {deliverable.userStory && (
            <div>
              <ul className="space-y-1.5">
                {[
                  { prefix: 'As a', content: deliverable.userStory.asA.replace(/^As a\s*/i, '') },
                  { prefix: 'I want to', content: deliverable.userStory.iWant.replace(/^I want to?\s*/i, '') },
                  { prefix: 'so that I', content: deliverable.userStory.soThat.replace(/^So that I\s*/i, '') },
                ].map(({ prefix, content }, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-[#374151] leading-[22px]">
                    <span className="text-[#374151] mt-[3px] shrink-0">•</span>
                    <span>
                      {prefix}{' '}
                      <span style={{ fontWeight: 600 }}>{content}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-[#cccccc]" />

          {/* Acceptance Criteria */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] mb-3 text-[#6b7280]" style={{ fontWeight: 600 }}>
              Acceptance Criteria
            </p>
            <div className="space-y-2.5">
              {deliverable.acceptanceCriteria.map((ac, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  {ac.done ? (
                    <div className="w-[14px] h-[14px] rounded-full bg-[#22c55e] shrink-0 mt-0.5 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                    </div>
                  ) : (
                    <div className={`w-[14px] h-[14px] rounded-sm border shrink-0 mt-0.5 ${ac.inProgress ? 'border-[#f59e0b] bg-[#fef3c7]' : 'border-[#737373] bg-white'}`} />
                  )}
                  <span className={`text-[13px] leading-[20px] ${ac.done ? 'text-[#374151]' : 'text-[#6b7280]'}`}>
                    {ac.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#cccccc]" />

          {/* Effort */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] mb-2 text-[#6b7280]" style={{ fontWeight: 600 }}>
              Effort
            </p>
            {deliverable.effort && (phase === 'development' || phase === 'development-ready' || phase === 'uat') ? (
              <span
                className={`text-[14px] ${
                  deliverable.effort === 'High'
                    ? 'text-[#dc2626]'
                    : deliverable.effort === 'Medium'
                    ? 'text-[#d97706]'
                    : 'text-[#16a34a]'
                }`}
                style={{ fontWeight: 600 }}
              >
                {deliverable.effort}
              </span>
            ) : (
              <span className="text-[14px] text-[#9ca3af]">-</span>
            )}
          </div>

          {/* Active Agents */}
          {deliverable.activeAgents && deliverable.activeAgents.length > 0 && (
            <>
              <div className="border-t border-[#f0f0f0]" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.8px] mb-3 text-[#6b7280]" style={{ fontWeight: 600 }}>
                  Active Agents
                </p>
                <div className="space-y-2">
                  {deliverable.activeAgents.map((agent) => (
                    <div key={agent} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-lg bg-[#ffffff] border border-[#e5e7eb] flex items-center justify-center">
                        <AgentIcon type={agent as AgentType} />
                      </div>
                      <span className="text-[13px] text-[#374151]">{agent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Divider */}
          <div className="border-t border-[#cccccc]" />

          {/* Model in use */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.8px] mb-2 text-[#6b7280]" style={{ fontWeight: 600 }}>
              Model In Use
            </p>
            <span className="text-[13px] text-[#374151]">{model}</span>
          </div>
        </div>
      </div>

      {/* ── Right panel: Agent activity ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-6 pt-5 pb-3 shrink-0 border-b border-[#e7e7e7] bg-[#fafafa]">
          <p className="text-[11px] uppercase tracking-[0.8px] text-[#6b7280]" style={{ fontWeight: 600 }}>
            Agent Activity
          </p>
        </div>

        {/* Activity thread */}
        <div
          className="flex-1 overflow-y-auto px-6 py-4 space-y-5 bg-[#fafafa]"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}
          onMouseEnter={(e) => (e.currentTarget.style.scrollbarColor = '#d1d5db transparent')}
          onMouseLeave={(e) => (e.currentTarget.style.scrollbarColor = 'transparent transparent')}
        >
          {visibleEntries.map((entry) => (
            <div key={entry.id}>
              {/* Agent message */}
              {entry.agent && (
                <div>
                  {/* Agent name row */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-md bg-[#f3f4f6] border border-[#e5e7eb] flex items-center justify-center shrink-0">
                      <AgentIcon type={entry.agent} />
                    </div>
                    <span className="text-[13px] text-[#111827]" style={{ fontWeight: 600 }}>
                      {entry.agent}
                      {entry.thinking && (
                        <span className="text-[#9ca3af] ml-1" style={{ fontWeight: 400 }}>
                          (thinking)
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Action label */}
                  {entry.action && (
                    <div className="ml-7">
                      <ActionLabel action={entry.action} />
                    </div>
                  )}

                  {/* Message */}
                  {entry.message && (
                    <div className="ml-7 text-[13px] text-[#374151] leading-[20px] whitespace-pre-line">
                      {entry.message}
                    </div>
                  )}

                  {/* Terminal */}
                  {entry.terminal && (
                    <div className="ml-7">
                      <TerminalBlock lines={entry.terminal} />
                    </div>
                  )}

                  {/* Image preview */}
                  {entry.imageSrc && (
                    <div className="ml-7 mt-2">
                      <div className="w-[200px] rounded-[8px] overflow-hidden border border-[#e7e7e7]">
                        <img src={entry.imageSrc} alt={entry.imageCaption ?? ''} className="w-full object-cover" />
                      </div>
                      {entry.imageCaption && (
                        <p className="text-[12px] text-[#9ca3af] mt-1">{entry.imageCaption}</p>
                      )}
                    </div>
                  )}

                  {/* Failure card */}
                  {entry.failureCard && (
                    <div className="ml-7 mt-2 bg-[#fff1f2] border border-[#fecdd3] rounded-[8px] px-4 py-3">
                      <p className="text-[13px] text-[#b91c1c] mb-1" style={{ fontWeight: 600 }}>
                        {entry.failureCard.title}
                      </p>
                      <p className="text-[13px] text-[#dc2626] leading-[20px]">
                        {entry.failureCard.body}
                      </p>
                    </div>
                  )}

                  {/* Story completed card */}
                  {entry.storyCompleted && (
                    <div className="ml-7 mt-3 bg-[#f0fdf4] border border-[#bbf7d0] rounded-[8px] px-4 py-3 flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-[14px] text-[#15803d]" style={{ fontWeight: 700 }}>
                          Story Completed
                        </p>
                        <p className="text-[13px] text-[#16a34a] mt-0.5">{entry.storyCompleted}</p>
                      </div>
                    </div>
                  )}

                  {/* Cross-call label */}
                  {entry.crossCallLabel && (
                    <div className="ml-7 mt-2">
                      <span className="text-[12px] text-[#d97706] font-mono">{entry.crossCallLabel}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Human prompt card (shown inline when not yet responded) */}
              {entry.humanPrompt && humanResponse == null && (
                <div className="bg-[#fffbeb] border border-[#fde68a] rounded-[10px] px-4 py-3">
                  <p className="text-[13px] text-[#92400e] mb-1" style={{ fontWeight: 700 }}>
                    Response Needed
                  </p>
                  <p className="text-[13px] text-[#78350f] leading-[20px]">
                    {entry.humanPrompt.question}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Human response (after user picks) */}
          {humanResponse && (
            <div>
              <div className="flex justify-end mb-3">
                <div className="bg-[#541b1f] text-white text-[13px] px-4 py-2 rounded-[10px] rounded-br-[4px] max-w-[80%] leading-[20px]">
                  {humanResponse}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-md bg-[#f3f4f6] border border-[#e5e7eb] flex items-center justify-center shrink-0">
                    <AgentIcon type="PM" />
                  </div>
                  <span className="text-[13px] text-[#111827]" style={{ fontWeight: 600 }}>PM</span>
                </div>
                <p className="ml-7 text-[13px] text-[#374151] leading-[20px]">
                  Acknowledged. Agents resuming — {humanResponse.toLowerCase().startsWith('fix') ? 'shipping the fix in this sprint. Developer will ship BIO-47 in the next 5 minutes.' : 'deferring to BIO-47. Story will be marked ready and development continues on remaining ACs.'}
                </p>
              </div>
            </div>
          )}

          <div ref={activityEndRef} />
        </div>

        {/* ── Bottom: Human input area ── */}
        {hasHumanPrompt && humanResponse == null ? (
          /* Human response required — show option buttons + input */
          <div className="shrink-0 border-t border-[#e7e7e7] px-6 py-4 space-y-2">
            {thread[thread.length - 1].humanPrompt!.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleHumanSend(opt)}
                className="w-full text-left px-4 py-2.5 border border-[#cccccc] rounded-[8px] text-[13px] text-[#374151] hover:bg-[#f9fafb] hover:border-[#d1d5db] transition-colors"
                style={{ fontWeight: 500 }}
              >
                {opt}
              </button>
            ))}
            <p className="text-[12px] text-left text-[#6b7280]">or</p>
            <div className="flex items-center gap-2 border border-[#e7e7e7] rounded-[8px] px-3 py-2 focus-within:border-[#d20f1f] transition-colors">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleHumanSend(chatInput)}
                placeholder="Type something..."
                className="flex-1 text-[13px] bg-transparent outline-none placeholder-[#9ca3af] text-[#374151]"
              />
              <button
                onClick={() => handleHumanSend(chatInput)}
                className="w-7 h-7 rounded-md bg-[#d20f1f] flex items-center justify-center hover:bg-[#b00d1a] transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        ) : (
          /* Normal chat input */
          <div className="shrink-0 border-t border-[#e7e7e7] px-6 py-3 bg-[#ffffff]">
            <div className="flex items-center gap-2 border border-[#e7e7e7] rounded-[8px] px-3 py-2 focus-within:border-[#d20f1f] transition-colors">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && chatInput.trim()) {
                    setChatInput('');
                  }
                }}
                placeholder="Type something..."
                className="flex-1 text-[13px] bg-transparent outline-none placeholder-[#9ca3af] text-[#374151]"
              />
              <button
                className="w-7 h-7 rounded-md bg-[#d20f1f] flex items-center justify-center hover:bg-[#b00d1a] transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
      </div>{/* end two-panel body */}
    </div>
  );
}
