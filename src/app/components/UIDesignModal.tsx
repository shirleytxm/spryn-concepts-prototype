import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UIDesign {
  name: string;
  image: string;
}

interface UIDesignModalProps {
  designs: UIDesign[];
  initialIndex: number;
  onClose: () => void;
}

export function UIDesignModal({ designs, initialIndex, onClose }: UIDesignModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const current = designs[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % designs.length);
  }, [designs.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + designs.length) % designs.length);
  }, [designs.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex flex-col"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Main content area */}
      <div
        className="flex-1 flex items-center justify-center px-16 pt-6 pb-2 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev button */}
        {designs.length > 1 && (
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
        )}

        {/* Image container */}
        <div className="flex flex-col items-center max-h-full max-w-full min-h-0">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-h-[calc(100vh-180px)] flex items-center justify-center">
            <ImageWithFallback
              src={current.image}
              alt={current.name}
              className="max-h-[calc(100vh-180px)] max-w-[calc(100vw-160px)] object-contain"
            />
          </div>

          {/* Title & counter */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-white text-[15px]" style={{ fontWeight: 500 }}>
              {current.name}
            </span>
            <span className="text-white/50 text-[13px]">
              {currentIndex + 1} / {designs.length}
            </span>
          </div>
        </div>

        {/* Next button */}
        {designs.length > 1 && (
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {designs.length > 1 && (
        <div
          className="flex items-center justify-center gap-2 px-8 py-3 overflow-x-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {designs.map((design, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-[80px] h-[52px] rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                i === currentIndex
                  ? 'border-white shadow-lg scale-105'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <ImageWithFallback
                src={design.image}
                alt={design.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
