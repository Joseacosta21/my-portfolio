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
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down, switch to icon state
        setScrolling(true);
      } else {
        // Scrolling up, switch to text state
        setScrolling(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`header-container ${scrolling ? "scrolling" : ""}`}>
      <div className="header-links">
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for About */ <FontAwesomeIcon icon={faUser} />
          ) : (
            "About"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Engineering */ <FontAwesomeIcon
              icon={faGear}
              spin
            />
          ) : (
            "Engineering"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Web Development */ <FontAwesomeIcon
              icon={faCode}
            />
          ) : (
            "Programming"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Music */ <FontAwesomeIcon icon={faMusic} />
          ) : (
            "Music"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Photo & Filmmaking */ <FontAwesomeIcon
              icon={faCamera}
            />
          ) : (
            "Photo & Filmmaking"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Design */ <FontAwesomeIcon
              icon={faPencil}
            />
          ) : (
            "Design"
          )}
        </NavLink>
        <NavLink className="link">
          {scrolling ? (
            /* Font Awesome icon for Contact */ <FontAwesomeIcon
              icon={faEnvelope}
            />
          ) : (
            "Contact"
          )}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
