import { useEffect, useState } from 'react';

/**
 * Enhanced mobile detection with multiple fallbacks for better iPhone optimization
 */
export const checkMobile = () => {
  // Primary detection methods
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const userAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const screenSize = window.innerWidth <= 768;
  const aspectRatio = window.innerHeight > window.innerWidth; // Portrait mode typical for mobile
  
  // iOS specific detection
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  const isMobile = hasTouch || userAgent || screenSize || isIOS;
  
  // Debug logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Mobile Detection:', {
      hasTouch,
      userAgent: userAgent,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      screenSizeCheck: screenSize,
      aspectRatio: aspectRatio,
      isIOS,
      finalResult: isMobile
    });
  }
  
  return isMobile;
};

/**
 * Get optimized scroll amount based on device type and screen size
 */
export const getScrollAmount = (isMobile) => {
  if (isMobile) {
    // Dynamic scroll amount based on screen width for mobile
    const screenWidth = window.innerWidth;
    if (screenWidth <= 375) return 220; // iPhone SE and smaller - reduced for smoother scrolling
    if (screenWidth <= 414) return 250; // Standard iPhone sizes - reduced for smoother scrolling
    return 270; // Larger mobile devices - reduced for smoother scrolling
  }
  return 350; // Desktop scroll amount
};

/**
 * Mobile-optimized scroll function
 */
export const createMobileScrollFunction = (scrollContainerRef, isMobile) => {
  return (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = getScrollAmount(isMobile);
    
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
};

/**
 * Hook for mobile detection with resize listener
 */
export const useMobileDetection = (setIsMobile) => {
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);
};

/**
 * Hook for scroll progress tracking
 */
export const useScrollProgress = (scrollContainerRef) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollProgress = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateScrollProgress(); // Initial calculation
    container.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      container.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [scrollContainerRef]);

  return scrollProgress;
};