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
        className="relative w-full h-full aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* "Before" image (background - covers the entire container) */}
        <div className="absolute inset-0">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* "After" image (foreground - reveals through clip-path) */}
        <div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 0 0 ${position}%)`
          }}
        >
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Divider line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-col-resize flex items-center justify-center"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8M8 17h8M4 12h4M16 12h4" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Before-After labels */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 text-sm rounded-full font-medium">
          Before
        </div>
        <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 text-sm rounded-full font-medium">
          After
        </div>
        
        {/* Drag instruction overlay that appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/70 px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8M8 17h8" />
            </svg>
            <span>Drag to compare</span>
          </div>
        </div>
      </div>
      
      {description && <p className="text-gray-600 mt-3 text-center">{description}</p>}
    </div>
  );
}