import React from "react";
import "./ProjectsCard.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// ... (your existing imports)

const ProjectsCard = ({
  projectImg,
  projectTitle,
  projectDescription,
  projectTags,
  projectGitHub,
  projectLink,
  fitType,
}) => {
  return (
    <div className="card-container">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="img-container">
          <img
            src={projectImg}
            className="project-image"
            alt={projectTitle}
            style={{ objectFit: fitType || "cover" }}
          />
          <div className="overlay">
            <div className="overlay-text">{projectDescription}</div>
            <p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              &nbsp; Click to take a look
            </p>
          </div>
        </div>
      </a>
      <div className="card-info">
        <div className="title-link-pair">
          <div className="card-title">{projectTitle}</div>
          <div className="card-links">
            {projectGitHub && (
              <NavLink
                to={projectGitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github-logo" />
              </NavLink>
            )}
          </div>
        </div>
        {projectTags.length > 0 && (
          <div className="card-tags">
            {projectTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
