import React from "react";
import "./CS.css";
import CSProjectsCard from "../ProjectsCard/ProjectsCard.jsx";

const CS = () => {
  const casinoStic = {
    projectImg: "src/assets/Casino_Stic.png",
    projectTitle: "Casino STIC",
    projectDescription: "A landing webpage for a sports & events venues.",
    projectTags: ["HTML", "CSS", "JS"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "casinostic.com",
  };

  const portfolioPage = {
    projectImg: "src/assets/Casino_Stic.png",
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
          <CSProjectsCard {...casinoStic} />
          <CSProjectsCard {...portfolioPage} />
          <div className="loading-projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="spinner"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
            <p>Fontawesomefucker</p>
            <p>More to come...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CS;
