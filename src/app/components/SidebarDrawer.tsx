import { useNavigate, useParams } from 'react-router';
import { projects, artifacts } from './data';
import { FileText, GanttChart, CircleDot, Palette, Monitor, Plus, ChevronRight, FolderOpen, BarChart3 } from 'lucide-react';

interface SidebarDrawerProps {
  type: 'projects' | 'artifacts';
  onClose: () => void;
}

const artifactIcons: Record<string, React.ElementType> = {
  'file-text': FileText,
  'gantt-chart': GanttChart,
  'circle-dot': CircleDot,
  'palette': Palette,
  'monitor': Monitor,
};

export function SidebarDrawer({ type, onClose }: SidebarDrawerProps) {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const currentProjectId = projectId || 'plus-minus-clinic';

  return (
    <div className="w-[220px] bg-white border-r border-[#e7e7e7] h-full flex flex-col shadow-[4px_0_16px_rgba(0,0,0,0.08)]">
      {type === 'projects' ? (
        <ProjectsDrawerContent
          currentProjectId={currentProjectId}
          onSelectProject={(id) => { navigate(`/project/${id}`); onClose(); }}
          onDashboard={() => { navigate('/'); onClose(); }}
        />
      ) : (
        <ArtifactsDrawerContent
          currentProjectId={currentProjectId}
          onSelectArtifact={(artifactId) => { navigate(`/project/${currentProjectId}/${artifactId}`); onClose(); }}
        />
      )}
    </div>
  );
}

function ProjectsDrawerContent({
  currentProjectId,
  onSelectProject,
  onDashboard,
}: {
  currentProjectId: string;
  onSelectProject: (id: string) => void;
  onDashboard: () => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e7e7e7]">
        <span className="text-[14px] text-[#111827]" style={{ fontWeight: 600 }}>Projects</span>
        <button className="flex items-center gap-1 text-[12px] text-[#d20f1f] border border-[#d20f1f] rounded px-2 py-1 hover:bg-[#d20f1f]/5 transition-colors">
          <Plus className="w-3 h-3" />
          New
        </button>
      </div>
      <div className="flex flex-col py-2 flex-1 overflow-y-auto">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className={`flex items-center gap-2 px-4 py-2 text-[14px] text-left transition-colors ${
              currentProjectId === project.id
                ? 'text-[#d20f1f] bg-[#fff5f5]'
                : 'text-[#374151] hover:bg-gray-50'
            }`}
          >
            <FolderOpen className="w-4 h-4 shrink-0" />
            <span className="truncate">{project.name}</span>
          </button>
        ))}
      </div>
      {/* Pinned at bottom */}
      <div className="border-t border-[#e7e7e7] shrink-0">
        <button
          onClick={onDashboard}
          className="flex items-center justify-between w-full px-4 py-3 text-[14px] text-[#374151] hover:bg-gray-50 transition-colors"
        >
          <span>Project Dashboard</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </>
  );
}

function ArtifactsDrawerContent({
  currentProjectId,
  onSelectArtifact,
}: {
  currentProjectId: string;
  onSelectArtifact: (id: string) => void;
}) {
  const specs = artifacts.filter((a) => a.category === 'specifications');
  const pm = artifacts.filter((a) => a.category === 'project-management');
  const previews = artifacts.filter((a) => a.category === 'previews');

  const renderSection = (title: string, items: typeof artifacts) => (
    <div className="mb-4">
      <div className="px-4 py-2 text-[11px] text-[#6b7280] tracking-wider uppercase" style={{ fontWeight: 600 }}>
        {title}
      </div>
      {items.map((item) => {
        const Icon = artifactIcons[item.icon] || FileText;
        return (
          <button
            key={item.id}
            onClick={() => onSelectArtifact(item.id)}
            className="flex items-center gap-2 px-4 py-2 text-[14px] text-[#374151] hover:bg-gray-50 transition-colors w-full text-left"
          >
            {item.id === 'roadmap' ? (
              <BarChart3 className="w-4 h-4 shrink-0 text-[#d20f1f]" />
            ) : (
              <Icon className="w-4 h-4 shrink-0" />
            )}
            <span className={`truncate ${item.id === 'roadmap' ? 'text-[#d20f1f]' : ''}`}>
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <div className="px-4 py-3 border-b border-[#e7e7e7]">
        <span className="text-[14px] text-[#111827]" style={{ fontWeight: 600 }}>Artifacts</span>
        <p className="text-[12px] text-[#6b7280] mt-0.5">AI-generated outputs</p>
      </div>
      <div className="py-2 overflow-y-auto flex-1">
        {renderSection('Specifications', specs)}
        {renderSection('Project Management', pm)}
        {renderSection('Previews', previews)}
      </div>
    </>
  );
}