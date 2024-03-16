import React from "react";
import "./design.css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Design = () => {
  // Project Cards
  const theMeatSweats = {
    projectImg: "src/assets/project-card-photos/design/The Meat Sweats.jpg",
    projectTitle: "The Meat sweats",
    projectDescription: "They really are a thing.",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/The Meat Sweats.jpg",
    fitType: "contain",
  };
  const academicWeapon = {
    projectImg: "src/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    projectTitle: "Absolute Academic Weapon",
    projectDescription: "Absolute. Academic. Weapon. ",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink:
      "src/assets/project-card-photos/design/Academic Weapon 1.1.jpg",
    fitType: "contain",
  };
  const artekPatch = {
    projectImg: "src/assets/project-card-photos/design/Artek Patch V2.0.png",
    projectTitle: "Artek Patch",
    projectDescription: "Artek summer camp style patch/sticker design",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/Artek Patch V2.0.png",
    fitType: "contain",
  };
  const badIdeasGoodTimes = {
    projectImg: "src/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    projectTitle: "Bad Ideas, Good Times",
    projectDescription: "Right?",
    projectTags: ["Gimp"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/BadIdeasGoodTimes.jpg",
    fitType: "contain",
  };
  const peanutsJoe = {
    projectImg: "src/assets/project-card-photos/design/PeanutsJoe.jpg",
    projectTitle: "Peanuts Self-portrait",
    projectDescription: "",
    projectTags: ["Procreate"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/PeanutsJoe.jpg",
  };
  const phoneStand = {
    projectImg: "src/assets/project-card-photos/design/PhoneStand.jpg",
    projectTitle: "Phone Stand",
    projectDescription: "Industrial design sketch for phone stand",
    projectTags: ["Procreate"],
    projectGitHub: "",
    projectLink: "src/assets/project-card-photos/design/PhoneStand.jpg",
    fitType: "contain",
  };

  // Scroll goober
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <>
      <div
        className="design-container topic relative h-[300vh]"
        id="design"
        ref={targetRef}
      >
        <section className="sticky top-0 flex h-screen items-center overflow-hidden pt-12">
          <motion.div style={{ x }} className="flex gap-1">
            <div class="text-center self-center mb-[117px]">
              <h1>Design</h1>
              <p>
                Several designs ive made with Gimp and Procreate for fun, gifts
                for friends, and comissions.
              </p>
            </div>
            <ProjectsCard {...theMeatSweats} />
            <ProjectsCard {...academicWeapon} />
            <ProjectsCard {...artekPatch} />
            <ProjectsCard {...badIdeasGoodTimes} />
            <ProjectsCard {...peanutsJoe} />
            <ProjectsCard {...phoneStand} />
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Design;
