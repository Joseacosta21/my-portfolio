import React, { useRef, useState, useEffect } from "react";
import "./ProjectsCard.css";
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

  const getFinalTransform = () =>
    isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)";

  return (
    <div ref={cardRef} className="card-container">
      {projectLink ? (
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div
            className="img-container"
            style={{
              transform: getFinalTransform(),
              opacity: isVisible ? 1 : 0,
              transition:
                "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out",
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
          style={{
            transform: getFinalTransform(),
            opacity: isVisible ? 1 : 0,
            transition:
              "transform 0.6s cubic-bezier(0.23, 1, 0.320, 1), opacity 0.6s ease-out",
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
              <a
                href={projectGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github-logo" />
              </a>
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
