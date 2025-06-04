import React, { useRef, useState, useEffect } from "react";
import "./CS.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard.jsx";

const CS = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 350; // Adjust this value as needed
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  // Project cards
  const casinoStic = {
    projectImg: "/assets/project-card-photos/CS/Casino_Stic.png",
    projectTitle: "Casino STIC",
    projectDescription: "A landing webpage for a sports & events venues.",
    projectTags: ["HTML", "CSS", "JS"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink: "https://casinostic.com/html/index.html",
    fitType: "contain",
  };

  const portfolioPage = {
    projectImg: "/assets/project-card-photos/CS/JoeCool.png",
    projectTitle: "Portfolio",
    projectDescription: "You are looking at it right now :)",
    projectTags: ["React", "JSX", "CSS", "TW"],
    projectGitHub: "https://github.com/Joseacosta21/my-portfolio",
    projectLink: "",
  };

  return (
    <>
      <div className="cs-container" id="cs">
        <div className="projects-wrapper">
          <button
            className={`scroll-button scroll-button--dark left ${!canScrollLeft ? 'hidden' : ''}`}
            onClick={() => scroll("left")}
          >
            ‹
          </button>
          <div className="projects-container" ref={scrollContainerRef}>
            {/* Text */}
            <div class="text-container">
              <h1
                style={{
                  fontWeight: "normal",
                  letterSpacing: "-0.5rem",
                  lineHeight: "1.2",
                }}
                className="title"
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
                      <a href="https://2024.athackctf.com" target="blank">
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
                    <li>
                      <a href="https://www.athackctf.com" target="_blank">
                        @Hack 2025
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="skills">
                  <p>Languages</p>
                  <ul>
                    <li>
                      <img src="/assets/svgs/cpp-svgrepo-com.svg" />
                      <p>C++</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/python-svgrepo-com.svg" />
                      <p>Python</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/C_Programming_Language.svg" />
                      <p>C</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/js-svgrepo-com.svg" />
                      <p>JS</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/html-5-svgrepo-com.svg" />
                      <p>HTML</p>
                    </li>
                    <li className="flex">
                      <img src="/assets/svgs/css-3-svgrepo-com.svg" />
                      <p>CSS</p>
                    </li>
                    <li className="flex">
                      <img src="/assets/svgs/arduino-svgrepo-com.svg" />
                      <p>Arduino</p>
                    </li>
                  </ul>
                </div>
                <div className="skills">
                  <p>Frameworks</p>
                  <ul>
                    <li>
                      <img src="/assets/svgs/react-svgrepo-com.svg" />
                      <p>ReactJS</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/vite-svgrepo-com.svg" />
                      <p>Vite</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/tailwind-svgrepo-com.svg" />
                      <p>TailwindCSS</p>
                    </li>
                  </ul>
                  <br />
                  <p>Tools</p>
                  <ul>
                    <li>
                      <img src="/assets/svgs/git-svgrepo-com.svg" />
                      <p>Git</p>
                    </li>
                    <li>
                      <img src="/assets/svgs/github-142-svgrepo-com.svg" />
                      <p>GitHub</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Project Cards */}
            <ProjectsCard {...casinoStic} />
            <ProjectsCard {...portfolioPage} />
          </div>
          <button
            className={`scroll-button scroll-button--dark right ${!canScrollRight ? 'hidden' : ''}`}
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

export default CS;
