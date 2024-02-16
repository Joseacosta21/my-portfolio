import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="column-container">
          <div className="column" id="bio">
            <h2>Hey there, I'm</h2>
          </div>
        </div>

        <p className="my-name">Jose Acosta Aldrete</p>

        <div className="column-container">
          <div className="column" id="bio">
            <h2 style={{ fontWeight: "lighter", lineHeight: "2" }}>
              I'm from San Luis Potosi, Mexico, based in Montréal. This is my
              portfolio/digital-CV/personal website. I love anything tech
              related and artsy. Hope you like it!
            </h2>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="chevron-arrow"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        {/*} TODO 

        <div className="pakkete-container">
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
          <div className="pallete-color"></div>
        </div>
        {*/}
      </div>
    </>
  );
};

export default About;
