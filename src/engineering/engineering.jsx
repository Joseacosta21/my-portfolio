import React from "react";
import "./engineering.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Engineering = () => {
  // Project Cards
  const pillDispenser = {
    projectImg: "src/assets/project-card-photos/engineering/PillDispenser.png",
    projectTitle: "Automatic pill dispenser",
    projectDescription: "3D-printed pill dispenser",
    projectTags: ["Arduino", "Solidworks", "Prusa Splicer"],
    projectGitHub: "https://github.com/Joseacosta21/casinoStic",
    projectLink:
      "https://drive.google.com/file/d/1mN-1Lkkowt1bzpOdLWnpcD-pWPsil-iG/view?usp=sharing",
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
        className="engineering-container topic relative h-[300vh]"
        id="engineering"
        ref={targetRef}
      >
        <section className="sticky top-0 flex justify-center h-screen items-center overflow-hidden  pt-12">
          <motion.div style={{ x }} className="flex gap-1">
            <div className="text-center mr-4 p-10">
              <h1 className="title text-center">Engineering</h1>
              <br />
              <p>
                Currently studying B.Eng. Mechanical Engineering at Concordia
                University.
              </p>
              <br />
              <p>The brown puffle from Club Penguin is my spirit animal.</p>
              <br />
              <p>Some engineering projects ive made:</p>
            </div>
            <ProjectsCard {...pillDispenser} />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Engineering;
