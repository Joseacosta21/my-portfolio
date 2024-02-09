import React from "react";
import { SocialIcon } from "react-social-icons";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="body">
          <div className="column">
            <ul className="footerLink">
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="https://github.com/Joseacosta21"
              />
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="https://wa.me/524441737109"
              />
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="mailto:joseacostaaldrete@gmail.com"
              />
            </ul>
          </div>
          <div className="column">
            <ul className="footerLink">
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="https://www.linkedin.com/in/joseacostaaldrete/"
              />
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="https://www.youtube.com/channel/UCEK1R1HfFmtuCfA9Bcmeu7w"
              />
              <SocialIcon
                className="social-media-icon"
                fgColor="currentColor"
                target="_blank"
                url="https://instagram.com/jacosta_foto"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
