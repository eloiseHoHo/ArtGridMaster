import { useState, useRef, useEffect, useCallback } from "react";

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  description?: string;
}

export default function BeforeAfterComparison({ beforeImage, afterImage, title, description }: BeforeAfterComparisonProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current || !e.touches[0]) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(percentage);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="flex flex-col">
      {title && <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>}
      
      <div 
        ref={containerRef} 
        className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Before image (left side) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* After image (right side) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img 
            src={afterImage} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 / (position/100)}%` }}
          />
        </div>
        
        {/* Slider handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-col-resize flex items-center justify-center"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Before-After labels */}
        <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
          Before
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
          After
        </div>
      </div>
      
      {description && <p className="text-gray-600 mt-2 text-center">{description}</p>}
    </div>
  );
}