import React from "react";
import "./about.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <div className="column-container">
          <div className="column" id="bio" style={{ marginTop: "2rem" }}>
            <h2 style={{ fontWeight: "lighter", lineHeight: "2" }}>
              Hey there, I'm
            </h2>
          </div>
        </div>

        <p className="my-name">Jose Acosta Aldrete</p>

        <div className="column-container">
          <div className="column" id="bio">
            <a
              href="https://www.google.com/maps/place/Montreal,+Quebec/@45.5587087,-74.0415125,10z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu"
              target="_blank"
              style={{
                display: "block",
                margin: "auto",
                textAlign: "center",
                color: "grey",
              }}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp;Montréal, CA
            </a>
            <br />
            <h2 style={{ fontWeight: "lighter", lineHeight: "2" }}>
              I'm from San Luis Potosi, Mexico. This is my
              portfolio/digital-CV/personal website. I love anything tech
              related and artsy. Hope you like it!
            </h2>
          </div>
        </div>
        <ScrollLink
          to="engineering"
          spy={true}
          smooth={true}
          offset={-30}
          duration={1200}
          className="link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="chevron-arrow"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </ScrollLink>

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
