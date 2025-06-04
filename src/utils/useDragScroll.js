import { useRef, useEffect } from 'react';

/**
 * Custom hook for implementing drag-to-scroll functionality
 * @param {React.RefObject} elementRef - Ref to the scrollable element
 * @param {boolean} enabled - Whether drag scrolling is enabled
 * @returns {Object} - Drag state and utility functions
 */
export const useDragScroll = (elementRef, enabled = true) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const element = elementRef?.current;
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
      if (!isDragging.current) return;
      isDragging.current = false;
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      }
    };

    const handleMouseLeave = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      }
    };

    // Set initial cursor
    element.style.cursor = 'grab';

    // Add event listeners
    element.addEventListener('mousedown', handleMouseDown, { passive: false });
    document.addEventListener('mousemove', handleMouseMove, { passive: false });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Cleanup
    return () => {
      if (element) {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [elementRef, enabled]);

  return {
    isDragging: isDragging.current
  };
};
