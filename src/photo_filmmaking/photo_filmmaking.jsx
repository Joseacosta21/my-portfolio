import React from "react";
import "./photo_filmmaking.css";

const PhotoFilmmaking = () => {
  return (
    <>
      <div className="photo-container">
        <h1>Photography and Filmmaking</h1>
        <p>Shit ive taken</p>
        <div id="insta-embed-container">
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            class="elfsight-app-e5907692-913d-4edd-be71-68d7b2a02846"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
