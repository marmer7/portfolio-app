"use client";

import { useEffect } from "react";
import { useTheme } from "../context";

const SubstackFeed = (): JSX.Element => {
  const { isMobile } = useTheme();

  useEffect(() => {
    (window as any).SubstackFeedWidget = {
      substackUrl: "https://dinnerpartyai.com",
      posts: 3,
      hidden: ["premium", "date", ...(isMobile ? ["image", "subtitle"] : [])],
    };

    // Create a new script element
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://substackapi.com/embeds/feed.js";
    scriptElem.async = true;
    scriptElem.id = "substack-script";

    // Append the script element to the document body
    document.body.appendChild(scriptElem);

    // Clean up function
    return () => {
      // Remove script element by id
      const existingScriptElem = document.getElementById("substack-script");
      if (existingScriptElem) {
        document.body.removeChild(existingScriptElem);
      }
    };
  }, [isMobile]); // Run when the component is mounted and whenever isMobile changes

  return <div id="substack-feed-embed" className="text-left" />;
};

export default SubstackFeed;
