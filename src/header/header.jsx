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
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faUser} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faUser} />
          ) : (
            "About"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faGear} spin />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faGear} spin />
          ) : (
            "Engineering"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faCode} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faCode} />
          ) : (
            "Programming"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faMusic} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faMusic} />
          ) : (
            "Music"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faCamera} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faCamera} />
          ) : (
            "Photo & Filmmaking"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faPencil} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faPencil} />
          ) : (
            "Design"
          )}
        </NavLink>
        <NavLink className="link">
          {iconDisplay ? (
            <FontAwesomeIcon icon={faEnvelope} />
          ) : scrolling ? (
            <FontAwesomeIcon icon={faEnvelope} />
          ) : (
            "Contact"
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
