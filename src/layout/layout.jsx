import React, { useEffect, useState } from "react";
import Header from "../header/header";
import MobileHeader from "../header/MobileHeader";
import About from "../about/about";
import Engineering from "../engineering/engineering";
import CS from "../CS/CS";
import Music from "../music/music";
import PhotoFilmmaking from "../photo_filmmaking/photo_filmmaking";
import Footer from "../footer/footer";
import Design from "../design/design";
import "./layout.css";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <div className="layout">
        {/* Conditionally render mobile or desktop header */}
        {isMobile ? <MobileHeader /> : <Header />}
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
