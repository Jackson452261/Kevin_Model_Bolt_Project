import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CarouselProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Carousel({ images, initialIndex, onClose }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    // Store original overflow values
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Force restore scrolling
      document.body.style.overflow = originalBodyOverflow || 'unset';
      document.documentElement.style.overflow = originalHtmlOverflow || 'unset';
      
      // Double-check with a timeout
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.documentElement.style.overflow = 'unset';
      }, 100);
    };
  }, [onClose]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" style={{ zIndex: 9999 }}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
        aria-label="Close carousel"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center px-16 py-8">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-light">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
