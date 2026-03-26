import { useParams, useNavigate } from 'react-router';
import { projects } from './data';
import { FolderOpen, ChevronRight, MoreVertical, Play, BarChart3, FileText } from 'lucide-react';

function getArtifactLabel(id: string): string {
  const labels: Record<string, string> = {
    roadmap: 'Roadmap',
    issues: 'Issues',
    'product-brief': 'Product Brief',
    prd: 'Product Requirements Document',
    architecture: 'Architecture',
    'ux-spec': 'UX Specifications',
    epics: 'Epics',
    proposal: 'Proposal',
    'design-system': 'Design System',
    prototype: 'Prototype',
  };
  return labels[id] || 'Roadmap';
}

export function ProjectHeader() {
  const { projectId, artifactId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId) || projects[0];
  const currentArtifact = artifactId || 'roadmap';
  const isSpec = ['product-brief', 'prd', 'architecture', 'ux-spec', 'epics', 'proposal'].includes(currentArtifact);

  return (
    <div className="flex items-center justify-between h-[56px] min-h-[56px] px-4 border-b border-[#ccc] bg-white shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[14px]">
        <FolderOpen className="w-[18px] h-[18px] text-[#6b7280]" />
        <span className="text-[#6b7280]">
          {project.name}
        </span>
        <ChevronRight className="w-3 h-3 text-[#9ca3af]" />
        <div className="flex items-center gap-1.5">
          {isSpec ? (
            <FileText className="w-4 h-4 text-[#737373]" />
          ) : (
            <BarChart3 className="w-4 h-4 text-[#d20f1f]" />
          )}
          <span className="text-[#111827]" style={{ fontWeight: 500 }}>
            {getArtifactLabel(currentArtifact)}
          </span>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
          <MoreVertical className="w-4 h-4 text-[#737373]" />
        </button>
        <button className="flex items-center gap-2 border border-[#d20f1f] rounded px-3 py-1.5 text-[14px] text-[#2e2e2e] hover:bg-[#d20f1f]/5 transition-colors" style={{ fontWeight: 600 }}>
          <Play className="w-3 h-3 text-[#2e2e2e] fill-[#2e2e2e]" />
          Preview
        </button>
      </div>
    </div>
  );
}