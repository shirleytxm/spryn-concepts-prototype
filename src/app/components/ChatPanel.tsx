import { useState, useRef, useCallback, useEffect } from 'react';
import { Send, ChevronRight, ChevronDown, Check, MessageSquare } from 'lucide-react';
import { chatMessages, agents, type ChatMessage } from './data';
import imgLogo from "figma:asset/670fdcff9c2e8443c0687e5eb82367463f603e9d.png";

/** Renders inline bold (**text**) within a string */
function renderInlineBold(text: string) {
  return text.split('**').map((part, j) =>
    j % 2 === 1 ? (
      <span key={j} style={{ fontWeight: 600 }}>{part}</span>
    ) : (
      <span key={j}>{part}</span>
    )
  );
}

/** Lightweight markdown renderer for chat messages */
function ChatMarkdown({ content }: { content: string }) {
  const blocks = content.split('\n\n');

  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        // Horizontal rule
        if (trimmed === '---' || trimmed === '***') {
          return <hr key={i} className="my-3 border-t border-[#e0e0e0]" />;
        }

        // Check if the block is a list of bullet lines
        const lines = trimmed.split('\n');
        const isBulletList = lines.every((l) => l.startsWith('- '));

        if (isBulletList) {
          return (
            <ul key={i} className={`pl-4 space-y-1 ${i > 0 ? 'mt-2' : ''}`}>
              {lines.map((line, li) => (
                <li key={li} className="flex items-start gap-1.5">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-current shrink-0" />
                  <span>{renderInlineBold(line.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Regular paragraph (may contain single-line bullet items mixed with text)
        // Handle blocks that start with text and have trailing bullet lines
        const hasMixedBullets = lines.some((l) => l.startsWith('- ')) && !isBulletList;

        if (hasMixedBullets) {
          return (
            <div key={i} className={i > 0 ? 'mt-3' : ''}>
              {lines.map((line, li) => {
                if (line.startsWith('- ')) {
                  return (
                    <div key={li} className="flex items-start gap-1.5 pl-2 mt-0.5">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-current shrink-0" />
                      <span>{renderInlineBold(line.replace(/^- /, ''))}</span>
                    </div>
                  );
                }
                return <div key={li}>{renderInlineBold(line)}</div>;
              })}
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={i} className={i > 0 ? 'mt-3' : ''}>
            {renderInlineBold(trimmed)}
          </p>
        );
      })}
    </>
  );
}

interface ChatPanelProps {
  width: number;
  collapsed: boolean;
  onWidthChange: (w: number) => void;
  onCollapsedChange: (c: boolean) => void;
}

export function ChatPanel({ width, collapsed, onWidthChange, onCollapsedChange }: ChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(chatMessages);
  const [input, setInput] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(agents[0]);
  const [agentDropdownOpen, setAgentDropdownOpen] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startWidth.current = width;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = startX.current - e.clientX;
      const newWidth = Math.max(0, Math.min(600, startWidth.current + delta));
      if (newWidth < 60) {
        onCollapsedChange(true);
        onWidthChange(340);
      } else {
        onCollapsedChange(false);
        onWidthChange(newWidth);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [width, onWidthChange, onCollapsedChange]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Steps progress
  const totalSteps = 11;
  const currentStep = 7;
  const completedSteps = 6;

  if (collapsed) {
    return (
      <CollapsedChatPill onExpand={() => onCollapsedChange(false)} />
    );
  }

  return (
    <div className="flex h-full" style={{ width }}>
      {/* Resize handle */}
      <div
        onMouseDown={handleMouseDown}
        className="w-[6px] min-w-[6px] cursor-col-resize hover:bg-[#d20f1f]/20 transition-colors flex items-center justify-center group border-l border-[#e7e7e7]"
      >
        <div className="w-[3px] h-8 rounded-full bg-gray-300 group-hover:bg-[#d20f1f] transition-colors" />
      </div>

      {/* Chat content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white border-l border-[#e7e7e7]">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[#e7e7e7]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={imgLogo} alt="Logo" className="w-5 h-5" />
            </div>
            <span className="text-[14px] text-[#111827]" style={{ fontWeight: 600 }}>Spryn</span>
          </div>

          <div className="text-[12px] text-[#6b7280] mb-2">Select Agent:</div>

          {/* Agent selector */}
          <div className="relative">
            <button
              onClick={() => setAgentDropdownOpen(!agentDropdownOpen)}
              className="w-full flex items-center justify-between border border-[#e7e7e7] rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="2" width="10" height="12" rx="1" stroke="#737373" strokeWidth="1.2" />
                    <line x1="5" y1="5" x2="11" y2="5" stroke="#737373" strokeWidth="1" />
                    <line x1="5" y1="7.5" x2="11" y2="7.5" stroke="#737373" strokeWidth="1" />
                    <line x1="5" y1="10" x2="9" y2="10" stroke="#737373" strokeWidth="1" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[13px] text-[#111827]">
                    <span style={{ fontWeight: 600 }}>{selectedAgent.role}</span>
                    <span className="text-[#6b7280] ml-2">"{selectedAgent.name}"</span>
                  </div>
                  <div className="text-[12px] text-[#6b7280]">{selectedAgent.task}</div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {agentDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e7e7e7] rounded-lg shadow-lg z-20">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => {
                      setSelectedAgent(agent);
                      setAgentDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors text-[13px]"
                  >
                    <span style={{ fontWeight: 600 }}>{agent.role}</span>
                    <span className="text-[#6b7280] ml-2">"{agent.name}"</span>
                    <div className="text-[12px] text-[#6b7280]">{agent.task}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Step progress */}
        <div className="px-4 py-3 border-b border-[#e7e7e7]">
          <div className="text-[12px] text-[#374151] mb-2" style={{ fontWeight: 500 }}>
            Step {currentStep} of {totalSteps}: Project Type
          </div>
          <div className="flex gap-1 items-center">
            {Array.from({ length: totalSteps }, (_, i) => {
              const stepNum = i + 1;
              if (stepNum <= completedSteps) {
                return (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#d20f1f] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                );
              }
              if (stepNum === currentStep) {
                return (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#d20f1f] flex items-center justify-center text-white text-[11px]" style={{ fontWeight: 600 }}>
                    {stepNum}
                  </div>
                );
              }
              return (
                <div key={i} className="w-6 h-6 rounded-full border border-[#d1d5db] flex items-center justify-center text-[#9ca3af] text-[11px]">
                  {stepNum}
                </div>
              );
            })}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              {msg.role === 'user' && (
                <div className="text-[11px] text-[#9ca3af] mb-1 mr-1">Me</div>
              )}
              <div
                className={`max-w-[90%] rounded-lg px-3 py-2 text-[13px] leading-[20px] ${
                  msg.role === 'user'
                    ? 'bg-[#541B1F] text-white'
                    : 'bg-[#f9fafb] border border-[#e7e7e7] text-[#374151]'
                }`}
              >
                <ChatMarkdown content={msg.content} />
              </div>
              <div className="text-[11px] text-[#9ca3af] mt-1 mx-1">{msg.timestamp}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-[#e7e7e7]">
          <div className="flex items-center gap-2 border border-[#e7e7e7] rounded-lg px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type something..."
              className="flex-1 text-[13px] bg-transparent outline-none placeholder-[#9ca3af]"
            />
            <button
              onClick={handleSend}
              className="w-7 h-7 rounded-full bg-[#d20f1f] flex items-center justify-center hover:bg-[#b00d1a] transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollapsedChatPill({ onExpand }: { onExpand: () => void }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative h-full flex items-center">
      <button
        onClick={onExpand}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center bg-[#eeb4b8] border-l border-t border-b border-[#ccc] rounded-l-[30px] w-[26px] py-3 cursor-pointer hover:bg-[#e0a0a4] transition-colors"
      >
        <MessageSquare className="w-4 h-4 text-black" />
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 z-[60] pointer-events-none">
          <div className="relative bg-[#1f1f1f] text-white text-[12px] px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg">
            Open AI Chat
            {/* Arrow */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-[#1f1f1f]" />
          </div>
        </div>
      )}
    </div>
  );
}