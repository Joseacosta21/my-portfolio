import React, { useEffect } from "react";

const FeedEmbed = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set script attributes
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = true;
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div
      className="elfsight-app-e5907692-913d-4edd-be71-68d7b2a02846"
      data-elfsight-app-lazy
    >
      {/* Your content goes here */}
    </div>
  );
};

export default FeedEmbed;
