import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterComparison({ beforeImage, afterImage }: BeforeAfterComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleTouchStart = () => {
    setIsDragging(true);
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  const updateSliderPosition = useCallback((clientX: number) => {
    if (containerRef.current && isDragging) {
      const containerRect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
      
      // Constrain position within slider bounds
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    }
  }, [containerRef, isDragging]);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);
  
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
      e.preventDefault();
    }
  }, [updateSliderPosition]);
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Before & After Comparison</h3>
      <div 
        className="comparison-slider rounded-xl overflow-hidden h-96 shadow-md"
        ref={containerRef}
      >
        <div 
          className="before-image"
          style={{ backgroundImage: `url(${beforeImage})` }}
        ></div>
        <div 
          className="after-image"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            width: `${sliderPosition}%`
          }}
        ></div>
        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <ArrowLeftRight className="text-primary z-10" />
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center mt-3">Drag the slider to compare original and transformed images</p>
    </div>
  );
}
