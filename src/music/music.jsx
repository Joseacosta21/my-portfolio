import React, { useEffect, useState, useRef } from "react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./music.css";
import { useDragScroll } from "../utils/useDragScroll";
import {
  checkMobile,
  createMobileScrollFunction,
  useScrollProgress,
} from "../utils/mobileUtils";

const Music = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Initialize drag scroll functionality
  useDragScroll(scrollContainerRef, true);

  // Get scroll progress for mobile progress bar
  const scrollProgress = useScrollProgress(scrollContainerRef);

  // Detect mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      window.addEventListener("resize", updateScrollButtons);

      // Update scroll buttons after content has loaded
      const updateAfterLoad = () => setTimeout(updateScrollButtons, 100);
      window.addEventListener("load", updateAfterLoad);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
        window.removeEventListener("load", updateAfterLoad);
      };
    }
  }, []);

  const scroll = createMobileScrollFunction(scrollContainerRef, isMobile);

  const TimeoutMarket = {
    projectImg: "/assets/project-card-photos/music/Timeout.PNG",
    projectTitle: "TimeOut Market Montreal",
    projectDescription: "Resident DJ @ TimeOut Market Bar, Montreal",
    projectTags: "",
    projectGitHub: "",
    projectLink: "",
  };
  const FanaBox = {
    projectImg: "/assets/project-card-photos/music/FanaBox.JPG",
    projectTitle: "FanaBox GP",
    projectDescription: "DJ @ FanaBox GP F1 Store, 2023 Montreal GP weekend",
    projectTags: "",
    projectGitHub: "",
    projectLink: "",
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

  // API key goober
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  // Playlist ID
  const playlistId = "PL-JzMZN0fZdHMxgSf7JJpmp4JSLE2IojS";
  const [videos, setVideos] = useState([]);

  // Fetch YouTube Playlist videos
  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.items) {
          setVideos(data.items);
        } else {
          console.error("Error fetching playlist data:", data);
        }
      } catch (error) {
        console.error("Error fetching data from YouTube API:", error);
      }
    };

    fetchPlaylistVideos();
  }, [apiKey, playlistId]);

  return (
    <>
      <div className="music-container" id="music">
        {/* Mobile Text Container - appears above scroll area on mobile only */}
        <div className="mobile-text-container">
          <h1 className="title">Music</h1>
          <p>Matching BPMs and heart rates</p>
        </div>

        <div className="projects-wrapper">
          <button
            className={`scroll-button scroll-button--dark ${
              isMobile ? "scroll-button--mobile" : ""
            } left ${!canScrollLeft ? "hidden" : ""}`}
            onClick={() => scroll("left")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <div className="projects-container" ref={scrollContainerRef}>
            {/* Text */}
            <div className="text-container">
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

            {/* Project Cards */}
            <ProjectsCard {...TimeoutMarket} animationDelay={0} />
            <ProjectsCard {...FanaBox} animationDelay={100} />
            {/*<ProjectsCard {...EnjoytheSilence} />*/}
            {/* YouTube Videos */}
            {videos.length > 0 ? (
              videos.map((video, index) => {
                const snippet = video.snippet;
                return (
                  <ProjectsCard
                    key={index}
                    projectImg={snippet.thumbnails.maxres.url}
                    projectTitle={snippet.title}
                    projectDescription={"Full DJ Set on Youtube"} // No description for now
                    projectTags={[]} // No tags for now
                    projectGitHub={""} // Not used, leave blank
                    projectLink={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
                    animationDelay={200 + index * 100} // Staggered delay for dynamic videos
                  />
                );
              })
            ) : (
              <p>Loading videos...</p>
            )}
          </div>
          <button
            className={`scroll-button scroll-button--dark ${
              isMobile ? "scroll-button--mobile" : ""
            } right ${!canScrollRight ? "hidden" : ""}`}
            onClick={() => scroll("right")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
          {/* Mobile scroll progress bar */}
          {isMobile && (
            <div
              className="scroll-progress scroll-progress--dark"
              style={{ width: `${scrollProgress}%` }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Music;
