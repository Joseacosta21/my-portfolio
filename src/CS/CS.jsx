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
    fitType: "contain",
  };

  const portfolioPage = {
    projectImg: "src/assets/project-card-photos/CS/JoeCool.png",
    projectTitle: "Portfolio",
    projectDescription: "You are looking at it right now :)",
    projectTags: ["React", "JSX", "CSS"],
    projectGitHub: "https://github.com/Joseacosta21/my-portfolio",
    projectLink: "joseacostaaldrete.com",
  };
  const aWheelieGoodTime = {
    projectImg: "src/assets/project-card-photos/CS/DebugDuck.png",
    projectTitle: " Podcast webpage",
    projectDescription: [
      <FontAwesomeIcon icon={faSpinner} spinPulse />,
      " Working on it!",
    ],
    projectTags: ["React", "JSX", "CSS"],
    projectGitHub: "https://github.com/noahbburns/AWheelyGoodTime",
    projectLink: "",
  };

  return (
    <>
      <div className="cs-container topic" id="cs">
        <h1
          style={{
            fontWeight: "normal",
            letterSpacing: "-0.5rem",
          }}
          className="title"
        >
          // Computer science
        </h1>
        <br />
        <p>.curriculum &#123;</p>
        <ul className="no-list">
          <li>
            <a href="https://cs50.harvard.edu/x/2021/" target="_blank">
              Harvard CS50x 2021:
            </a>{" "}
            C, Python, HTML, CSS, JS, mySQL;
          </li>
          <li>
            <a href="https://www.athackctf.com" target="_blank">
              @Hack 2024:
            </a>{" "}
            Cybersecurity Hackathon - PWN, Steg;
          </li>
          <li>
            <a
              href="https://users.encs.concordia.ca/~bwgordon/mech215_common.html"
              target="_blank"
            >
              ENGR 215:
            </a>{" "}
            C++, Arduino;
          </li>
          <li>Self Taught: React, JSX;</li>
        </ul>
        <p>&#125;</p>
        <div className="projects-container">
          <ProjectsCard {...casinoStic} />
          <ProjectsCard {...portfolioPage} />
          <ProjectsCard {...aWheelieGoodTime} />
        </div>
      </div>
    </>
  );
};

export default CS;
