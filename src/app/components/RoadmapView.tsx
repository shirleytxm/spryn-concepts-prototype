import { useState, useRef, useMemo } from 'react';
import { milestones, type Milestone } from './data';
import { MilestoneModal } from './MilestoneModal';
import { UIDesignModal } from './UIDesignModal';
import { Plus, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RoadmapViewProps {
  projectId: string;
}

export function RoadmapView({ projectId }: RoadmapViewProps) {
  const [zoomLevel, setZoomLevel] = useState<'D' | 'W' | 'M'>('W');
  const [expandedMilestones, setExpandedMilestones] = useState<Set<string>>(new Set(['m2']));
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [uiPreview, setUiPreview] = useState<{ designs: { name: string; image: string }[]; index: number } | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const toggleMilestone = (id: string) => {
    setExpandedMilestones((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Generate timeline dates
  const timelineDates = useMemo(() => {
    const dates: { label: string; isMonth: boolean; date: Date }[] = [];
    const start = new Date(2026, 1, 23); // Feb 23
    const colWidth = zoomLevel === 'D' ? 50 : zoomLevel === 'W' ? 60 : 100;
    const count = zoomLevel === 'D' ? 30 : zoomLevel === 'W' ? 20 : 8;

    for (let i = 0; i < count; i++) {
      const d = new Date(start);
      if (zoomLevel === 'D') {
        d.setDate(d.getDate() + i);
        const dayLabel = `${d.getDate()} ${d.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}`;
        dates.push({
          label: dayLabel,
          isMonth: d.getDate() === 1,
          date: d,
        });
      } else if (zoomLevel === 'W') {
        d.setDate(d.getDate() + i * 7);
        const dayLabel = `${d.getDate()} ${d.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}`;
        dates.push({
          label: dayLabel,
          isMonth: d.getDate() <= 7,
          date: d,
        });
      } else {
        d.setMonth(d.getMonth() + i);
        dates.push({
          label: d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
          isMonth: true,
          date: d,
        });
      }
    }
    return { dates, colWidth };
  }, [zoomLevel]);

  // Group dates by month for header
  const monthGroups = useMemo(() => {
    const groups: { month: string; count: number }[] = [];
    timelineDates.dates.forEach((d) => {
      const monthLabel = d.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (groups.length === 0 || groups[groups.length - 1].month !== monthLabel) {
        groups.push({ month: monthLabel, count: 1 });
      } else {
        groups[groups.length - 1].count++;
      }
    });
    return groups;
  }, [timelineDates]);

  // Today marker position
  const today = new Date(2026, 1, 26); // Feb 26, 2026
  const startDate = new Date(2026, 1, 23);
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const todayPosition = zoomLevel === 'D'
    ? daysDiff * timelineDates.colWidth
    : zoomLevel === 'W'
      ? (daysDiff / 7) * timelineDates.colWidth
      : (daysDiff / 30) * timelineDates.colWidth;

  const totalTimelineWidth = timelineDates.dates.length * timelineDates.colWidth;

  return (
    <div className="flex h-full">
      {/* Left panel - Milestones list */}
      <div className="w-[280px] min-w-[280px] border-r border-[#e7e7e7] flex flex-col">
        {/* Zoom controls */}
        <div className="px-4 py-3 border-b border-[#e7e7e7] flex items-center gap-2">
          <span className="text-[12px] text-[#6b7280]">Zoom:</span>
          <div className="flex border border-[#e7e7e7] rounded overflow-hidden">
            {(['D', 'W', 'M'] as const).map((z) => (
              <button
                key={z}
                onClick={() => setZoomLevel(z)}
                className={`px-2 py-0.5 text-[12px] transition-colors ${
                  zoomLevel === z ? 'bg-[#374151] text-white' : 'bg-white text-[#374151] hover:bg-gray-50'
                }`}
              >
                {z}
              </button>
            ))}
          </div>
        </div>

        {/* Column headers */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#e7e7e7] bg-gray-50">
          <span className="text-[11px] text-[#6b7280] uppercase tracking-wider" style={{ fontWeight: 600 }}>Milestones</span>
          <span className="text-[11px] text-[#6b7280] uppercase tracking-wider" style={{ fontWeight: 600 }}>Progress</span>
        </div>

        {/* Milestone list */}
        <div className="flex-1 overflow-y-auto">
          {milestones.map((milestone) => {
            const isExpanded = expandedMilestones.has(milestone.id);
            return (
              <div key={milestone.id}>
                <button
                  onClick={() => toggleMilestone(milestone.id)}
                  className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-[#f0f0f0]"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-[#6b7280] shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#6b7280] shrink-0" />
                    )}
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        milestone.status === 'completed'
                          ? 'bg-[#22c55e]'
                          : milestone.status === 'in-progress'
                            ? 'bg-[#F59E0B]'
                            : 'bg-[#d1d5db]'
                      }`}
                    />
                    <span className="text-[13px] text-[#111827] truncate" style={{ fontWeight: 500 }}>
                      {milestone.name}
                    </span>
                  </div>
                  <span
                    className={`text-[13px] shrink-0 ml-2 ${
                      milestone.progress === 100
                        ? 'text-[#22c55e]'
                        : milestone.progress > 0
                          ? 'text-[#ffb625]'
                          : 'text-[#9ca3af]'
                    }`}
                    style={{ fontWeight: 500 }}
                  >
                    {milestone.progress}%
                  </span>
                </button>

                {/* Expanded deliverables */}
                {isExpanded && milestone.deliverables.length > 0 && (
                  <div className="border-b border-[#f0f0f0]">
                    {milestone.deliverables.map((del) => (
                      <div
                        key={del.id}
                        className="flex items-center gap-2 pl-10 pr-4 py-2 text-[12px] text-[#374151] hover:bg-gray-50 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#9ca3af] shrink-0" />
                        <span className="truncate">{del.name}</span>
                      </div>
                    ))}
                    {/* Screen designs carousel */}
                    {milestone.screenDesigns && milestone.screenDesigns.length > 0 && (
                      <div className="flex items-center justify-between pl-[40px] pr-[16px] py-[12px]">
                        {/* Images row - flex-1 per image to fill equal width */}
                        <div className="flex flex-1 gap-[4px] h-[52px] overflow-hidden min-w-0">
                          {milestone.screenDesigns.slice(0, 3).map((design, i) => (
                            <button
                              key={i}
                              className="flex-1 relative overflow-hidden rounded-[2px] cursor-pointer hover:opacity-90 transition-opacity min-w-0"
                              onClick={() =>
                                setUiPreview({
                                  designs: milestone.screenDesigns!,
                                  index: i,
                                })
                              }
                            >
                              <img
                                src={design.image}
                                alt={design.name}
                                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                              />
                            </button>
                          ))}
                        </div>
                        {/* Chevron right */}
                        <button
                          className="shrink-0 ml-2 size-[24px] flex items-center justify-center text-[#737373] hover:text-[#374151] transition-colors"
                          onClick={() =>
                            milestone.screenDesigns &&
                            setUiPreview({ designs: milestone.screenDesigns, index: 0 })
                          }
                        >
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M1 1L7 7L1 13" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right panel - Timeline */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* New Milestone button */}
        <div className="flex justify-end px-4 py-2 border-b border-[#e7e7e7]">
          <button className="flex items-center gap-1.5 bg-[#d20f1f] text-white px-3 py-1.5 rounded text-[13px] hover:bg-[#b00d1a] transition-colors" style={{ fontWeight: 500 }}>
            <Plus className="w-3.5 h-3.5" />
            New Milestone
          </button>
        </div>

        {/* Timeline scroll area */}
        <div className="flex-1 overflow-auto" ref={timelineRef}>
          <div style={{ width: totalTimelineWidth, minHeight: '100%' }} className="relative">
            {/* Month headers */}
            <div className="sticky top-0 z-10 flex bg-white border-b border-[#e7e7e7]">
              {monthGroups.map((group, i) => (
                <div
                  key={i}
                  className="text-[13px] text-[#374151] px-2 py-1 border-r border-[#e7e7e7]"
                  style={{ width: group.count * timelineDates.colWidth, fontWeight: 500 }}
                >
                  {group.month}
                </div>
              ))}
            </div>

            {/* Date headers */}
            <div className="sticky top-[30px] z-10 flex bg-white border-b border-[#e7e7e7]">
              {timelineDates.dates.map((d, i) => (
                <div
                  key={i}
                  className="text-[11px] text-[#9ca3af] text-center py-1 border-r border-[#f0f0f0]"
                  style={{ width: timelineDates.colWidth }}
                >
                  {d.label}
                </div>
              ))}
            </div>

            {/* Grid lines */}
            <div className="absolute top-[60px] left-0 right-0 bottom-0">
              {timelineDates.dates.map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 border-r border-[#f5f5f5]"
                  style={{ left: (i + 1) * timelineDates.colWidth }}
                />
              ))}
            </div>

            {/* Today marker */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#d20f1f]/70 z-20"
              style={{ left: todayPosition }}
            >
              <div className="absolute top-0 -translate-x-1/2 bg-[#d20f1f] text-white text-[10px] px-2 py-0.5 rounded-b" style={{ fontWeight: 600 }}>
                Today
              </div>
            </div>

            {/* Milestone bars */}
            <div className="relative pt-[60px]">
              {milestones.map((milestone, idx) => {
                const barTop = idx * 80 + 10;
                // Calculate approximate positions based on dates
                const barLeft = Math.max(0, idx * timelineDates.colWidth * 1.5);
                const barWidth = Math.max(timelineDates.colWidth * 3, 200);

                return (
                  <div
                    key={milestone.id}
                    className="absolute cursor-pointer group"
                    style={{
                      top: barTop,
                      left: barLeft,
                      width: barWidth,
                      height: 36,
                    }}
                    onClick={() => setSelectedMilestone(milestone)}
                  >
                    <div
                      className={`h-full rounded-md flex items-center justify-between px-3 text-[12px] transition-shadow group-hover:shadow-md ${
                        milestone.status === 'completed'
                          ? 'bg-[#22c55e]/15 border border-[#22c55e]/30'
                          : milestone.status === 'in-progress'
                            ? 'bg-[#ffb625]/15 border border-[#ffb625]/30'
                            : 'bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <span className="text-[#374151] truncate" style={{ fontWeight: 500 }}>{milestone.name}</span>
                      <span className="text-[#6b7280] ml-2 shrink-0">{milestone.progress}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Give the timeline enough height */}
            <div style={{ height: milestones.length * 80 + 100 }} />
          </div>
        </div>
      </div>

      {/* Milestone Detail Modal */}
      {selectedMilestone && (
        <MilestoneModal
          milestone={selectedMilestone}
          onClose={() => setSelectedMilestone(null)}
        />
      )}

      {/* UI Design Detail Modal */}
      {uiPreview && (
        <UIDesignModal
          designs={uiPreview.designs}
          initialIndex={uiPreview.index}
          onClose={() => setUiPreview(null)}
        />
      )}
    </div>
  );
}