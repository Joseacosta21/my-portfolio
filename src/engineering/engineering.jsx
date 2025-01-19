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
    projectImg: "/assets/project-card-photos/engineering/Lens.webp",
    projectTitle: "3D-printed lens adapter",
    projectDescription:
      "3D-printed disposable camera lens to sony e-mount adapter ",
    projectTags: ["SolidWorks", "Prusa Splicer"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1U0mmlxIJHtH1CsK2waZbugGHMHBkNu3O/view?usp=sharing",
  };

  const Research = {
    projectImg: "/assets/project-card-photos/engineering/Rheology.png",
    projectTitle: "Research Assistant Project",
    projectDescription:
      "Investigating Constitutive Equations for Low-Viscosity Polymer Solutions Rheology",
    projectTags: ["TensorFlow", "Python"],
    projectGitHub: "",
    projectLink: "",
  };

  const Baja = {
    projectImg: "/assets/project-card-photos/engineering/Baja.webp",
    projectTitle: "SAE Baja",
    projectDescription: "Concordia SAE Baja Drivetrain Team Member",
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
          {/* Project Cards */}
          <ProjectsCard {...Baja} />
          <ProjectsCard {...Research} />
          <ProjectsCard {...pillDispenser} />
          <ProjectsCard {...PrintedLens} />
          <ProjectsCard {...LocKick} />
          <ProjectsCard {...SOS} />
        </div>
      </div>
    </>
  );
};

export default Engineering;
