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
import Contact from "../contact/contact";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <About />
      <Engineering />
      <CS />
      <Music />
      <PhotoFilmmaking />
      <Design />
      <Contact />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
