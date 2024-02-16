import React from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Engineering = () => {
  const pillDispenser = {
    projectImg: "src/assets/project-card-photos/engineering/PillDispenser.png",
    projectTitle: "Automatic pill dispenser",
    projectDescription: "3D-printed pill dispenser",
    projectTags: ["Arduino", "Solidworks", "Prusa Splicer"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink:
      "https://drive.google.com/file/d/1mN-1Lkkowt1bzpOdLWnpcD-pWPsil-iG/view?usp=sharing",
  };

  return (
    <>
      <div className="engineering-container" id="engineering">
        <h1>Engineering</h1>
        <br />
        <p>
          Currently studying B.Eng. Mechanical Engineering at Concordia
          University.
        </p>
        <br />
        <p>The brown puffle from club penguin is my spirit animal</p>
        <br />
        <p>Some engineering projects ive made: </p>
        <div className="projects-container">
          <ProjectsCard {...pillDispenser} />
        </div>
      </div>
    </>
  );
};

export default Engineering;
