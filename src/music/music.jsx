import React from "react";
import "./music.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Music = () => {
  const TechHouse = {
    projectImg: "",
    projectTitle: "Tech House",
    projectDescription: "Tech house set - Fisher",
    projectTags: [""],
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };
  
  return (
    <>
      <div className="music-container">
        <h1>Music</h1>
        <p></p>
        <h3>Skills</h3>
        <ul>
          <li>Logic Pro X</li>
          <li>Rekordbox</li>
          <li>Serato</li>
        </ul>
        <h3>DJ sets</h3>
        <div className="projects-container">
          <ProjectsCard {...TechHouse} />
        </div>
      </div>
    </>
  );
};

export default Music;
