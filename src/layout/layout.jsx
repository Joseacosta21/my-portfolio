import React from "react";
import Header from "../header/header";
import About from "../about/about";

import Footer from "../footer/footer";
import "./layout.css";
import Engineering from "../engineering/engineering";
import CS from "../CS/CS";
import Music from "../music/music";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <About />
      <Engineering />
      <CS />
      <Music />

      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
