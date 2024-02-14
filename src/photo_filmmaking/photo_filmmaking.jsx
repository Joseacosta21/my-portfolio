import React from "react";
import "./photo_filmmaking.css";
import FeedEmbed from "./feed-embed/feed-embed";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

// TODO

// Add photography commisioned work

const PhotoFilmmaking = () => {
  const steelRack = {
    projectImg: "src/assets/project-card-photos/photo-filmmaking/SteelRack.jpg",
    projectTitle: "Steelrack",
    projectDescription: "Product photography for minimalist steel bike racks",
    projectTags: "",
    projectGitHub: "",
    projectLink: "drive.google.com/linktophoto",
  };
  const hoodClub = {
    projectImg: "src/assets/project-card-photos/photo-filmmaking/HoodClub.jpg",
    projectTitle: "Hoodclub",
    projectDescription: "Product photography for local clothing brand",
    projectTags: "",
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1GJ69SSPT035CO531c5k5eZJV5dbEQq7g?usp=share_link",
  };

  return (
    <>
      <div className="photo-container">
        <h1>Photography and Filmmaking</h1>
        <p>Commissioned work</p>
        <div className="projects-container">
          <ProjectsCard {...steelRack} />
          <ProjectsCard {...hoodClub} />
        </div>
        <p>Personal photography page: </p>
        <div id="insta-embed-container">
          <FeedEmbed />
        </div>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
