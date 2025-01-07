import React from "react";
import "./design.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Design = () => {
  // Project Cards
  const theMeatSweats = {
    projectImg: "/assets/project-card-photos/design/The Meat Sweats.jpg",
    projectTitle: "The Meat sweats",
    projectDescription: "They really are a thing.",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/The Meat Sweats.jpg",
    fitType: "contain",
  };
  const academicWeapon = {
    projectImg: "/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    projectTitle: "Absolute Academic Weapon",
    projectDescription: "Absolute. Academic. Weapon. ",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink:
      "src/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    fitType: "contain",
  };
  const artekPatch = {
    projectImg: "/assets/project-card-photos/design/Artek Patch V2.0.png",
    projectTitle: "Artek Patch",
    projectDescription: "Artek summer camp style patch/sticker design",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/Artek Patch V2.0.png",
    fitType: "contain",
  };
  const badIdeasGoodTimes = {
    projectImg: "/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    projectTitle: "Bad Ideas, Good Times",
    projectDescription: "Right?",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    fitType: "contain",
  };
  const peanutsJoe = {
    projectImg: "/assets/project-card-photos/design/PeanutsJoe.jpg",
    projectTitle: "Peanuts Self-portrait",
    projectDescription: "",
    projectTags: ["Procreate"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/PeanutsJoe.jpg",
  };
  const phoneStand = {
    projectImg: "/assets/project-card-photos/design/PhoneStand.jpg",
    projectTitle: "Phone Stand",
    projectDescription: "Industrial design sketch for phone stand",
    projectTags: ["Procreate"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/PhoneStand.jpg",
    fitType: "contain",
  };

  const mockUps = {
    projectImg: "/assets/project-card-photos/design/MockupApp.jpg",
    projectTitle: "App UI Design and Mockup",
    projectDescription:
      "Complete UI design and mockup for a diabetes managment app; an incomplete app venture.",
    projectTags: ["Gimp", "Figma"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1r80NNDFtC-O3JftEpoGiGCAL23_7g3Mv?usp=sharing",
  };

  return (
    <>
      <div className="design-container" id="design">
        <div className="projects-container">
          {/* Text */}
          <div class="text-container">
            <h1>Design</h1>
            <p>
              Several designs ive made with Gimp and Procreate for fun, gifts
              for friends, and comissions.
            </p>
          </div>
          {/* Project Cards */}
          <ProjectsCard {...mockUps} />
          <ProjectsCard {...theMeatSweats} />
          <ProjectsCard {...academicWeapon} />
          <ProjectsCard {...artekPatch} />
          <ProjectsCard {...badIdeasGoodTimes} />
          <ProjectsCard {...peanutsJoe} />
          <ProjectsCard {...phoneStand} />
        </div>
      </div>
    </>
  );
};

export default Design;
