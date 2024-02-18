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
    projectLink:
      "https://drive.google.com/drive/folders/1t7q7h6590RVRFubmaYB3fK5dsQ7JVkNt?usp=sharing",
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
  const djDuck = {
    projectImg: "src/assets/project-card-photos/photo-filmmaking/DJ_Duck.jpg",
    projectTitle: "DJ Duck",
    projectDescription: "Photoshoot for weddings and events DJ",
    projectTags: "",
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1HhR8Oz4xhqtS8Bck6Qi2N0xjCnweIH_1?usp=sharing",
  };
  const solenDance = {
    projectImg:
      "src/assets/project-card-photos/photo-filmmaking/SolenDance.jpg",
    projectTitle: "Solen Dance",
    projectDescription: "Dancer photoshoot in downtown Montreal",
    projectTags: "",
    projectGitHub: "",
    projectLink: "TODO.com",
  };
  const santaUrsula = {
    projectImg: "src/assets/project-card-photos/photo-filmmaking/tvCamp.JPG",
    projectTitle: "Camp Santa Ursula",
    projectDescription:
      "Videographer/TV Camp for best-rated camp in Mexico; nominated for best staff member",
    projectTags: "",
    projectGitHub: "",
    projectLink: "TODO.com",
  };
  const stingers = {
    projectImg: "src/assets/project-card-photos/photo-filmmaking/Stingers.jpg",
    projectTitle: "The Concordian",
    projectDescription:
      "Photography contribution to The Concordian, university newspaper",
    projectTags: "",
    projectGitHub: "",
    projectLink:
      "https://theconcordian.com/2023/11/stingers-football-to-face-laval-rouge-et-or-in-rseq-playoff-semi-final/",
  };

  return (
    <>
      <div className="photo-container" id="photoFilmmaking">
        <h1 className="title">Photography and Filmmaking</h1>
        <br />
        <p>Me, my camera & my drone vs. the world.</p>
        <br />
        <p>Commissioned work & collaborations:</p>
        <br />
        <div className="projects-container">
          <ProjectsCard {...steelRack} />
          <ProjectsCard {...hoodClub} />
          <ProjectsCard {...djDuck} />
          <ProjectsCard {...solenDance} />
          <ProjectsCard {...santaUrsula} />
          <ProjectsCard {...stingers} />
        </div>
        <br />
        <p>Personal photography page: </p>
        <div id="insta-embed-container">
          <FeedEmbed />
        </div>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
