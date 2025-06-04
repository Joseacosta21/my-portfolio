import React, { useRef, useState, useEffect } from "react";
import FeedEmbed from "./feed-embed/feed-embed";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./photo_filmmaking.css";
import { useDragScroll } from "../utils/useDragScroll";

const PhotoFilmmaking = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Initialize drag scroll functionality
  useDragScroll(scrollContainerRef, true);

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
  const steelRack = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/SteelRack.jpg",
    projectTitle: "Steelrack",
    projectDescription: "Product photography for minimalist steel bike racks",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1t7q7h6590RVRFubmaYB3fK5dsQ7JVkNt?usp=sharing",
  };
  const hoodClub = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/HoodClub.jpg",
    projectTitle: "Hoodclub",
    projectDescription: "Product photography for local clothing brand",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1GJ69SSPT035CO531c5k5eZJV5dbEQq7g?usp=share_link",
  };
  const djDuck = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/DJ_Duck.jpg",
    projectTitle: "DJ Duck",
    projectDescription: "Photoshoot for weddings and events DJ",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1HhR8Oz4xhqtS8Bck6Qi2N0xjCnweIH_1?usp=sharing",
  };
  const solenDance = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/SolenDance.jpg",
    projectTitle: "Solen Dance",
    projectDescription: "Dancer photoshoot in downtown Montreal",
    projectTags: ["2023"],
    projectGitHub: "",
    projectLink: "TODO.com",
  };
  const santaUrsula = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/tvCamp.JPG",
    projectTitle: "Camp Santa Ursula",
    projectDescription:
      "Videographer/TV Camp for best-rated camp in Mexico; nominated for best staff member",
    projectTags: ["2023"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1AB1I1DSlFzxNEnzy1I6j-w7zHPGkuCuY/view?usp=sharing",
  };
  const stingers = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/Stingers.jpg",
    projectTitle: "The Concordian",
    projectDescription:
      "Photography contribution to The Concordian, university newspaper",
    projectTags: ["2024"],
    projectGitHub: "",
    projectLink:
      "https://theconcordian.com/2023/11/stingers-football-to-face-laval-rouge-et-or-in-rseq-playoff-semi-final/",
  };
  const AELAUM = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/AELAUM.jpg",
    projectTitle: "AELAUM",
    projectDescription: "Latin American Student Association, UdeM",
    projectTags: ["2024"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1HgYvzYjaSXZnzCpBdbv_JYfwUDMb2BN7?usp=share_link",
  };

  return (
    <>
      <div className="photo-container" id="photoFilmmaking">
        <div className="projects-wrapper">
          <button
            className={`scroll-button scroll-button--dark left ${
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
              <h1 className="title">Visual Media</h1>
              <br />
              <p>Me, my camera & my drone.</p>
              <br />
              <p>Commissioned work & collaborations:</p>
              <br />
            </div>
            {/* Project Cards */}
            <ProjectsCard {...steelRack} animationDelay={0} />
            <ProjectsCard {...hoodClub} animationDelay={100} />
            <ProjectsCard {...djDuck} animationDelay={200} />
            <ProjectsCard {...solenDance} animationDelay={300} />
            <ProjectsCard {...santaUrsula} animationDelay={400} />
            <ProjectsCard {...stingers} animationDelay={500} />
            <ProjectsCard {...AELAUM} animationDelay={600} />
          </div>
          <button
            className={`scroll-button scroll-button--dark right ${
              !canScrollRight ? "hidden" : ""
            }`}
            onClick={() => scroll("right")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>
        {/* IG Embed */}
        <p className="text-center">Personal photography page: </p>
        <div id="insta-embed-container">
          <FeedEmbed />
        </div>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
