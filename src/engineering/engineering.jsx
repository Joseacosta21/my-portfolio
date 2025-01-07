import React from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Engineering = () => {
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
    projectImg: "/assets/project-card-photos/engineering/PrintedLens.png",
    projectTitle: "3D-printed lens adapter",
    projectDescription:
      "3D-printed disposable camera lens to sony e-mount adapter ",
    projectTags: ["Solidworks", "Prusa Splicer"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1U0mmlxIJHtH1CsK2waZbugGHMHBkNu3O/view?usp=sharing",
  };

  const Research = {
    projectImg: "public/assets/project-card-photos/engineering/Rheology.png",
    projectTitle: "Research Assistant Project",
    projectDescription:
      "Investigating Constitutive Equations for Low-Viscosity Polymer Solutions Rheology",
    projectTags: ["ML", "Python"],
    projectGitHub: "",
    projectLink: "",
  };

  return (
    <>
      <div className="engineering-container" id="engineering">
        <div className="projects-container">
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
          {/* Cards*/}
          <ProjectsCard {...pillDispenser} />
          <ProjectsCard {...PrintedLens} />
          <ProjectsCard {...Research} />
        </div>
      </div>
    </>
  );
};

export default Engineering;
