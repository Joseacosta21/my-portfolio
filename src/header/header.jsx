import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faCode,
  faMusic,
  faCamera,
  faPencil,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  // Scrolling icons change
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNarrowScreen, setIsNarrowScreen] = useState(
    window.innerWidth <= 800
  );
  const [iconDisplay, setIconDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > prevScrollY &&
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80)
      ) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      setPrevScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 800);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollY]);

  useEffect(() => {
    setIconDisplay(scrolling || isNarrowScreen);
  }, [scrolling, isNarrowScreen]);

  return (
    <header className={`header-container ${scrolling ? "scrolling" : ""}`}>
      <div className="header-links">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {iconDisplay ? (
            <FontAwesomeIcon icon={faUser} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faUser} />
          ) : (
            "About"
          )}
        </ScrollLink>
        <ScrollLink
          to="engineering"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faGear} spin />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faGear} spin />
          ) : (
            "Engineering"
          )}
        </ScrollLink>
        <ScrollLink
          to="cs"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faCode} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faCode} />
          ) : (
            "Programming"
          )}
        </ScrollLink>
        <ScrollLink
          to="music"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faMusic} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faMusic} />
          ) : (
            "Music"
          )}
        </ScrollLink>
        <ScrollLink
          to="photoFilmmaking"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faCamera} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faCamera} />
          ) : (
            "Photo & Filmmaking"
          )}
        </ScrollLink>

        <ScrollLink
          to="design"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faPencil} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faPencil} />
          ) : (
            "Design"
          )}
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
          className="link"
        >
          {" "}
          {iconDisplay ? (
            <FontAwesomeIcon icon={faEnvelope} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faEnvelope} />
          ) : (
            "Contact"
          )}
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
