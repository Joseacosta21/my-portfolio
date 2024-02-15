import React from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Engineering = () => {
  const pillDispenser = {
    projectImg: "pill.png",
    projectTitle: "Automatic pill dispenser",
    projectDescription: "3D-printed pill dispenser",
    projectTags: ["Arduino", "Solidworks", "Prusa Splicer"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "",
  };

  return (
    <>
      <div className="engineering-container">
        <h1>Engineering</h1>
        <br />
        <p>
          Currently studying Mechanical Engineering, at Concordia Univeristy.
        </p>
        <br />
        <p>Something cool</p>
        <br />
        <p>Some engineering projects ive made: </p>
        <div className="projcts-container">
          <ProjectsCard {...pillDispenser} />
        </div>
      </div>
    </>
  );
};

export default Engineering;
