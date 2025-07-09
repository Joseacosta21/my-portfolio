import { useRef, useEffect } from 'react';

/**
 * Custom hook for implementing drag-to-scroll functionality with mobile optimization
 * @param {React.RefObject} elementRef - Ref to the scrollable element
 * @param {boolean} enabled - Whether drag scrolling is enabled
 * @returns {Object} - Drag state and utility functions
 */
export const useDragScroll = (elementRef, enabled = true) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const startY = useRef(0);
  const isVerticalScroll = useRef(false);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element || !enabled) return;

    // Touch event handlers for mobile
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      isDragging.current = true;
      startX.current = touch.pageX - element.offsetLeft;
      startY.current = touch.pageY;
      scrollLeft.current = element.scrollLeft;
      isVerticalScroll.current = false;
      
      // Prevent momentum scrolling during touch
      element.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      
      const touch = e.touches[0];
      const x = touch.pageX - element.offsetLeft;
      const y = touch.pageY;
      
      const deltaX = Math.abs(x - startX.current);
      const deltaY = Math.abs(y - startY.current);
      
      // Determine scroll direction on first significant movement
      if (deltaX > 10 || deltaY > 10) {
        if (deltaY > deltaX && !isVerticalScroll.current) {
          // User is trying to scroll vertically, allow default behavior
          isDragging.current = false;
          return;
        } else if (deltaX > deltaY) {
          // User is scrolling horizontally, prevent vertical scroll
          isVerticalScroll.current = false;
          e.preventDefault();
        }
      }
      
      if (deltaX > 5) { // Only prevent if horizontal movement is significant
        e.preventDefault();
        const walk = (x - startX.current) * 1.5; // Slightly faster scrolling for touch
        element.scrollLeft = scrollLeft.current - walk;
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      isVerticalScroll.current = false;
      element.style.scrollBehavior = 'smooth';
    };

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

    // Set initial cursor and optimize for mobile
    element.style.cursor = 'grab';
    element.style.overflowX = 'auto';
    element.style.overflowY = 'hidden';
    element.style.webkitOverflowScrolling = 'touch'; // iOS momentum scrolling
    
    // Enable smooth scrolling behavior
    element.style.scrollBehavior = 'smooth';

    // Add event listeners for both mouse and touch
    element.addEventListener('mousedown', handleMouseDown, { passive: false });
    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    document.addEventListener('mousemove', handleMouseMove, { passive: false });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Cleanup
    return () => {
      if (element) {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
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
