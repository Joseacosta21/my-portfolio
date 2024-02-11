import React from "react";
import "./CSProjectsCard.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const CSProjectsCard = ({
  projectImg,
  projectTitle,
  projectDescription,
  projectTags,
  projectGitHub,
  projectLink,
}) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={projectImg} className="project-image" />
        <div className="overlay">
          <div className="overlay-text">{projectDescription}</div>
          <div className="overlay-website">
            <img src={websiteIcon} className="website-icon"></img>
            <NavLink to={projectLink} className="website-link">
              Take a look
            </NavLink>
          </div>
        </div>
      </div>
      <div className="card-info">
        <div className="title-link-pair">
          <div className="card-title">{projectTitle}</div>
          <div className="card-links">
            <NavLink to={projectGitHub}>
              <img src={githubIcon} className="github-link"></img>
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

export default CSProjectsCard;
