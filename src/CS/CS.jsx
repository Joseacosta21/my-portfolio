import React from "react";
import "./CS.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const CS = () => {
  const casinoStic = {
    projectImg: "src/assets/project-card-photos/CS/Casino_Stic.png",
    projectTitle: "Casino STIC",
    projectDescription: "A landing webpage for a sports & events venues.",
    projectTags: ["HTML", "CSS", "JS"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "casinostic.com",
  };

  const portfolioPage = {
    projectImg: "src/assets/project-card-photos/CS/Casino_Stic.png",
    projectTitle: "Portfolio",
    projectDescription: "You are looking at it right now :)",
    projectTags: ["React", "JSX", "CSS"],
    projectGitHub: "https://github.com/my-portfolio",
    projectLink: "joseacostaaldrete.com",
  };

  return (
    <>
      <div className="cs-container">
        <h1>Computer Science</h1>
        <p>coding stuff</p>

        <div className="projects-container">
          <ProjectsCard {...casinoStic} />
          <ProjectsCard {...portfolioPage} />
          <div className="loading-projects">
            <FontAwesomeIcon icon={faSpinner} spinPulse />
            <p>More to come...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CS;
