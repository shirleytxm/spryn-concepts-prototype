import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Plus, MoreHorizontal } from 'lucide-react';
import { projects } from './data';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgLogo from "figma:asset/670fdcff9c2e8443c0687e5eb82367463f603e9d.png";
import svgFilter from '../../imports/svg-3cd03qb9sk';
import svgGrid from '../../imports/svg-zm51lx71ja';
import svgList from '../../imports/svg-o3fkz8osyj';
import svgMore from '../../imports/svg-vz8um7sdfl';
import svgEllipse from '../../imports/svg-hzyrardpk5';

export function ProjectsDashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen font-['Inter',sans-serif]">
      {/* Top Header */}
      <div className="h-[56px] min-h-[56px] bg-[#541b1f] flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          {/* Logo — mirrors Figma SprynLogo1: overflow-clip container + inset padding */}
          <div className="relative overflow-clip size-[32px] shrink-0">
            <div className="absolute inset-[6.32%]">
              <img
                alt="Spryn Logo"
                src={imgLogo}
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              />
            </div>
          </div>
          <span className="text-white text-[16px]" style={{ fontWeight: 600 }}>My Projects</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#6b3a3e] flex items-center justify-center">
          <span className="text-white text-[12px]" style={{ fontWeight: 500 }}>ST</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-[#f5f5f5] relative">
        {/* Gradient background - scaled to screen */}
        <div className="fixed inset-0 top-[56px] pointer-events-none z-0">
          <div className="w-full h-full -scale-y-100 bg-gradient-to-t from-[rgba(209,93,15,0)] to-[#a92f27] via-[74.519%] via-[rgba(189,70,27,0.3)]" />
        </div>

        {/* Ellipse shape - fixed, centered, cropped from centre */}
        <div className="fixed inset-0 top-[56px] pointer-events-none z-[1] flex items-center justify-center overflow-hidden">
          <svg
            className="w-[100vw] h-[100vh] flex-none"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 1446.12 1286.44"
          >
            <path
              d={svgEllipse.pd7bb440}
              fill="#FFD1D1"
              fillOpacity="0.39"
              style={{ mixBlendMode: 'color-burn' }}
            />
          </svg>
        </div>

        <div className="px-10 py-8 max-w-[1200px] mx-auto relative z-[2]">
          {/* Actions row */}
          <div className="flex items-center justify-between mb-8">
            <button
              className="flex items-center gap-2 bg-[#d20f1f] text-white px-4 py-2 rounded-md hover:bg-[#b00d1a] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-[14px]" style={{ fontWeight: 500 }}>New Project</span>
            </button>

            <div className="flex items-center gap-2">
              {/* Filter */}
              <button className="p-1.5 hover:bg-black/5 rounded transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d={svgFilter.p24c4f440} stroke="#737373" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
              {/* Grid */}
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-[#d20f1f]' : 'hover:bg-black/5'
                }`}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d={svgGrid.pca59800} stroke={viewMode === 'grid' ? 'white' : '#737373'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {/* List */}
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-[#d20f1f]' : 'hover:bg-black/5'
                }`}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d={svgList.p318e5b80} stroke={viewMode === 'list' ? 'white' : '#737373'} strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Projects */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCardGrid
                  key={project.id}
                  project={project}
                  onClick={() => navigate(`/project/${project.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <ProjectCardList
                  key={project.id}
                  project={project}
                  onClick={() => navigate(`/project/${project.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCardGrid({
  project,
  onClick,
}: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-[#e7e7e7] cursor-pointer hover:shadow-[0px_4px_17px_1px_rgba(255,88,88,0.25)] transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="aspect-[405/204] overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <p className="text-[20px] text-black tracking-[-0.5px]" style={{ fontWeight: 600 }}>{project.name}</p>

        {/* Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Progress</span>
            <span className="text-[14px] text-black tracking-[-0.5px]">{project.progress}%</span>
          </div>
          <div className="h-2 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${project.progress}%`,
                backgroundColor: project.color,
              }}
            />
          </div>
        </div>

        {/* Dates */}
        <div className="flex flex-col gap-1">
          <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Updated: {project.updatedAt}</span>
          <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Created: {project.createdAt}</span>
        </div>

        {/* Members & More */}
        <div className="flex items-center justify-between pt-1">
          <AvatarStack members={project.members} extra={project.extraMembers} />
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" onClick={(e) => e.stopPropagation()}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d={svgMore.p7a1ad80} fill="#9ca3af" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCardList({
  project,
  onClick,
}: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-[#e7e7e7] cursor-pointer hover:shadow-[0px_4px_17px_1px_rgba(255,88,88,0.25)] transition-shadow overflow-hidden flex max-h-[196px]"
    >
      {/* Image - maintaining Figma ratio 373:196, filling card height, cropping from center */}
      <div className="w-[300px] min-w-[300px] overflow-hidden self-stretch">
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col gap-3">
        <p className="text-[20px] text-black tracking-[-0.5px]" style={{ fontWeight: 600 }}>{project.name}</p>

        {/* Progress */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Progress</span>
            <span className="text-[14px] text-black tracking-[-0.5px]">{project.progress}%</span>
          </div>
          <div className="h-2 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${project.progress}%`,
                backgroundColor: project.color,
              }}
            />
          </div>
        </div>

        {/* Dates & Members */}
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col gap-1">
            <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Updated: {project.updatedAt}</span>
            <span className="text-[14px] text-[#737373] tracking-[-0.5px]">Created: {project.createdAt}</span>
          </div>
          <div className="flex items-center gap-4">
            <AvatarStack members={project.members} extra={project.extraMembers} />
            <button className="p-1 hover:bg-gray-100 rounded transition-colors" onClick={(e) => e.stopPropagation()}>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d={svgMore.p7a1ad80} fill="#9ca3af" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarStack({
  members,
  extra,
}: {
  members: { avatar: string; name: string }[];
  extra: number;
}) {
  return (
    <div className="flex items-center">
      {members.map((m, i) => (
        <div
          key={m.name}
          className="w-6 h-6 rounded-full border-2 border-[#2a2a2a] overflow-hidden"
          style={{ marginLeft: i > 0 ? -8 : 0, zIndex: members.length - i }}
        >
          <ImageWithFallback
            src={m.avatar}
            alt={m.name}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {extra > 0 && (
        <div
          className="w-6 h-6 rounded-full border-2 border-[#2a2a2a] bg-[#4b5563] flex items-center justify-center"
          style={{ marginLeft: -8 }}
        >
          <span className="text-[12px] text-white tracking-[-0.5px]">+{extra}</span>
        </div>
      )}
    </div>
  );
}