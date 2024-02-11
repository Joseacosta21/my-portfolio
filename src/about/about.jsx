import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-text">Hey there! Im</p>
        <p className="my-name">Jose Acosta Aldrete</p>
        <div className="column">
          <p>
            Im from San Luis Potosi, Mexico, currently based in Montreal. This
            is my portfolio/digital-CV/personal-website. It has things that I
            like, things I've made, and a hidden game. Hope you like it!
          </p>
        </div>

        <p className="page-title">About</p>
      </div>
    </>
  );
};

export default About;
