import { useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Sidebar } from './Sidebar';
import { SidebarDrawer } from './SidebarDrawer';
import { UploadDrawer } from './UploadDrawer';
import { ChatPanel } from './ChatPanel';
import { ProjectHeader } from './ProjectHeader';
import { UploadProvider } from './UploadContext';
import { AssetLightbox } from './AssetLightbox';

type DrawerType = 'projects' | 'artifacts' | 'agents' | 'upload' | null;

export function Layout() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [chatWidth, setChatWidth] = useState(340);
  const [chatCollapsed, setChatCollapsed] = useState(false);
  const location = useLocation();

  const isProjectView = location.pathname.startsWith('/project/');

  const handleIconClick = useCallback((icon: 'projects' | 'artifacts' | 'agents' | 'upload') => {
    if (icon === 'agents') return;
    setActiveDrawer(prev => prev === icon ? null : icon);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setActiveDrawer(null);
  }, []);

  const showDrawer = activeDrawer && activeDrawer !== 'agents';

  return (
    <div className="flex h-screen w-screen overflow-hidden font-['Inter',sans-serif]">
      {/* Icon Sidebar */}
      <Sidebar activeIcon={activeDrawer} onIconClick={handleIconClick} />

      {/* Main Content + Chat — always takes full remaining width */}
      <UploadProvider>
        <div className="flex flex-1 min-w-0 relative flex-col">
          {/* Drawer - overlaid on top of content */}
          {showDrawer && (
            <>
              <div
                className="absolute inset-0 z-30"
                onClick={handleDrawerClose}
              />
              <div className="absolute left-0 top-0 bottom-0 z-40">
                {activeDrawer === 'upload' ? (
                  <UploadDrawer onClose={handleDrawerClose} />
                ) : (
                  <SidebarDrawer
                    type={activeDrawer as 'projects' | 'artifacts'}
                    onClose={handleDrawerClose}
                  />
                )}
              </div>
            </>
          )}

          {/* Project header - spans full width across content + chat */}
          {isProjectView && <ProjectHeader />}

          {/* Content row */}
          <div className="flex flex-1 min-h-0">
            {/* Main content area */}
            <div className="flex-1 min-w-0 flex flex-col">
              <Outlet />
            </div>

            {/* Chat Panel - only on project view */}
            {isProjectView && (
              <ChatPanel
                width={chatWidth}
                collapsed={chatCollapsed}
                onWidthChange={setChatWidth}
                onCollapsedChange={setChatCollapsed}
              />
            )}
          </div>
        </div>
        <AssetLightbox />
      </UploadProvider>
    </div>
  );
}