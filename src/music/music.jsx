import React from "react";
import "./music.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Music = () => {
  // Project Cards
  const TechHouse = {
    projectImg: "",
    projectTitle: "Tech House",
    projectDescription: "Tech house set - Fisher",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };
  const TimeoutMarket = {
    projectImg: "/assets/project-card-photos/music/Timeout.jpg",
    projectTitle: "Timeout Market",
    projectDescription: "Timeout Market Bar, Montreal",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };
  const FanaBox = {
    projectImg: "/assets/project-card-photos/music/FanaBox.JPG",
    projectTitle: "FanaBox GP",
    projectDescription: "F1 store, Montreal GP weekend",
    projectTags: "",
    projectGitHub: "",
    projectLink: "youtube.com/video-link",
  };

  // Scrolling Goober
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "400%"]);

  return (
    <>
      <div
        className="music-container topic relative h-[200vh] px-0"
        id="music"
        ref={targetRef}
      >
        <section className="sticky top-0 flex justify-center h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-1">
            <div className="text-center">
              <h1 className="title">Music</h1>
              <p>Matching BPMs and heart rates</p>
              <br />

              <div className="skills">
                <h3>Software Skills</h3>
                <ul>
                  <li>
                    <img src="/assets/svgs/Logicpro-icon.png" />
                    <p>Logic Pro X</p>
                  </li>
                  <li>
                    <img src="/assets/svgs/3bqjml6owsw91.png" />
                    <p>Rekordbox</p>
                  </li>
                  <li>
                    <img src="/assets/svgs/f6392752316625.5608d9436a75b.jpg" />
                    <p>Serato</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
        {/* YOUTUBE SETS 
        <br />
        <h3>Youtube DJ sets</h3>
        <div className="projects-container">
          <ProjectsCard {...TechHouse} />
        </div>
        */}
        <br />
        <div className="projects-container">
          <ProjectsCard {...TimeoutMarket} />
          <ProjectsCard {...FanaBox} />
        </div>
      </div>
    </>
  );
};

export default Music;
