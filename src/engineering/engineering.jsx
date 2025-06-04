import React, { useRef } from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Engineering = () => {
  const scrollContainerRef = useRef(null);

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
      "3D-printed disposable camera lens to sony e-mount adapter.",
    projectTags: ["SolidWorks", "Prusa Splicer"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1U0mmlxIJHtH1CsK2waZbugGHMHBkNu3O/view?usp=sharing",
  };

  const Research = {
    projectImg: "/assets/project-card-photos/engineering/Rheology.png",
    projectTitle: "Research Assistant Project",
    projectDescription:
      "Investigating constitutive equations for low-viscosity polymer solutions in rheology using machine learning.",
    projectTags: ["TensorFlow", "Python", "COMSOL"],
    projectGitHub: "",
    projectLink: "",
  };

  const Baja = {
    projectImg: "/assets/project-card-photos/engineering/Baja.webp",
    projectTitle: "SAE Baja",
    projectDescription: "Concordia SAE Baja drivetrain team member.",
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

  const EcoFlow = {
    projectImg: "/assets/project-card-photos/engineering/EcoFlow.webp",
    projectTitle: "EcoFLow Mockups",
    projectDescription:
      "Concordia University's UpStart case competition mockups for transportation system.",
    projectTags: ["Figma"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/14FA8nuLCU4KQCLuXx8hOvbH8zMwCel3-?usp=share_link",
  };

  const ThermoCar = {
    projectImg: "/assets/project-card-photos/engineering/ThermoCar.webp",
    projectTitle: "Peltier Powered Car",
    projectDescription:
      "Peltier powered car for Concordia's Thermodynamics II course.",
    projectTags: ["SolidWorks", "3D Printing", "Soldering"],
    projectGitHub: "",
    projectLink: "",
  };

  return (
    <>
      <div className="engineering-container" id="engineering">
        <div className="projects-wrapper">
          <button className="scroll-button left" onClick={() => scroll("left")}>
            ‹
          </button>
          <div className="projects-container" ref={scrollContainerRef}>
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
            <ProjectsCard {...ThermoCar} />
            <ProjectsCard {...EcoFlow} />
            <ProjectsCard {...pillDispenser} />
            <ProjectsCard {...PrintedLens} />
            <ProjectsCard {...LocKick} />
            <ProjectsCard {...SOS} />
          </div>
          <button
            className="scroll-button right"
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

export default Engineering;
