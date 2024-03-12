import React from "react";
import Header from "../header/header";
import About from "../about/about";
import Engineering from "../engineering/engineering";
import CS from "../CS/CS";
import Music from "../music/music";
import PhotoFilmmaking from "../photo_filmmaking/photo_filmmaking";
import Footer from "../footer/footer";
import "./layout.css";
import Design from "../design/design";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <About id="about" />
        <Engineering id="engineering" />
        <CS id="cs" />
        <Music id="music" />
        <PhotoFilmmaking id="photoFilmmaking" />
        <Design id="design" />
        <Footer id="contact" />
      </div>
    </>
  );
};

export default Layout;
