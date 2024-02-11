import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="column">
          <ul className="footerLink">
            <li>
              <a href="https://github.com/Joseacosta21">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/524441737109">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="mailto:joseacostaaldrete@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joseacostaaldrete/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCEK1R1HfFmtuCfA9Bcmeu7w">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jacosta_foto">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
