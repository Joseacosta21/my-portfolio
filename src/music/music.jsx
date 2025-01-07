import React from "react";
import "./music.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Music = () => {
  // Project Cards
  const JazzHouse = {
    projectImg: "/assets/project-card-photos/music/JazzHouse.png",
    projectTitle: "Jazz House DJ Set",
    projectDescription: "Jazz & Instrumental House DJ Set",
    projectTags: "",
    projectGitHub: "",
    projectLink: "https://www.youtube.com/watch?v=-XqFjEXeiYE&t=13s",
  };
  const TimeoutMarket = {
    projectImg: "/assets/project-card-photos/music/Timeout.jpg",
    projectTitle: "Timeout Market",
    projectDescription: "Timeout Market Bar, Montreal",
    projectTags: "",
    projectGitHub: "",
    projectLink: "",
  };
  const FanaBox = {
    projectImg: "/assets/project-card-photos/music/FanaBox.JPG",
    projectTitle: "FanaBox GP",
    projectDescription: "F1 store, Montreal GP weekend",
    projectTags: "",
    projectGitHub: "",
    projectLink: "",
  };

  const AfroHouse = {
    projectImg: "/assets/project-card-photos/music/AfroHouse.jpg",
    projectTitle: "Afro House DJ Set",
    projectDescription: "Afro House DJ Set",
    projectTags: "",
    projectGitHub: "",
    projectLink: "https://youtu.be/2_-RP0J6uPE?si=RhmgFNM7i8CyA8m5",
  };

  const EnjoytheSilence = {
    projectImg: "/assets/project-card-photos/music/EnjoytheSilence.jpg",
    projectTitle: "Enjoy the Silence - Dirty Hands Mix",
    projectDescription:
      "Depeche Mode - Enjoy the Silence (Hands and Feet Mix) Bootleg",
    projectTags: "",
    projectGitHub: "",
    projectLink: "https://youtu.be/Sejj8WNgzwM?si=RQUoer9u-afScBOO",
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
        className="music-container topic relative h-[300vh] px-0 flex-col"
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
        <br />
        <div className="projects-container">
          <ProjectsCard {...TimeoutMarket} />
          <ProjectsCard {...FanaBox} />
          <ProjectsCard {...JazzHouse} />
          <ProjectsCard {...AfroHouse} />
          <ProjectsCard {...EnjoytheSilence} />
          <div>
            <iframe
              src="https://open.spotify.com/embed/playlist/4E4oSQkL1597H572J4LZQb?utm_source=generator"
              width="100%"
              height="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
