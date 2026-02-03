import React, { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./MobileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faCode,
  faMusic,
  faCamera,
  faPencil,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  const [currentSection, setCurrentSection] = useState("ABOUT");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState("light"); // 'light' or 'dark' (referring to text color)
  const prevScrollY = useRef(0);
  const prevSection = useRef("ABOUT");

  // Section configuration
  const sections = [
    { id: "about", name: "ABOUT", icon: faUser, offset: 0, isDarkSection: false },
    { id: "engineering", name: "ENGINEERING", icon: faGear, offset: -50, isDarkSection: true },
    { id: "cs", name: "PROGRAMMING", icon: faCode, offset: -50, isDarkSection: true },
    { id: "music", name: "MUSIC", icon: faMusic, offset: -50, isDarkSection: true },
    { id: "photoFilmmaking", name: "VISUAL MEDIA", icon: faCamera, offset: -50, isDarkSection: true },
    { id: "design", name: "DESIGN", icon: faPencil, offset: -50, isDarkSection: false },
    { id: "contact", name: "CONTACT", icon: faEnvelope, offset: -100, isDarkSection: true },
  ];

  // Handle scroll detection and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection("up");
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjusted margins for better section detection
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const section = sections.find((s) => s.id === sectionId);
          
          if (section) {
            // Set theme based on section background type
            // If section has dark background -> use 'light' theme (white text)
            // If section has light background -> use 'dark' theme (black text)
            setTheme(section.isDarkSection ? "light" : "dark");

            if (section.name !== prevSection.current) {
              // Trigger animation
              setIsAnimating(true);
              
              // Update section after brief delay to allow animation
              setTimeout(() => {
                setCurrentSection(section.name);
                prevSection.current = section.name;
              }, 150);
              
              // Reset animation state
              setTimeout(() => {
                setIsAnimating(false);
              }, 400);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when clicking outside or on navigation
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`mobile-header ${theme}-theme`} style={{backgroundColor: "transparent"}}>
        <div className="mobile-header-content">
          {/* Current Section Name with Rolling Animation */}
          <div className="mobile-header-title-container">
            <h1
              className={`mobile-header-title ${
                isAnimating
                  ? scrollDirection === "down"
                    ? "slide-up"
                    : "slide-down"
                  : ""
              }`}
            >
              {currentSection}
            </h1>
          </div>
          {/* Burger Menu Icon */}
          <button
            className={`burger-menu ${isMenuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Menu Drawer Backdrop */}
      {isMenuOpen && (
        <div className="menu-backdrop" onClick={handleMenuToggle}></div>
      )}

      {/* Slide-in Menu Drawer */}
      <nav className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={section.offset}
              duration={1200}
              className="mobile-nav-link"
              onClick={handleNavClick}
            >
              <FontAwesomeIcon
                icon={section.icon}
                className="mobile-nav-icon"
              />
              <span>{section.name}</span>
            </ScrollLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileHeader;
