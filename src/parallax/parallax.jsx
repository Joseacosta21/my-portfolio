import React from "react";
import Parallax from "react-scroll-parallax";
import "./parallax.css";

const ParallaxImg = ({ imageUrl, speed }) => {
  return (
    <>
      <Parallax
        y={[-speed, speed]} // Define scroll offsets for up/down movement
        className="parallax-image"
      >
        <img src={imageUrl} alt="Parallax Image" />
      </Parallax>
    </>
  );
};

export default ParallaxImg;
