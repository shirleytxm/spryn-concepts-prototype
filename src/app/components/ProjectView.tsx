import { useParams } from 'react-router';
import { projects } from './data';
import { RoadmapView } from './RoadmapView';
import { SpecEditorView } from './SpecEditorView';

export function ProjectView() {
  const { projectId, artifactId } = useParams();
  const project = projects.find((p) => p.id === projectId) || projects[0];

  const currentArtifact = artifactId || 'roadmap';
  const isSpec = ['product-brief', 'prd', 'architecture', 'ux-spec', 'epics', 'proposal'].includes(currentArtifact);

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Content */}
      <div className="flex-1 min-h-0 overflow-auto">
        {isSpec ? (
          <SpecEditorView />
        ) : (
          <RoadmapView projectId={project.id} />
        )}
      </div>
    </div>
  );
}
