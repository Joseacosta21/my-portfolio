import React from "react";
import "./music.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Music = () => {
  const TechHouse = {
    projectImg: "",
    projectTitle: "Tech House",
    projectDescription: "Tech house set - Fisher",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };
  const TimeoutMarket = {
    projectImg: "src/assets/project-card-photos/music/Timeout.png",
    projectTitle: "Timeout Market",
    projectDescription: "Timeout Market Bar, Montreal",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };
  const FanaBox = {
    projectImg: "src/assets/project-card-photos/music/FanaBox.JPG",
    projectTitle: "FanaBox GP",
    projectDescription: "F1 store, Montreal GP weekend",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };

  return (
    <>
      <div className="music-container" id="music">
        <h1 className="title">Music</h1>
        <p></p>
        <h3>Skills</h3>
        <ul>
          <li>Logic Pro X</li>
          <li>Rekordbox</li>
          <li>Serato</li>
        </ul>

        {/* YOUTUBE SETS 
        <br />
        <h3>Youtube DJ sets</h3>
        <div className="projects-container">
          <ProjectsCard {...TechHouse} />
        </div>
        */}
        <br />
        <h3>Experience</h3>
        <div className="projects-container">
          <ProjectsCard {...TimeoutMarket} />
          <ProjectsCard {...FanaBox} />
        </div>
      </div>
    </>
  );
};

export default Music;
