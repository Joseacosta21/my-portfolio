import React, { useRef, useState, useEffect } from "react";
import "./design.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { useDragScroll } from "../utils/useDragScroll";

const Design = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Initialize drag scroll functionality
  const { dragScrollRef } = useDragScroll(true);

  // Sync refs - use the same ref for both scroll tracking and drag functionality
  useEffect(() => {
    if (dragScrollRef.current !== scrollContainerRef.current) {
      dragScrollRef.current = scrollContainerRef.current;
    }
  }, [dragScrollRef]);

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

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 350; // Adjust this value as needed
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  // Project Cards
  const theMeatSweats = {
    projectImg: "/assets/project-card-photos/design/The Meat Sweats.jpg",
    projectTitle: "The Meat sweats",
    projectDescription: "They really are a thing.",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/The Meat Sweats.jpg",
    fitType: "contain",
  };
  const academicWeapon = {
    projectImg: "/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    projectTitle: "Absolute Academic Weapon",
    projectDescription: "Absolute. Academic. Weapon. ",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink:
      "src/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    fitType: "contain",
  };
  const artekPatch = {
    projectImg: "/assets/project-card-photos/design/Artek Patch V2.0.png",
    projectTitle: "Artek Patch",
    projectDescription: "Artek summer camp style patch/sticker design",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/Artek Patch V2.0.png",
    fitType: "contain",
  };
  const badIdeasGoodTimes = {
    projectImg: "/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    projectTitle: "Bad Ideas, Good Times",
    projectDescription: "Right?",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    fitType: "contain",
  };
  const peanutsJoe = {
    projectImg: "/assets/project-card-photos/design/PeanutsJoe.jpg",
    projectTitle: "Peanuts Self-portrait",
    projectDescription: "",
    projectTags: ["Procreate"],
    projectGitHub: "Self portrait drawing in Peanuts style",
    projectLink: "src/assets/project-card-photos/design/PeanutsJoe.jpg",
  };
  const phoneStand = {
    projectImg: "/assets/project-card-photos/design/PhoneStand.jpg",
    projectTitle: "Phone Stand",
    projectDescription: "Industrial design sketch for phone stand",
    projectTags: ["Procreate"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/PhoneStand.jpg",
    fitType: "contain",
  };

  const mockUps = {
    projectImg: "/assets/project-card-photos/design/MockupApp.jpg",
    projectTitle: "App UI Design and Mockup",
    projectDescription:
      "Complete UI design and mockup for a diabetes managment app; an incomplete app venture.",
    projectTags: ["Gimp", "Figma"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1r80NNDFtC-O3JftEpoGiGCAL23_7g3Mv?usp=sharing",
  };

  return (
    <>
      <div className="design-container" id="design">
        <div className="projects-wrapper">
          <button
            className={`scroll-button scroll-button--light left ${
              !canScrollLeft ? "hidden" : ""
            }`}
            onClick={() => scroll("left")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="projects-container" ref={scrollContainerRef}>
            {/* Text */}
            <div className="text-container">
              <h1>Design</h1>
              <p>Several designs I've made for fun, friends, and comissions.</p>
            </div>
            {/* Project Cards */}
            <ProjectsCard {...mockUps} animationDelay={0} />
            <ProjectsCard {...theMeatSweats} animationDelay={100} />
            <ProjectsCard {...academicWeapon} animationDelay={200} />
            <ProjectsCard {...artekPatch} animationDelay={300} />
            <ProjectsCard {...badIdeasGoodTimes} animationDelay={400} />
            <ProjectsCard {...peanutsJoe} animationDelay={500} />
            <ProjectsCard {...phoneStand} animationDelay={600} />
          </div>
          <button
            className={`scroll-button scroll-button--light right ${
              !canScrollRight ? "hidden" : ""
            }`}
            onClick={() => scroll("right")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Design;
