import React from "react";
import "./CS.css";
import CSProjectsCard from "../CSProjectsCard/CSProjectsCard.jsx";

const CS = () => {
  const casinoStic = {
    projectImg: "src/assets/Casino_Stic.png",
    projectTitle: "Casino STIC",
    projectDescription: "A landing webpage for a sports & events venues.",
    projectTags: ["HTML", "CSS", "JS"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "casinostic.com",
  };

  return (
    <>
      <div className="cs-container">
        <h1>Computer Science</h1>
        <p>coding stuff</p>

        <div className="projects-container">
          <CSProjectsCard {...casinoStic} />
        </div>
      </div>
    </>
  );
};

export default CS;
