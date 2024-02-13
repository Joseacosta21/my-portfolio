import React from "react";
import "./design.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Design = () => {
  const theMeatSweats = {
    projectImg: "",
    projectTitle: "The Meat sweats",
    projectDescription: "They really are a thing.",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "drive.google.com/linktophoto",
  };

  return (
    <>
      <div className="design-container">
        <h1>Design</h1>
        <p>
          Several designs ive made with Gimp and Procreate for fun, gifts for
          friends, and comissions.
        </p>
        <div className="projects-container">
          <ProjectsCard {...theMeatSweats} />
        </div>
      </div>
    </>
  );
};

export default Design;
