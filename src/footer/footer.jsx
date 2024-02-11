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
        <div className="column-container">
          <div className="column">
            <h3>Contact me!</h3>
            <p>Enter your info and ill get back to you!</p>
          </div>
        </div>
        <div className="column-container">
          <div className="column">
            <form id="contactForm" className="contactform">
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Name"
                className="custom-input"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="custom-input"
                required
              />
              <input
                type="submit"
                className="submit"
                value="Send"
                id="submitButton"
              />
            </form>
          </div>
        </div>
        <div className="column-container">
          <div className="column">
            <ul className="footerLink">
              <li>
                <a href="https://github.com/Joseacosta21" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/524441737109" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a href="mailto:joseacostaaldrete@gmail.com" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/joseacostaaldrete/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCEK1R1HfFmtuCfA9Bcmeu7w"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jacosta_foto" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-container">
          <div className="column">
            <p>&copy; 2023 Jose Acosta Aldrete. Bad ideas, good times.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
