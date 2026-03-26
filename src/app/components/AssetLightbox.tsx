import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useUploadedFiles } from './UploadContext';
import svgPaths from '../../imports/svg-a5s52xxhte';
import imgPreview from 'figma:asset/c8a7f6c2b20128533909f7856cb68046c9ef6047.png';

// Paperclip SVG path from Figma
function PaperclipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d={svgPaths.p3a89f880}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

// Download icon from Figma paths
function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={svgPaths.p3fc2fbc0} />
      <path d="M8 12l4 4 4-4" />
    </svg>
  );
}

export function AssetLightbox() {
  const { lightboxFile, closeLightbox } = useUploadedFiles();

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeLightbox]);

  const isImage = !lightboxFile?.type || lightboxFile.type === 'image' || lightboxFile.type.startsWith('image/');

  return createPortal(
    <AnimatePresence>
      {lightboxFile && (
        <motion.div
          key="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col"
          style={{ background: 'rgba(0,0,0,0.82)' }}
          onClick={closeLightbox}
        >
          {/* Top bar — asset name left, actions right */}
          <div
            className="flex items-center justify-between px-6 py-4 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Asset name */}
            <div className="flex items-center gap-3 min-w-0">
              <PaperclipIcon />
              <span
                className="text-white text-[18px] truncate max-w-[480px]"
                style={{ fontWeight: 700, fontFamily: "'Inter', sans-serif" }}
                title={lightboxFile.name}
              >
                {lightboxFile.name}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0 ml-6">
              <button
                onClick={(e) => { e.stopPropagation(); }}
                className="w-9 h-9 rounded-[6px] flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                title="Download"
              >
                <DownloadIcon />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="w-9 h-9 rounded-[6px] flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image / preview area */}
          <div
            className="flex-1 flex items-center justify-center min-h-0 px-8 pb-8"
            onClick={closeLightbox}
          >
            <motion.div
              key="lightbox-content"
              initial={{ scale: 0.93, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-full"
            >
              {isImage ? (
                <img
                  src={imgPreview}
                  alt={lightboxFile.name}
                  className="block max-w-full object-contain rounded-[8px]"
                  style={{ maxHeight: 'calc(100vh - 120px)', maxWidth: '520px' }}
                />
              ) : (
                <div
                  className="flex flex-col items-center justify-center gap-4 py-20 px-16 text-center bg-[#1a1a1a] rounded-[12px] border border-white/10"
                >
                  <div className="w-16 h-16 rounded-[12px] bg-white/5 border border-white/10 flex items-center justify-center">
                    <PaperclipIcon />
                  </div>
                  <div>
                    <p className="text-[16px] text-white" style={{ fontWeight: 600 }}>{lightboxFile.name}</p>
                    {lightboxFile.size && (
                      <p className="text-[13px] text-white/40 mt-1">{lightboxFile.size}</p>
                    )}
                  </div>
                  <p className="text-[13px] text-white/30">Preview not available for this file type.</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
