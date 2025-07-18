import { useRef, useEffect } from 'react';

/**
 * Custom hook for implementing drag-to-scroll functionality with mobile optimization and momentum
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
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const momentumAnimationFrame = useRef(null);

  useEffect(() => {
    const element = elementRef?.current;
    if (!element || !enabled) return;

    // Momentum scrolling function
    const applyMomentum = () => {
      if (Math.abs(velocity.current) < 0.3) {
        velocity.current = 0;
        element.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
        console.log('Momentum ended');
        return;
      }

      element.scrollLeft += velocity.current;
      velocity.current *= 0.92; // More aggressive friction for natural feel
      
      momentumAnimationFrame.current = requestAnimationFrame(applyMomentum);
    };

    // Touch event handlers for mobile
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      isDragging.current = true;
      startX.current = touch.pageX - element.offsetLeft;
      startY.current = touch.pageY;
      scrollLeft.current = element.scrollLeft;
      isVerticalScroll.current = false;
      lastX.current = touch.pageX;
      lastTime.current = Date.now();
      velocity.current = 0;
      
      // Cancel any existing momentum
      if (momentumAnimationFrame.current) {
        cancelAnimationFrame(momentumAnimationFrame.current);
        momentumAnimationFrame.current = null;
      }
      
      // Prevent momentum scrolling during touch
      element.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      
      const touch = e.touches[0];
      const x = touch.pageX - element.offsetLeft;
      const y = touch.pageY;
      const currentTime = Date.now();
      
      const deltaX = Math.abs(x - startX.current);
      const deltaY = Math.abs(y - startY.current);
      
      // Determine scroll direction on first significant movement
      if (deltaX > 5 || deltaY > 5) {
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
      
      // Calculate velocity for momentum (only when horizontal scrolling is confirmed)
      if (deltaX > deltaY) {
        const timeDelta = currentTime - lastTime.current;
        if (timeDelta > 0) {
          const currentVelocity = (touch.pageX - lastX.current) / timeDelta * -20; // Increased scale
          velocity.current = currentVelocity;
        }
        lastX.current = touch.pageX;
        lastTime.current = currentTime;
      }
      
      if (deltaX > 2) { // Very responsive threshold
        e.preventDefault();
        const walk = (x - startX.current) * 1.0; // Direct 1:1 ratio for responsive feel
        element.scrollLeft = scrollLeft.current - walk;
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      isVerticalScroll.current = false;
      element.style.scrollBehavior = 'smooth';
      
      // Debug log to verify momentum is triggered
      console.log('Touch end - velocity:', velocity.current);
      
      // Apply momentum if there's significant velocity
      if (Math.abs(velocity.current) > 0.5) {
        console.log('Applying momentum with velocity:', velocity.current);
        element.style.scrollBehavior = 'auto'; // Disable smooth during momentum
        applyMomentum();
      }
    };

    const handleMouseDown = (e) => {
      // Only handle left mouse button
      if (e.button !== 0) return;
      
      isDragging.current = true;
      startX.current = e.pageX - element.offsetLeft;
      scrollLeft.current = element.scrollLeft;
      lastX.current = e.pageX;
      lastTime.current = Date.now();
      velocity.current = 0;
      
      // Cancel any existing momentum
      if (momentumAnimationFrame.current) {
        cancelAnimationFrame(momentumAnimationFrame.current);
        momentumAnimationFrame.current = null;
      }
      
      // Add grabbing cursor
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';
      
      // Prevent text selection during drag
      e.preventDefault();
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      
      e.preventDefault();
      const currentTime = Date.now();
      const x = e.pageX - element.offsetLeft;
      
      // Calculate velocity for momentum
      const timeDelta = currentTime - lastTime.current;
      if (timeDelta > 0) {
        const currentVelocity = (e.pageX - lastX.current) / timeDelta * -20; // Increased scale
        velocity.current = currentVelocity;
      }
      lastX.current = e.pageX;
      lastTime.current = currentTime;
      
      const walk = (x - startX.current) * 1.8; // Slightly faster for desktop
      element.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      }
      
      // Apply momentum if there's significant velocity
      if (Math.abs(velocity.current) > 0.5) {
        element.style.scrollBehavior = 'auto'; // Disable smooth during momentum
        applyMomentum();
      }
    };

    const handleMouseLeave = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (element) {
        element.style.cursor = 'grab';
        element.style.userSelect = '';
      }
      
      // Apply momentum if there's significant velocity
      if (Math.abs(velocity.current) > 0.5) {
        element.style.scrollBehavior = 'auto'; // Disable smooth during momentum
        applyMomentum();
      }
    };

    // Set initial cursor and optimize for mobile
    element.style.cursor = 'grab';
    element.style.overflowX = 'auto';
    element.style.overflowY = 'hidden';
    element.style.webkitOverflowScrolling = 'touch'; // iOS momentum scrolling
    element.style.scrollSnapType = 'none'; // Disable snap scrolling for smoother experience
    
    // Enable smooth scrolling behavior by default
    element.style.scrollBehavior = 'smooth';
    
    // Add momentum scrolling CSS for iOS devices
    element.style.webkitOverflowScrolling = 'touch';
    element.style.overscrollBehaviorX = 'contain'; // Prevent overscroll effects

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
      
      // Cancel any ongoing momentum animation
      if (momentumAnimationFrame.current) {
        cancelAnimationFrame(momentumAnimationFrame.current);
        momentumAnimationFrame.current = null;
      }
    };
  }, [elementRef, enabled]);

  return {
    isDragging: isDragging.current
  };
};
