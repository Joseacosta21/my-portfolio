import React, { useRef, useState } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faYoutube,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_p92yzsm",
        "template_ytgpmqs",
        form.current,
        "knFF7WO7GqcIeYPth"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSending(false);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <>
      <div className="footer-container" id="contact">
        <div className="column-container">
          <div className="column">
            <h2>Contact Me!</h2>
            <p>Enter your info and I'll get back to you</p>
          </div>
        </div>
        <div className="column-container">
          <div className="column px-0 gap-10">
            <form
              id="contactForm"
              ref={form}
              className="contactform gap-10"
              onSubmit={sendEmail}
            >
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
                className={`submit ${isSending ? "sending" : ""} ${
                  isSent ? "sent" : ""
                }`}
                value={isSending ? "Sending..." : isSent ? "Sent" : "Send"}
                id="submitButton"
                disabled={isSending || isSent}
              />
            </form>
          </div>
        </div>
        <div className="column-container">
          <div className="column px-0">
            <ul className="footerLink no-list">
              <li>
                <a
                  href="/assets/files/Jose Acosta Aldrete.pdf"
                  target="_blank"
                  id="cv-link"
                >
                  <p style={{ margin: 0, marginRight: "1rem" }}>CV</p>
                  <FontAwesomeIcon icon={faFile} />
                </a>
              </li>
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
              <li>
                <a
                  href="https://soundcloud.com/jose-acosta-416794409?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faSoundcloud} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-container">
          <div className="column">
            <p>
              Inspiration and help from&nbsp;
              <b>
                <a href="https://noah-burns.vercel.app" target="_blank">
                  Mr. Burns
                </a>
              </b>
            </p>
            <p>&copy; 2023 Jose Acosta Aldrete.🇲🇽</p>
          </div>
        </div>
      </div>
      <div className="tiles"></div>
    </>
  );
};

export default Footer;
