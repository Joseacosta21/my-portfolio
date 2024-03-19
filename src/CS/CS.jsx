import React from "react";
import "./CS.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const CS = () => {
  // Project cards
  const casinoStic = {
    projectImg: "public/assets/project-card-photos/CS/Casino_Stic.png",
    projectTitle: "Casino STIC",
    projectDescription: "A landing webpage for a sports & events venues.",
    projectTags: ["HTML", "CSS", "JS"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "https://casinostic.com/html/index.html",
    fitType: "contain",
  };

  const portfolioPage = {
    projectImg: "public/assets/project-card-photos/CS/JoeCool.png",
    projectTitle: "Portfolio",
    projectDescription: "You are looking at it right now :)",
    projectTags: ["React", "JSX", "CSS", "TW"],
    projectGitHub: "https://github.com/Joseacosta21/my-portfolio",
    projectLink: "joseacostaaldrete.com",
  };
  const aWheelieGoodTime = {
    projectImg: "public/assets/project-card-photos/CS/AWheelieGoodTime.jpg",
    projectTitle: " Podcast webpage",
    projectDescription: [
      <FontAwesomeIcon icon={faSpinner} spinPulse />,
      " Working on it!",
    ],
    projectTags: ["React", "JSX", "CSS"],
    projectGitHub: "https://github.com/noahbburns/AWheelyGoodTime",
    projectLink: "",
  };

  // Scrolling Goober
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <>
      <div
        className="cs-container topic relative h-[300vh]"
        id="cs"
        ref={targetRef}
      >
        <section className="sticky top-0 flex h-screen items-center overflow-hidden  pt-12">
          <motion.div style={{ x }} className="flex gap-1">
            <div class="text-center">
              <h1
                style={{
                  fontWeight: "normal",
                  letterSpacing: "-0.5rem",
                  lineHeight: "1.2",
                }}
                className="title text-center"
              >
                Computer science
              </h1>
              <p style={{ color: "rgb(155, 161, 166)" }}>
                Who said mechies can't code?
              </p>

              <br />
              <div className="flex justify-center gap-10">
                <div className="skills">
                  <p>Curriculum</p>
                  <ul className="no-list">
                    <li>
                      <a
                        href="https://cs50.harvard.edu/x/2021/"
                        target="_blank"
                      >
                        Harvard CS50x 2021
                      </a>
                    </li>
                    <li>
                      <a href="https://www.athackctf.com" target="_blank">
                        @Hack 2024
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://users.encs.concordia.ca/~bwgordon/mech215_common.html"
                        target="_blank"
                      >
                        ENGR 215
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="skills">
                  <p>Languages</p>
                  <ul>
                    <li>
                      <img src="src/assets/svgs/cpp-svgrepo-com.svg" />
                      <p>C++</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/python-svgrepo-com.svg" />
                      <p>Python</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/C_Programming_Language.svg" />
                      <p>C</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/js-svgrepo-com.svg" />
                      <p>JS</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/html-5-svgrepo-com.svg" />
                      <p>HTML</p>
                    </li>
                    <li className="flex">
                      <img src="src/assets/svgs/css-3-svgrepo-com.svg" />
                      <p>CSS</p>
                    </li>
                    <li className="flex">
                      <img src="src/assets/svgs/arduino-svgrepo-com.svg" />
                      <p>Arduino</p>
                    </li>
                  </ul>
                </div>
                <div className="skills">
                  <p>Frameworks</p>
                  <ul>
                    <li>
                      <img src="src/assets/svgs/react-svgrepo-com.svg" />
                      <p>ReactJS</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/vite-svgrepo-com.svg" />
                      <p>Vite</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/tailwind-svgrepo-com.svg" />
                      <p>TailwindCSS</p>
                    </li>
                  </ul>
                  <br />
                  <p>Tools</p>
                  <ul>
                    <li>
                      <img src="src/assets/svgs/git-svgrepo-com.svg" />
                      <p>Git</p>
                    </li>
                    <li>
                      <img src="src/assets/svgs/github-142-svgrepo-com.svg" />
                      <p>GitHub</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ProjectsCard {...casinoStic} />
            <ProjectsCard {...portfolioPage} />
            <ProjectsCard {...aWheelieGoodTime} />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default CS;
