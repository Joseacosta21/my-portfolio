import React from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Engineering = () => {
  // Project Cards
  const pillDispenser = {
    projectImg: "/assets/project-card-photos/engineering/PillDispenser.png",
    projectTitle: "Automatic pill dispenser",
    projectDescription: "3D-printed pill dispenser",
    projectTags: ["Arduino", "Solidworks", "Prusa Splicer"],
    projectGitHub: "https://github.com/Joseacosta21/PillDispenser",
    projectLink:
      "https://drive.google.com/file/d/1mN-1Lkkowt1bzpOdLWnpcD-pWPsil-iG/view?usp=sharing",
  };

  const PrintedLens = {
    projectImg: "/assets/project-card-photos/engineering/PrintedLens.png",
    projectTitle: "3D-printed lens adapter",
    projectDescription:
      "3D-printed disposable camera lens to sony e-mount adapter ",
    projectTags: ["Solidworks", "Prusa Splicer"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1mN-1Lkkowt1bzpOdLWnpcD-pWPsil-iG/view?usp=sharing",
  };

  const Research = {
    projectImg: "/assets/project-card-photos/engineering/PillDispenser.png",
    projectTitle: "Research Assistant Project",
    projectDescription:
      "Investigating Constitutive Equations for Low-Viscosity Polymer Solutions Rheology",
    projectTags: ["ML", "Python"],
    projectGitHub: "",
    projectLink: "",
  };

  // Scrolling Goober
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

  return (
    <>
      <div
        className="engineering-container topic content-center"
        id="engineering"
      >
        <div className="projects-container items-center content-center self-center">
          <div ref={targetRef} className="relative h-[300vh]">
            <section className="sticky top-0 flex h-screen items-center overflow-hidden  pt-12">
              <motion.div style={{ x }} className="flex gap-1">
                <div className="text-center mr-4 p-10">
                  <h1 className="title text-center">Engineering</h1>
                  <br />
                  <p>
                    I am a B.Eng. Mechanical Engineering Co-Op Student at
                    Concordia University.
                  </p>
                  <br />
                  <p>The brown puffle from Club Penguin is my spirit animal.</p>
                  <br />
                  <p>Bit of my engineering stuff:</p>
                </div>
                <ProjectsCard {...pillDispenser} />
                <ProjectsCard {...PrintedLens} />
                <ProjectsCard {...Research} />
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;
