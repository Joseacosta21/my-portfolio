import React from "react";
import "./photo_filmmaking.css";
import FeedEmbed from "./feed-embed/feed-embed";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// TODO

// Add photography commisioned work

const PhotoFilmmaking = () => {
  const steelRack = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/SteelRack.jpg",
    projectTitle: "Steelrack",
    projectDescription: "Product photography for minimalist steel bike racks",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "public/assets/project-card-photos/photo-filmmaking/SteelRack.jpg",
  };
  const hoodClub = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/HoodClub.jpg",
    projectTitle: "Hoodclub",
    projectDescription: "Product photography for local clothing brand",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1GJ69SSPT035CO531c5k5eZJV5dbEQq7g?usp=share_link",
  };
  const djDuck = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/DJ_Duck.jpg",
    projectTitle: "DJ Duck",
    projectDescription: "Photoshoot for weddings and events DJ",
    projectTags: ["2022"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/drive/folders/1HhR8Oz4xhqtS8Bck6Qi2N0xjCnweIH_1?usp=sharing",
  };
  const solenDance = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/SolenDance.jpg",
    projectTitle: "Solen Dance",
    projectDescription: "Dancer photoshoot in downtown Montreal",
    projectTags: ["2023"],
    projectGitHub: "",
    projectLink: "TODO.com",
  };
  const santaUrsula = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/tvCamp.JPG",
    projectTitle: "Camp Santa Ursula",
    projectDescription:
      "Videographer/TV Camp for best-rated camp in Mexico; nominated for best staff member",
    projectTags: ["2023"],
    projectGitHub: "",
    projectLink:
      "https://drive.google.com/file/d/1AB1I1DSlFzxNEnzy1I6j-w7zHPGkuCuY/view?usp=sharing",
  };
  const stingers = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/Stingers.jpg",
    projectTitle: "The Concordian",
    projectDescription:
      "Photography contribution to The Concordian, university newspaper",
    projectTags: ["2024"],
    projectGitHub: "",
    projectLink:
      "https://theconcordian.com/2023/11/stingers-football-to-face-laval-rouge-et-or-in-rseq-playoff-semi-final/",
  };
  const laso = {
    projectImg: "/assets/project-card-photos/photo-filmmaking/LASO.jpg",
    projectTitle: "LASO",
    projectDescription: "Latin American Student Association, UDEM",
    projectTags: ["2024"],
    projectGitHub: "",
    projectLink: "TODO.com",
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <>
      <div
        className="photo-container topic relative h-[300vh]"
        id="photoFilmmaking"
        ref={targetRef}
      >
        <section className="sticky top-0 flex h-screen items-center overflow-hidden  pt-12">
          <motion.div style={{ x }} className="flex gap-1">
            <div class="text-center">
              <h1 className="title">Visual Media</h1>
              <br />
              <p>Me, my camera & my drone.</p>
              <br />
              <p>Commissioned work & collaborations:</p>
              <br />
            </div>
            <ProjectsCard {...steelRack} />
            <ProjectsCard {...hoodClub} />
            <ProjectsCard {...djDuck} />
            <ProjectsCard {...solenDance} />
            <ProjectsCard {...santaUrsula} />
            <ProjectsCard {...stingers} />
            <ProjectsCard {...laso} />
          </motion.div>
          <br />
          <p>Personal photography page: </p>
          <div id="insta-embed-container">
            <FeedEmbed />
          </div>
        </section>
      </div>
    </>
  );
};

export default PhotoFilmmaking;
