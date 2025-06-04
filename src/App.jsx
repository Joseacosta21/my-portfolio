import React, { useEffect, useRef, useState } from "react";
import Layout from "./layout/layout";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Only add cursor functionality on non-mobile devices
    if (!isMobile) {
      const moveCursor = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseEnter = () => setIsHovering(true);
      const handleMouseLeave = () => setIsHovering(false);

      document.addEventListener("mousemove", moveCursor);

      // Add observers for dynamic content
      const addHoverListeners = () => {
        const interactiveElements = document.querySelectorAll(
          'a, button, [role="button"], .card-container, .tag, input, textarea, select, .github-logo'
        );
        interactiveElements.forEach((element) => {
          element.addEventListener("mouseenter", handleMouseEnter);
          element.addEventListener("mouseleave", handleMouseLeave);
        });
      };

      // Initial setup
      addHoverListeners();

      // Observer for dynamically added content
      const observer = new MutationObserver(() => {
        addHoverListeners();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => {
        document.removeEventListener("mousemove", moveCursor);
        observer.disconnect();
        window.removeEventListener("resize", checkMobile);
      };
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <Router className="router">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      <div className="layout-container">
        <Layout />
      </div>
    </Router>
  );
};

export default App;
