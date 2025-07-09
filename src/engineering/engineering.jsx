import React, { useRef, useState, useEffect } from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { useDragScroll } from "../utils/useDragScroll";
import {
  checkMobile,
  createMobileScrollFunction,
  useScrollProgress,
} from "../utils/mobileUtils";

const Engineering = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize drag scroll functionality
  useDragScroll(scrollContainerRef, true);

  // Get scroll progress for mobile progress bar
  const scrollProgress = useScrollProgress(scrollContainerRef);

  // Detect mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);

      // Update scroll buttons after content has loaded
      const updateAfterLoad = () => setTimeout(updateScrollButtons, 100);
      window.addEventListener("load", updateAfterLoad);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
        window.removeEventListener("load", updateAfterLoad);
      };
    }
  }, []);

  const scroll = createMobileScrollFunction(scrollContainerRef, isMobile);
  // Project Cards
  const pillDispenser = {
    projectImg: "/assets/project-card-photos/engineering/PillDispenser.png",
    projectTitle: "Automatic pill dispenser",
    projectDescription: "3D-printed pill dispenser",
    projectTags: ["Arduino", "Solidworks", "Prusa Splicer"],
    projectGitHub: "https://github.com/Joseacosta21/PillDispenser",
    projectLink:
      "https://drive.google.com/file/d/1mN-1Lkkowt1bzpOdLWnpcD-pWPsil-iG/view?usp=sharing",
  };

  const PrintedLens = {
    projectImg: "/assets/project-card-photos/engineering/Lens.webp",
    projectTitle: "3D-printed lens adapter",
    projectDescription:
      "3D-printed disposable camera lens to sony e-mount adapter.",
    projectTags: ["SolidWorks", "Prusa Splicer"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1U0mmlxIJHtH1CsK2waZbugGHMHBkNu3O/view?usp=sharing",
  };

  const Research = {
    projectImg: "/assets/project-card-photos/engineering/Rheology.png",
    projectTitle: "Research Assistant Project",
    projectDescription:
      "Investigating constitutive equations for low-viscosity polymer solutions in rheology using machine learning.",
    projectTags: ["TensorFlow", "Python", "COMSOL"],
    projectGitHub: "",
    projectLink: "",
  };

  const Baja = {
    projectImg: "/assets/project-card-photos/engineering/Baja.webp",
    projectTitle: "SAE Baja",
    projectDescription: "Concordia SAE Baja drivetrain team member.",
    projectTags: ["SolidWorks", "Manufacturing", "ANSYS"],
    projectGitHub: "",
    projectLink: "https://concordiabaja.racing",
  };

  const LocKick = {
    projectImg: "/assets/project-card-photos/engineering/LocKick.webp",
    projectTitle: "LocKick | Auto Door Wedge",
    projectDescription:
      "Final project for Concordia Product Design and Development course.",
    projectTags: ["SolidWorks", "ANSYS"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1fYfTtddTdlOpKhHQ65321L5HJpZ0_M7Q?usp=sharing",
  };

  const SOS = {
    projectImg: "/assets/project-card-photos/engineering/SOS.webp",
    projectTitle: "Digital LED S.O.S. Signal",
    projectDescription:
      "Final project for Concordia Electronics and Circuits course.",
    projectTags: ["Digital Logic Gates"],
    projectGitHub: "",
    projectLink: "https://youtu.be/q-ocKNWIzZY",
  };

  const EcoFlow = {
    projectImg: "/assets/project-card-photos/engineering/EcoFlow.webp",
    projectTitle: "EcoFLow Mockups",
    projectDescription:
      "Concordia University's UpStart case competition mockups for transportation system.",
    projectTags: ["Figma"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/14FA8nuLCU4KQCLuXx8hOvbH8zMwCel3-?usp=share_link",
  };

  const ThermoCar = {
    projectImg: "/assets/project-card-photos/engineering/ThermoCar.webp",
    projectTitle: "Peltier Powered Car",
    projectDescription:
      "Peltier powered car for Concordia's Thermodynamics II course.",
    projectTags: ["SolidWorks", "3D Printing", "Soldering"],
    projectGitHub: "",
    projectLink: "",
  };

  return (
    <>
      <div className="engineering-container" id="engineering">
        {/* Mobile Text Container - appears above scroll area on mobile only */}
        <div className="mobile-text-container">
          <h1 className="title">Engineering</h1>
          <p>
            I am a B.Eng. Mechanical Engineering Co-Op Student at Concordia
            University.
          </p>
          <p>The brown puffle from Club Penguin is my spirit animal.</p>
          <p>Bit of my engineering stuff:</p>
        </div>

        <div className="projects-wrapper">
          <button
            className={`scroll-button scroll-button--dark ${
              isMobile ? "scroll-button--mobile" : ""
            } left ${!canScrollLeft ? "hidden" : ""}`}
            onClick={() => scroll("left")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="projects-container" ref={scrollContainerRef}>
            {/* Text */}
            <div className="text-container">
              <h1 className="title">Engineering</h1>
              <br />
              <p>
                I am a B.Eng. Mechanical Engineering Co-Op Student at Concordia
                University.
              </p>
              <br />
              <p>The brown puffle from Club Penguin is my spirit animal.</p>
              <br />
              <p>Bit of my engineering stuff:</p>
            </div>
            {/* Project Cards */}
            <ProjectsCard {...Baja} animationDelay={0} />
            <ProjectsCard {...Research} animationDelay={100} />
            <ProjectsCard {...ThermoCar} animationDelay={200} />
            <ProjectsCard {...EcoFlow} animationDelay={300} />
            <ProjectsCard {...pillDispenser} animationDelay={400} />
            <ProjectsCard {...PrintedLens} animationDelay={500} />
            <ProjectsCard {...LocKick} animationDelay={600} />
            <ProjectsCard {...SOS} animationDelay={700} />
          </div>
          <button
            className={`scroll-button scroll-button--dark ${
              isMobile ? "scroll-button--mobile" : ""
            } right ${!canScrollRight ? "hidden" : ""}`}
            onClick={() => scroll("right")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
          {/* Mobile scroll progress bar */}
          {isMobile && (
            <div
              className="scroll-progress scroll-progress--dark"
              style={{ width: `${scrollProgress}%` }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Engineering;
