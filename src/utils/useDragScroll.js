import { useRef, useEffect } from 'react';

/**
 * Custom hook for implementing drag-to-scroll functionality
 * @param {boolean} enabled - Whether drag scrolling is enabled
 * @returns {Object} - Ref to attach to scrollable element and drag state
 */
export const useDragScroll = (enabled = true) => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element || !enabled) return;

    const handleMouseDown = (e) => {
      // Only handle left mouse button
      if (e.button !== 0) return;
      
      isDragging.current = true;
      startX.current = e.pageX - element.offsetLeft;
      scrollLeft.current = element.scrollLeft;
      
      // Add grabbing cursor
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';
      
      // Prevent text selection during drag
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX.current) * 2; // Multiply by 2 for faster scrolling
      element.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      element.style.cursor = 'grab';
      element.style.userSelect = '';
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      element.style.cursor = 'grab';
      element.style.userSelect = '';
    };

    // Set initial cursor
    element.style.cursor = 'grab';

    // Add event listeners
    element.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  return {
    dragScrollRef: scrollRef,
    isDragging: isDragging.current
  };
};
