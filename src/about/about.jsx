import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="container-column">
          <div className="column">
            <h2>Hey there! Im</h2>
          </div>
        </div>

        <div className="my-name">
          <p className="my-name">Jose Acosta Aldrete</p>
        </div>
        <div className="container-column">
          <div className="column">
            <h2 className="bio">
              Im from San Luis Potosi, Mexico, currently based in Montreal. This
              is my portfolio/digital-CV/personal-website. It has things that I
              like, things I've made, and a hidden game. Hope you like it!
            </h2>
          </div>
        </div>

        <p className="page-title">About</p>
        <div className="pakkete-container">
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
        </div>
      </div>
    </>
  );
};

export default About;
