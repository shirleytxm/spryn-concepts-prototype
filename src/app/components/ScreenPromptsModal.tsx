import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-3uxgz3lo5f';

// ── Mock screen prompt data ───────────────────────────────────────────────────

export interface ScreenPrompt {
  id: string;
  title: string;
  content: string;
}

export const DEFAULT_PROMPTS: ScreenPrompt[] = [
  {
    id: 'sp1',
    title: 'Screen Title #1',
    content: `Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:
Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.
Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.
Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.
Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.
Footer: At the bottom of the modal, include pagination controls centered horizontally, showing "← Previous" and "Next →" buttons with the current page indicator "Page 1 of 4" between them.`,
  },
  {
    id: 'sp2',
    title: 'Screen Title #2',
    content: `Design a full-screen modal overlay that presents a comprehensive 4-column browse layout for screen prompts. The modal should feature:
Header Section: A prominent title "Browse Screen Prompts" aligned left, with a close button (X icon) positioned in the top-right corner. Include a search bar below the title with placeholder text "Search by epic, story, or screen name..." that spans the full width with subtle rounded corners and a light gray background.
Filter Bar: Below the search, display a horizontal row of filter chips including "All Epics", "Epic 1", "Epic 2", "Epic 3", etc. The active filter should be highlighted with the brand red color (#D10F19), while inactive filters maintain a light gray appearance. Each chip should have subtle over states.
Grid Layout: The main content area displays screen prompt cards in a 4-column grid with consistent spacing. Each card includes: a thumbnail preview image at the top (16:9 aspect ratio), the screen name as a heading, the parent story name in smaller gray text, and a brief one-line description. Cards should have subtle shadows and scale slightly on hover.
Card Interaction: When hovering over a card, display an overlay with two action buttons: "View Prompt" (primary) and "Copy" (secondary). The overlay should have a semi-transparent dark background that smoothly fades in.`,
  },
  {
    id: 'sp3',
    title: 'Screen Title #3',
    content: `Design a detail panel that appears when a user selects a screen prompt card. The panel should occupy the right side of the modal.
Panel Header: Display the screen name prominently, with the parent epic and story name below it in gray. Include action buttons: "Copy Prompt", "Edit", and "Close". The close button (X) should be in the top right corner.
Content Area: Show the full prompt text in a readable format with proper line-height and typography. Include metadata like generation date, associated epic, and story reference tags.
Footer Actions: "Use in Design Tool" primary button and "Share" secondary button.`,
  },
];

// ── Copy icon (from Figma svg-3uxgz3lo5f) ────────────────────────────────────

function CopyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d={svgPaths.p4350bf0}
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p171ee8e0}
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ── Close icon (two diagonal lines from Figma) ────────────────────────────────

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d={svgPaths.p3364c680} fill="black" />
      <path d={svgPaths.p3906de00} fill="black" />
    </svg>
  );
}

// ── Copy button with "copied" flash ──────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-[12px] right-[12px] bg-white border border-[#cccccc] rounded-[4px] p-2 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
      title="Copy"
      style={{ zIndex: 1 }}
    >
      {copied ? (
        /* Checkmark when copied */
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d={svgPaths.p3de7e600} stroke="#16a34a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      ) : (
        <CopyIcon />
      )}
    </button>
  );
}

// ── Main modal ────────────────────────────────────────────────────────────────

interface ScreenPromptsModalProps {
  open: boolean;
  title?: string;
  prompts?: ScreenPrompt[];
  onClose: () => void;
}

export function ScreenPromptsModal({
  open,
  title = 'Story 3.1: Image Upload via Slash Command',
  prompts = DEFAULT_PROMPTS,
  onClose,
}: ScreenPromptsModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        /* Backdrop */
        <motion.div
          key="sp-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.45)' }}
          onClick={onClose}
        >
          {/* Modal panel */}
          <motion.div
            key="sp-panel"
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[12px] shadow-[0px_24px_64px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden"
            style={{ width: '800px', maxWidth: '96vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-[24px] py-[24px] shrink-0">
              <h2
                className="text-black leading-[30px]"
                style={{
                  fontWeight: 500,
                  fontSize: '24px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-6 h-6 shrink-0 ml-4 hover:opacity-60 transition-opacity"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Scrollable prompt list */}
            <div className="flex-1 overflow-y-auto px-[24px] pb-[24px] flex flex-col gap-[24px]">
              {prompts.map((prompt) => (
                <div key={prompt.id} className="flex flex-col gap-[12px]">
                  {/* Section label — "Screen Title #N" */}
                  <div className="flex items-center w-full">
                    <span
                      className="text-black leading-[19.5px] truncate"
                      style={{
                        fontSize: '16px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {prompt.title}
                    </span>
                  </div>

                  {/* Code block — light gray, Space Mono, copy btn absolute top-right */}
                  <div
                    className="relative rounded-[8px] overflow-hidden w-full"
                    style={{ background: '#f2f2f2' }}
                  >
                    <div className="flex flex-col gap-[12px] p-[12px] w-full">
                      <div
                        className="flex-1 min-w-0 text-black leading-[1.5] max-h-[300px] overflow-y-auto pr-[44px]"
                        style={{
                          fontSize: '16px',
                          fontFamily: "'Space Mono', 'Courier New', monospace",
                          fontWeight: 400,
                          wordBreak: 'break-word',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {prompt.content}
                      </div>
                    </div>

                    {/* Absolute copy button */}
                    <CopyButton text={prompt.content} />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-[24px] py-[16px] shrink-0 flex justify-end border-t border-[#f0f0f0]">
              <button
                onClick={onClose}
                className="text-white text-[14px] px-5 py-2 rounded-[6px] transition-colors"
                style={{
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  background: '#d20f1f',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#b80d1a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#d20f1f')}
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}