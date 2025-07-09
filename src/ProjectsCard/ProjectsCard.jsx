import React, { useRef, useState, useEffect } from "react";
import "./ProjectsCard.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectsCard = ({
  projectImg,
  projectTitle,
  projectDescription,
  projectTags,
  projectGitHub,
  projectLink,
  fitType,
  animationDelay = 0, // Add optional animation delay prop
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Actually detects touch vs mouse devices

  // Detect touch device (not just mobile)
  useEffect(() => {
    const checkTouchDevice = () => {
      // Primary detection: Check if touch is supported and no mouse is detected
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // Check if it's primarily a touch device (no mouse/trackpad)
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      const hasHover = window.matchMedia("(hover: hover)").matches;

      // Show mobile description if:
      // 1. Touch is supported AND (coarse pointer OR no hover capability)
      // 2. Small screen (mobile/tablet)
      const shouldShowMobileDescription =
        (isTouchDevice && (hasCoarsePointer || !hasHover)) ||
        window.innerWidth <= 768;

      setIsMobile(shouldShowMobileDescription);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    // Also listen for pointer/hover capability changes
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const hoverQuery = window.matchMedia("(hover: hover)");

    coarsePointerQuery.addListener(checkTouchDevice);
    hoverQuery.addListener(checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
      coarsePointerQuery.removeListener(checkTouchDevice);
      hoverQuery.removeListener(checkTouchDevice);
    };
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before making visible for staggered effect
          setTimeout(() => {
            setIsVisible(true);
          }, animationDelay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible (more centered)
        rootMargin: "-10% 0px -10% 0px", // Start animation when card is closer to center of viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animationDelay]);

  const handleMouseMove = (e) => {
    // Skip 3D effects on touch devices for better performance
    if (isMobile) return;

    const imgContainer = e.currentTarget; // Use the img-container as reference
    if (!imgContainer) return;

    const rect = imgContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate mouse position as percentage for gradient
    const mouseXPercent = (x / rect.width) * 100;
    const mouseYPercent = (y / rect.height) * 100;

    // Set CSS custom properties for the gradient
    if (imgContainer) {
      imgContainer.style.setProperty("--mouse-x", `${mouseXPercent}%`);
      imgContainer.style.setProperty("--mouse-y", `${mouseYPercent}%`);
    }

    // Reduced sensitivity for more subtle effect
    const rotateX = ((y - centerY) / centerY) * -8; // Max rotation of 8 degrees
    const rotateY = ((x - centerX) / centerX) * 8;

    // Add slight translation for enhanced 3D effect
    const translateX = ((x - centerX) / centerX) * 3;
    const translateY = ((y - centerY) / centerY) * 3;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) translateZ(15px) scale3d(1.03, 1.03, 1.03)`
    );
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setTransform("");
    }
  };

  const handleMouseEnter = () => {
    // Skip 3D effects on touch devices
    if (isMobile) return;

    // Pre-warm the transition for smoother entry with subtle effect
    setTransform(
      "perspective(1000px) translateZ(5px) scale3d(1.01, 1.01, 1.01)"
    );
  };

  // Helper function to combine fade animation with 3D hover transform
  const getFinalTransform = () => {
    const fadeTransform = isVisible
      ? "translateY(0) scale(1)"
      : "translateY(30px) scale(0.95)";

    // On touch devices, only apply fade transform for better performance
    if (isMobile) {
      return fadeTransform;
    }

    if (transform) {
      // When hovering, apply both fade transform and 3D hover effect
      return `${fadeTransform} ${transform}`;
    }
    return fadeTransform;
  };

  return (
    <div ref={cardRef} className="card-container">
      {projectLink ? (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div
            className="img-container"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getFinalTransform(),
              opacity: isVisible ? 1 : 0,
              transition: transform
                ? "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out"
                : "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out",
            }}
          >
            <img
              src={projectImg}
              className="project-image"
              alt={projectTitle}
              style={{ objectFit: fitType || "cover" }}
              loading="lazy"
            />
            <div className="overlay">
              <div className="overlay-text">{projectDescription}</div>
              <p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                &nbsp; Click to take a look
              </p>
            </div>
          </div>
        </a>
      ) : (
        <div
          className="img-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: getFinalTransform(),
            opacity: isVisible ? 1 : 0,
            transition: transform
              ? "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out"
              : "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out",
          }}
        >
          <img
            src={projectImg}
            className="project-image"
            alt={projectTitle}
            style={{ objectFit: fitType || "cover" }}
            loading="lazy"
          />
          <div className="overlay">
            <div className="overlay-text">{projectDescription}</div>
          </div>
        </div>
      )}
      <div className="card-info">
        <div className="title-link-pair">
          <div className="card-title">{projectTitle}</div>
          <div className="card-links">
            {projectGitHub && (
              <NavLink
                to={projectGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github-logo" />
              </NavLink>
            )}
          </div>
        </div>
        {/* Touch device description under title */}
        {isMobile && (
          <div className="card-description-mobile">{projectDescription}</div>
        )}
        {projectTags.length > 0 && (
          <div className="card-tags">
            {projectTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
