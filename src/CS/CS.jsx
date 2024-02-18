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
    projectLink: "https://casinostic.com/html/index.html",
  };

  const portfolioPage = {
    projectImg: "src/assets/project-card-photos/CS/JoeCool.png",
    projectTitle: "Portfolio",
    projectDescription: "You are looking at it right now :)",
    projectTags: ["React", "JSX", "CSS"],
    projectGitHub: "https://github.com/Joseacosta21/my-portfolio",
    projectLink: "joseacostaaldrete.com",
  };
  const moreToCome = {
    projectImg: "src/assets/project-card-photos/CS/DebugDuck.png",
    projectTitle: <FontAwesomeIcon icon={faSpinner} spinPulse />,
    projectDescription: "Working on it!",
    projectTags: "",
    projectGitHub: "",
    projectLink: "",
  };

  return (
    <>
      <div className="cs-container" id="cs">
        <h1 style={{ fontWeight: "normal" }}>Computer Science</h1>
        <br />
        <p style={{ color: "#569CD6" }}>Curriculum:</p>
        <ul style={{ color: "#CE9178" }}>
          <li>Harvard CS50 - C, Python, HTML, CSS, JS, mySQL </li>
          <li>ENGR 215 - C++, Arduino</li>
          <li>Self Taught? - React, JSX</li>
        </ul>
        <div className="projects-container">
          <ProjectsCard {...casinoStic} />
          <ProjectsCard {...portfolioPage} />
          <ProjectsCard {...moreToCome} />

          <div className="loading-projects">
            <p style={{ color: "#6A9955" }}>&nbsp; More to come...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CS;
