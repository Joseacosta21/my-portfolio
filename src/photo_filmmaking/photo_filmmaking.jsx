import React from "react";
import "./photo_filmmaking.css";
import FeedEmbed from "./feed-embed/feed-embed";

const PhotoFilmmaking = () => {
  return (
    <>
      <div className="photo-container">
        <h1>Photography and Filmmaking</h1>
        <p>Personal photography page: </p>
        <div id="insta-embed-container">
          <FeedEmbed />
        </div>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
