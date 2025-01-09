import React, { useEffect, useState } from "react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import "./music.css";

const Music = () => {
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
        <div className="projects-container">
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
          <ProjectsCard {...TimeoutMarket} />
          <ProjectsCard {...FanaBox} />
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
                  projectDescription={""} // No description for now
                  projectTags={[]} // No tags for now
                  projectGitHub={""} // Not used, leave blank
                  projectLink={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}`}
                />
              );
            })
          ) : (
            <p>Loading videos...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Music;
