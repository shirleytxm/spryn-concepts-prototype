import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown, ChevronRight, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { type Milestone, type MilestonePhase, type Deliverable } from './data';
import { StoryDetailModal } from './StoryDetailModal';

// ── Screen images (Figma assets used in all phase variants) ─────────────────
import imgScreen1 from 'figma:asset/4a0b625d1a14616d01c408a075f1459f85bd6c5e.png';
import imgScreen2 from 'figma:asset/a8e0e7565684673839b7b5b3bf9c6932e53c0e10.png';
import imgScreen3 from 'figma:asset/b8b63f1eb93b65b2e908b0d691deef97f32c3a33.png';

// ── Agent icon components ────────────────────────────────────────────────────
function AgentIcon({ type }: { type: string }) {
  const base = 'w-[14px] h-[14px] text-[#6b7280] rounded-lg border-[#e5e7eb] bg-[#ffffff]';
  if (type === 'PM') {
    return (
      <svg className={base} viewBox="0 0 14 14" fill="none">
        <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="4" y1="4.5" x2="10" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="4" y1="7" x2="10" y2="7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="4" y1="9.5" x2="7.5" y2="9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'UX') {
    return (
      <svg className={base} viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7" y1="1.5" x2="7" y2="4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="7" y1="9.5" x2="7" y2="12.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'Architect') {
    return (
      <svg className={base} viewBox="0 0 14 14" fill="none">
        <rect x="2" y="2" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="2" y="8" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7" y1="6" x2="7" y2="8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'QA') {
    return (
      <svg className={base} viewBox="0 0 14 14" fill="none">
        <rect x="1.5" y="1.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2" />
        <rect x="7.5" y="1.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2" />
        <rect x="1.5" y="7.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2" />
        <rect x="7.5" y="7.5" width="5" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (type === 'Developer') {
    return (
      <svg className={base} viewBox="0 0 14 14" fill="none">
        <path d="M4.5 4L2 7l2.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 4L12 7l-2.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2.5L6 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

// ── Phase badge ──────────────────────────────────────────────────────────────
function PhaseBadge({ phase }: { phase: MilestonePhase }) {
  const map: Record<MilestonePhase, { label: string; className: string }> = {
    shaping: { label: 'Shaping', className: 'bg-[#ede9fe] text-[#7c3aed]' },
    'design-ready': { label: 'Design', className: 'bg-[#fff3e0] text-[#c2410c]' },
    designing: { label: 'Design', className: 'bg-[#fff3e0] text-[#c2410c]' },
    'development-ready': { label: 'Development', className: 'bg-[#dbeafe] text-[#1d4ed8]' },
    development: { label: 'Development', className: 'bg-[#dbeafe] text-[#1d4ed8]' },
    uat: { label: 'UAT', className: 'bg-[#e0f2fe] text-[#0369a1]' },
  };
  const { label, className } = map[phase];
  return (
    <span className={`px-[10px] py-[3px] rounded-full text-[13px] ${className}`} style={{ fontWeight: 600 }}>
      {label}
    </span>
  );
}

// ── Progress bar color by phase ──────────────────────────────────────────────
function progressColor(phase: MilestonePhase): string {
  if (phase === 'development' || phase === 'uat') return '#22c55e';
  if (phase === 'development-ready') return '#f59e0b';
  return '#d20f1f';
}

function progressTextColor(phase: MilestonePhase): string {
  if (phase === 'development' || phase === 'uat') return 'text-[#22c55e]';
  if (phase === 'development-ready') return 'text-[#f59e0b]';
  return 'text-[#d20f1f]';
}

// ── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status?: string }) {
  if (status === 'completed') {
    return (
      <span className="px-[8px] py-[2px] rounded-full text-[12px] bg-[#dcfce7] text-[#15803d]" style={{ fontWeight: 500 }}>
        Completed
      </span>
    );
  }
  if (status === 'in-progress') {
    return (
      <span className="px-[8px] py-[2px] rounded-full text-[12px] bg-[#fef3c7] text-[#92400e]" style={{ fontWeight: 500 }}>
        In Progress
      </span>
    );
  }
  return (
    <span className="px-[8px] py-[2px] rounded-full text-[12px] bg-[#fee2e2] text-[#b91c1c]" style={{ fontWeight: 500 }}>
        Not Started
      </span>
  );
}

// ── Effort badge ─────────────────────────────────────────────────────────────
function EffortBadge({ effort }: { effort: 'High' | 'Medium' | 'Low' }) {
  const map = {
    High: 'bg-[#fee2e2] text-[#b91c1c]',
    Medium: 'bg-[#fef3c7] text-[#92400e]',
    Low: 'bg-[#dcfce7] text-[#15803d]',
  };
  return (
    <span className={`px-[8px] py-[2px] rounded-full text-[12px] ${map[effort]}`} style={{ fontWeight: 500 }}>
      {effort}
    </span>
  );
}

// ── Spinning loader icon ─────────────────────────────────────────────────────
function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className ?? 'w-4 h-4'}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
    </svg>
  );
}

// ── Screen designs carousel ──────────────────────────────────────────────────
function ScreenDesignsCarousel({ designs }: { designs: { name: string; image: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
  };

  return (
    <div className="mb-6 bg-[#f9fafb] rounded-[8px] border border-[#e5e7eb] px-4 py-[14px]">
      <p className="text-[18px] text-[#111827] mb-[10px]" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
        Screen Designs
      </p>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-[16px] overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {designs.map((d, i) => (
            <div key={i} className="shrink-0 flex flex-col gap-[8px] items-start w-[192px]">
              <div className="w-full h-[118px] relative overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                />
              </div>
              <span className="text-[12px] text-[#374151] w-full truncate" style={{ fontWeight: 500 }}>
                {d.name}
              </span>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-[10px] top-[59px] -translate-y-1/2 size-[36px] rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
          style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid #737373' }}
        >
          <ChevronRight className="w-5 h-5 text-[#737373]" />
        </button>
      </div>
    </div>
  );
}

// ── Deliverable row ─────────────────────────────────────────────────────────
function DeliverableRow({
  deliverable,
  phase,
  defaultExpanded,
  onViewDetails,
}: {
  deliverable: Deliverable;
  phase: MilestonePhase;
  defaultExpanded: boolean;
  onViewDetails: () => void;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const showEffort = phase === 'development-ready' || phase === 'development' || phase === 'uat';
  const showAgents =
    (phase === 'shaping' || phase === 'development' || phase === 'designing') &&
    deliverable.activeAgents &&
    deliverable.activeAgents.length > 0;

  return (
    <div className="border border-[#e7e7e7] rounded-[10px] overflow-hidden bg-[#F9FAFB]">
      {/* Row header */}
      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Left: chevron + name */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <button
              onClick={() => setExpanded(!expanded)}
              className="shrink-0 p-0.5 rounded hover:bg-gray-100 transition-colors"
            >
              {expanded ? (
                <ChevronDown className="w-[14px] h-[14px] text-[#6b7280]" />
              ) : (
                <ChevronRight className="w-[14px] h-[14px] text-[#6b7280]" />
              )}
            </button>
            <span className="text-[14px] text-[#111827] truncate" style={{ fontWeight: 500 }}>
              {deliverable.name}
            </span>
          </div>

          {/* Right columns */}
          <div className="flex items-start gap-2 shrink-0 ml-4">
            {/* Status */}
            <div className="w-[100px] flex justify-start">
              <StatusBadge status={deliverable.status} />
            </div>

            {/* Effort */}
            <div className="w-[72px] flex justify-start">
              {showEffort ? (
                <EffortBadge effort={deliverable.effort} />
              ) : (
                <span className="text-[13px] text-[#9ca3af]">-</span>
              )}
            </div>

            {/* Active Agents */}
            <div className="w-[110px] flex flex-col gap-1">
              {showAgents ? (
                deliverable.activeAgents!.map((agent) => (
                  <div key={agent} className="flex items-center gap-1.5">
                    <AgentIcon type={agent} />
                    <span className="text-[12px] text-[#6b7280]">{agent}</span>
                  </div>
                ))
              ) : (
                <span className="text-[13px] text-[#9ca3af]">-</span>
              )}
            </div>
          </div>
        </div>

        {/* Expanded content: Story + AC */}
        {expanded && (deliverable.userStory || deliverable.acceptanceCriteria.length > 0) && (
          <div className="mt-4 ml-6 space-y-4">
            {/* Story */}
            {deliverable.userStory && (
              <div className="bg-[#f2f2f2] border border-[#cccccc] rounded-[6px] px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.8px] mb-2 text-[#6b7280]" style={{ fontWeight: 600 }}>
                  Story
                </p>
                <p className="text-[14px] text-[#374151] leading-[22px]">
                  As a <span style={{ fontWeight: 600 }}>{deliverable.userStory.asA.replace(/^As a /, '')}</span>
                  <br />
                  I want <span style={{ fontWeight: 600 }}>{deliverable.userStory.iWant.replace(/^I want /, '')}</span>
                  <br />
                  So that <span style={{ fontWeight: 600 }}>{deliverable.userStory.soThat.replace(/^So that /, '')}</span>
                </p>
              </div>
            )}

            {/* Acceptance Criteria */}
            {deliverable.acceptanceCriteria.length > 0 && (
              <div>
                <p className="text-[10px] text-[#9ca3af] uppercase tracking-[0.8px] mb-2" style={{ fontWeight: 600 }}>
                  Acceptance Criteria
                </p>
                <div className="space-y-2">
                  {deliverable.acceptanceCriteria.map((ac, i) => (
                    <div key={i} className="flex items-start gap-2.5 pl-1">
                      {ac.done ? (
                        <div className="w-3 h-3 shrink-0 mt-0.5">
                          <svg className="w-full h-full" fill="none" viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6" fill="#22C55E" />
                            <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : ac.inProgress ? (
                        <div className="w-3 h-3 rounded-full bg-[#ffb625] shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-[#d1d5db] shrink-0 mt-0.5" />
                      )}
                      <span className="text-[14px] text-[#374151] leading-[20px]">{ac.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* View Details */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-1 text-[13px] text-[#374151] hover:text-[#111827] transition-colors"
            style={{ fontWeight: 500 }}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main MilestoneModal component ────────────────────────────────────────────
interface MilestoneModalProps {
  milestone: Milestone;
  onClose: () => void;
}

export function MilestoneModal({ milestone, onClose }: MilestoneModalProps) {
  const [phaseOverride, setPhaseOverride] = useState<MilestonePhase | null>(null);
  const [genProgress, setGenProgress] = useState(0);
  const genIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedDeliverable, setSelectedDeliverable] = useState<Deliverable | null>(null);

  const currentPhase = phaseOverride ?? milestone.phase;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => { if (genIntervalRef.current) clearInterval(genIntervalRef.current); };
  }, []);

  const handleGenerateScreens = useCallback(() => {
    setPhaseOverride('designing');
    setGenProgress(0);
    const total = milestone.screenCount ?? 16;
    let current = 0;
    genIntervalRef.current = setInterval(() => {
      current += 1;
      setGenProgress(current);
      if (current >= total) {
        clearInterval(genIntervalRef.current!);
        setTimeout(() => setPhaseOverride('development-ready'), 400);
      }
    }, 160);
  }, [milestone.screenCount]);

  const handleStartDevelopment = useCallback(() => {
    setPhaseOverride('development');
  }, []);

  const screenDesigns = milestone.screenDesigns ?? [
    { name: 'Login Screen', image: imgScreen1 },
    { name: 'Signup Flow', image: imgScreen2 },
    { name: 'Onboarding Steps', image: imgScreen3 },
  ];

  const barColor = progressColor(currentPhase);
  const pctColor = progressTextColor(currentPhase);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)' }}
      onClick={selectedDeliverable ? undefined : onClose}
    >
      {selectedDeliverable ? (
        /* ── Story Detail view (swaps the milestone modal) ── */
        <StoryDetailModal
          deliverable={selectedDeliverable}
          phase={currentPhase}
          model={milestone.model}
          milestoneName={milestone.name}
          allDeliverables={milestone.deliverables}
          currentIndex={milestone.deliverables.findIndex(d => d.id === selectedDeliverable.id)}
          onNavigate={(idx) => setSelectedDeliverable(milestone.deliverables[idx])}
          onBack={() => setSelectedDeliverable(null)}
        />
      ) : (
        /* ── Milestone Overview modal ── */
        <div
          className="bg-white rounded-[14px] shadow-[0px_24px_64px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden w-full max-h-[90vh]"
          style={{ maxWidth: 900 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header ── */}
          <div className="px-7 pt-6 pb-5 shrink-0 border-b border-[#d9d9d9]">
            <div className="flex items-start justify-between mb-5">
              <h2 className="text-[22px] text-[#111827] leading-[28px]" style={{ fontWeight: 700 }}>
                {milestone.name}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-gray-100 transition-colors shrink-0 ml-4"
              >
                <X className="w-4 h-4 text-[#6b7280]" />
              </button>
            </div>

            {/* Meta rows */}
            <div className="space-y-[11px]">
              {/* Phase */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#374151]">Phase</span>
                <PhaseBadge phase={currentPhase} />
              </div>
              {/* Sprint Duration */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#374151]">Estimated Sprint Duration:</span>
                <span className="text-[14px] text-[#111827]">
                  {milestone.startDate} – {milestone.endDate}
                  <span className="text-[#9ca3af] mx-2">•</span>
                  {milestone.sprintDays} Days
                </span>
              </div>
              {/* Story Points */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#374151]">Estimated Story Points</span>
                <span className="text-[14px] text-[#111827]">{milestone.storyPoints}</span>
              </div>
              {/* Model */}
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#374151]">Model In Use:</span>
                <span className="text-[14px] text-[#111827]">{milestone.model}</span>
              </div>
              {/* Progress */}
              <div className="flex items-center gap-3">
                <span className="text-[14px] text-[#374151] shrink-0">Overall Progress:</span>
                <div className="flex-1 h-[6px] bg-[#e5e7eb] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${milestone.progress}%`, backgroundColor: barColor }}
                  />
                </div>
                <span className={`text-[14px] shrink-0 ${pctColor}`} style={{ fontWeight: 600 }}>
                  {milestone.progress}%
                </span>
              </div>
            </div>
          </div>

          {/* ── Scrollable body ── */}
          <div className="flex-1 overflow-y-auto px-7 pb-7 pt-5"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.scrollbarColor = '#d1d5db transparent')}
            onMouseLeave={(e) => (e.currentTarget.style.scrollbarColor = 'transparent transparent')}
          >
            {/* ── Phase-specific banners ── */}

            {/* Design Ready: Generate Screens */}
            {currentPhase === 'design-ready' && (
              <div className="mb-6 border border-[#d1fae5] bg-[#f0fdf4] rounded-[10px] px-4 py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[14px] text-[#15803d]" style={{ fontWeight: 800 }}>
                      Requirements are shaped for all deliverables
                    </p>
                    <p className="text-[13px] mt-0.5 text-[#008330]">
                      All stories reviewed by agents — screens are ready to be generated
                    </p>
                    <p className="text-[13px] mt-0.5 text-[#008330]">
                      • {milestone.screenCount ?? 16} screens across {milestone.storyCount ?? 4} stories
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleGenerateScreens}
                  className="shrink-0 bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] px-4 py-2 rounded-[7px] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Generate Screens
                </button>
              </div>
            )}

            {/* Designing: Generation in progress */}
            {currentPhase === 'designing' && (
              <div className="mb-6 border border-[#bfdbfe] bg-[#eff6ff] rounded-[10px] px-4 py-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <SpinnerIcon className="w-4 h-4 text-[#3b82f6]" />
                  <p className="text-[14px] text-[#1d4ed8]" style={{ fontWeight: 800 }}>
                    Generating screens…{' '}
                    <span style={{ fontWeight: 400 }}>
                      {genProgress} of {milestone.screenCount ?? 16} complete
                    </span>
                  </p>
                </div>
                <p className="text-[13px] ml-6 text-[#1d4ed8]">
                  {milestone.generationActivity ?? 'UX Agent is generating screens…'}
                </p>
                {/* Progress bar */}
                <div className="mt-3 h-[4px] bg-[#bfdbfe] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3b82f6] rounded-full transition-all duration-200"
                    style={{ width: `${(genProgress / (milestone.screenCount ?? 16)) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Development Ready: Start Development */}
            {currentPhase === 'development-ready' && (
              <div className="mb-6 border border-[#d1fae5] bg-[#f0fdf4] rounded-[10px] px-4 py-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#15803d]" style={{ fontWeight: 800 }}>
                      Ready to Start Implementation
                    </p>
                    <p className="text-[13px] text-[#16a34a] mt-0.5">
                      All stories and screens reviewed by agents — ready to commence development workflow
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleStartDevelopment}
                  className="shrink-0 bg-[#16a34a] hover:bg-[#15803d] text-white text-[13px] px-4 py-2 rounded-[7px] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Start Development
                </button>
              </div>
            )}

            {/* Development active: activity cards */}
            {currentPhase === 'development' && milestone.developmentActivities && (
              <div className="mb-6 p-4 bg-[#F5F9FF] border border-[#BFDBFE] rounded-md">
                <p className="text-[14px] text-[#374151] mb-3" style={{ fontWeight: 600 }}>
                  Multiple agents are working simultaneously
                </p>
                <div className="space-y-2">
                  {milestone.developmentActivities.map((activity, i) => (
                    <div key={i} className="bg-[#E5F1FF] border border-[#bfdbfe] rounded-[8px] px-4 py-3">
                      <div className="flex items-center gap-2 mb-0.5">
                        <SpinnerIcon className="w-3.5 h-3.5 text-[#3b82f6]" />
                        <p className="text-[13px] text-[#1d4ed8]" style={{ fontWeight: 800 }}>
                          {activity.title}
                        </p>
                      </div>
                      <p className="text-[13px] ml-5 text-[#1d4ed8]">{activity.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* UAT: Preview banner */}
            {currentPhase === 'uat' && milestone.previewUrl && (
              <div className="mb-6 border border-[#d1fae5] bg-[#f0fdf4] rounded-[10px] px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-5 h-5 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-[#15803d]" style={{ fontWeight: 600 }}>
                      A Preview Is Ready!
                    </p>
                    <p className="text-[13px] text-[#16a34a] truncate">{milestone.previewUrl}</p>
                  </div>
                </div>
                <a
                  href={`https://${milestone.previewUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-white border border-[#d1fae5] text-[#15803d] text-[13px] px-4 py-1.5 rounded-[7px] flex items-center gap-1.5 hover:bg-[#f0fdf4] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  Open
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            {/* UAT: Milestone Summary */}
            {currentPhase === 'uat' && (
              <div className="mb-6 border border-[#e7e7e7] rounded-[12px] overflow-hidden">
                <div className="px-5 py-5">
                  <h3 className="text-[18px] text-[#111827] mb-2" style={{ fontWeight: 700 }}>
                    Milestone Summary
                  </h3>
                  {milestone.milestoneSummary && (
                    <p className="text-[14px] text-[#374151] leading-[22px] mb-5">
                      {milestone.milestoneSummary}
                    </p>
                  )}
                  
            {/* Divider */}
               <div className="border-t border-[#cccccc]" />
                  
                  {milestone.whatChanged && milestone.whatChanged.length > 0 && (
                    <div className="my-5">
                      <h4 className="text-[18px] text-[#111827] mb-2.5" style={{ fontWeight: 700 }}>
                        What changed
                      </h4>
                      <div className="space-y-2">
                        {milestone.whatChanged.map((entry, i) => {
                          const parts = entry.split(' — ');
                          const pathPart = parts[0];
                          const descPart = parts[1];
                          const words = pathPart.split(' ');
                          const action = words[0];
                          const path = words.slice(1).join(' ');
                          return (
                            <div key={i} className="flex items-start gap-1.5 text-[13px] text-[#374151]">
                              <span className="text-[#6b7280] shrink-0">{action}</span>
                              <code className="bg-[#f3f4f6] px-1.5 py-0.5 rounded text-[12px] text-[#111827] font-mono shrink-0">
                                {path}
                              </code>
                              {descPart && <span className="text-[#6b7280]">— {descPart}</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
            {/* Divider */}
               <div className="border-t border-[#cccccc]" />
                  
                  {milestone.storiesCompleted && milestone.storiesCompleted.length > 0 && (
                    <div className="my-5">
                      <div className="text-[18px] text-[#111827] mb-2.5" style={{ fontWeight: 700 }}>
                        Stories completed
                      </div>
                      <div className="space-y-2">
                        {milestone.storiesCompleted.map((story, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0" />
                            <span className="text-[14px] text-[#374151]">{story}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
            
                {milestone.githubPR && (
                  <div className="border-t border-[#e7e7e7] px-5 py-3 flex flex-col gap-2">
                    <div className="text-[18px] text-[#111827] mb-2.5" style={{ fontWeight: 700 }}>
                        Github PR
                    </div>
                    <div className="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <circle cx="4" cy="3" r="1.5" stroke="#6b7280" strokeWidth="1.2" />
                      <circle cx="4" cy="11" r="1.5" stroke="#6b7280" strokeWidth="1.2" />
                      <circle cx="10" cy="3" r="1.5" stroke="#6b7280" strokeWidth="1.2" />
                      <path d="M4 4.5v5" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M10 4.5C10 7 7 8 4 8" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <a
                      href="#"
                      className="text-[14px] text-[#2563EB] hover:text-[#111827] transition-colors underline"
                      style={{ fontWeight: 700 }}
                    >
                      View GitHub PR #{milestone.githubPR.number}
                      <span className="text-[#2563EB] ml-1">
                        — feat/{milestone.githubPR.branch.replace('feat/', '')}
                      </span>
                    </a>
                    <ExternalLink className="w-4 h-4 text-[#9ca3af] ml-auto shrink-0" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Screen designs carousel (dev-ready and uat) */}
            {(currentPhase === 'development-ready' || currentPhase === 'uat') && (
              <ScreenDesignsCarousel designs={screenDesigns} />
            )}

            {/* ── Deliverables section ── */}
            <div>
              {/* Column headers */}
              <div className="flex items-center mb-3 py-4 pr-4">
                <div className="flex-1">
                  <span className="text-[18px] text-[#111827]" style={{ fontWeight: 900 }}>
                    Deliverables
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-[100px] text-[11px] text-[#6b7280] uppercase tracking-[0.6px]" style={{ fontWeight: 600 }}>
                    Status
                  </div>
                  <div className="w-[72px] text-[11px] text-[#6b7280] uppercase tracking-[0.6px]" style={{ fontWeight: 600 }}>
                    Effort
                  </div>
                  <div className="w-[110px] text-[11px] text-[#6b7280] uppercase tracking-[0.6px]" style={{ fontWeight: 600 }}>
                    Active Agent
                  </div>
                </div>
              </div>

              {/* Deliverable rows */}
              <div className="space-y-3">
                {milestone.deliverables.map((del, idx) => (
                  <DeliverableRow
                    key={del.id}
                    deliverable={del}
                    phase={currentPhase}
                    defaultExpanded={idx === 0 && (currentPhase === 'shaping' || currentPhase === 'development')}
                    onViewDetails={() => setSelectedDeliverable(del)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}