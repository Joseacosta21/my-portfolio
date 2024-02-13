import React from "react";
import "./ProjectsCard.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsCard = ({
  projectImg,
  projectTitle,
  projectDescription,
  projectTags,
  projectGitHub,
  projectLink,
}) => {
  return (
    <div className="card-container">
      <a to={projectLink}>
        <div className="img-container">
          <img src={projectImg} className="project-image" />
          <div className="overlay">
            <div className="overlay-text">{projectDescription}</div>
            <p>Click to take a look</p>
          </div>
        </div>
      </a>
      <div className="card-info">
        <div className="title-link-pair">
          <div className="card-title">{projectTitle}</div>
          <div className="card-links">
            <NavLink to={projectGitHub}>
              <FontAwesomeIcon icon={faGithub} className="github-logo" />
            </NavLink>
          </div>
        </div>
        <div className="card-tags">
          {projectTags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
