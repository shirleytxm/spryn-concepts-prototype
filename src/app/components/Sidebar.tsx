import { useState, useEffect } from 'react';
import imgLogo from "figma:asset/670fdcff9c2e8443c0687e5eb82367463f603e9d.png";
import svgFolder from '../../imports/svg-88sdft8z1t';
import svgArtifacts from '../../imports/svg-szgy3xhon3';
import svgAgents from '../../imports/svg-ecf1gtah83';

interface SidebarProps {
  activeIcon: 'projects' | 'artifacts' | 'agents' | 'upload' | null;
  onIconClick: (icon: 'projects' | 'artifacts' | 'agents' | 'upload') => void;
}

const sidebarIcons = [
  {
    id: 'projects' as const,
    label: 'Projects',
    shortcut: 'Ctrl+1',
    path: svgFolder.p3ce5e700,
    viewBox: '0 0 24 24',
    strokeWidth: '1.5',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  },
  {
    id: 'artifacts' as const,
    label: 'Artifacts',
    shortcut: 'Ctrl+2',
    path: svgArtifacts.pc0a4f21,
    viewBox: '0 0 24 24',
    strokeWidth: '1.5',
    strokeLinecap: undefined,
    strokeLinejoin: 'round' as const,
  },
];

// Upload icon uses lucide-style SVG paths directly (no import needed)
const UPLOAD_ICON_PATHS = [
  // Cloud with arrow up
  { d: 'M12 16V8M12 8L9 11M12 8L15 11', stroke: true },
  { d: 'M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3', stroke: true },
];

export function Sidebar({ activeIcon, onIconClick }: SidebarProps) {
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
        if (e.key === '1') { e.preventDefault(); onIconClick('projects'); }
        if (e.key === '2') { e.preventDefault(); onIconClick('artifacts'); }
        if (e.key === '3') { e.preventDefault(); onIconClick('agents'); }
        if (e.key === '4') { e.preventDefault(); onIconClick('upload'); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onIconClick]);

  return (
    <div className="flex flex-col items-center w-[56px] min-w-[56px] bg-[#541b1f] h-full z-50">
      {/* Logo */}
      <div className="flex items-center justify-center w-full h-[56px]">
        <img src={imgLogo} alt="Logo" className="w-7 h-7" />
      </div>

      {/* Nav Icons */}
      <div className="flex flex-col gap-3 mt-2 px-2 w-full">
        {sidebarIcons.map((item) => (
          <SidebarIcon
            key={item.id}
            item={item}
            isActive={activeIcon === item.id}
            isDisabled={item.id === 'agents'}
            onClick={() => onIconClick(item.id)}
          />
        ))}

        {/* Upload Icon — 3rd position (between Artifacts and Agents) */}
        <UploadSidebarIcon
          isActive={activeIcon === 'upload'}
          onClick={() => onIconClick('upload')}
        />

        {/* Agents icon — 4th */}
        <SidebarIcon
          item={{
            id: 'agents' as const,
            label: 'Agent Executions',
            shortcut: 'Ctrl+4',
            path: svgAgents.p1beb9e00,
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            strokeLinecap: 'round' as const,
            strokeLinejoin: 'round' as const,
          }}
          isActive={activeIcon === 'agents'}
          isDisabled={true}
          onClick={() => onIconClick('agents')}
        />
      </div>
    </div>
  );
}

function SidebarIcon({
  item,
  isActive,
  isDisabled,
  onClick,
}: {
  item: typeof sidebarIcons[0];
  isActive: boolean;
  isDisabled: boolean;
  onClick: () => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
          isActive
            ? 'bg-white/20'
            : isDisabled
              ? 'opacity-50 cursor-default'
              : 'hover:bg-white/10'
        }`}
      >
        <svg width="20" height="20" viewBox={item.viewBox} fill="none">
          <path
            d={item.path}
            stroke="white"
            strokeWidth={item.strokeWidth}
            strokeLinecap={item.strokeLinecap}
            strokeLinejoin={item.strokeLinejoin}
          />
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-[60] pointer-events-none">
          <div className="relative bg-[#1f1f1f] text-white text-[12px] px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg flex items-center gap-2">
            <span>{item.label}</span>
            <span className="text-[10px] text-white/50 bg-white/10 px-1.5 py-0.5 rounded">{item.shortcut}</span>
            {/* Arrow */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-[#1f1f1f]" />
          </div>
        </div>
      )}
    </div>
  );
}

function UploadSidebarIcon({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors ${
          isActive ? 'bg-white/20' : 'hover:bg-white/10'
        }`}
      >
        {/* Upload / cloud-upload icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 z-[60] pointer-events-none">
          <div className="relative bg-[#1f1f1f] text-white text-[12px] px-2.5 py-1.5 rounded-md whitespace-nowrap shadow-lg flex items-center gap-2">
            <span>Upload Files</span>
            <span className="text-[10px] text-white/50 bg-white/10 px-1.5 py-0.5 rounded">Ctrl+4</span>
            <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[5px] border-r-[#1f1f1f]" />
          </div>
        </div>
      )}
    </div>
  );
}