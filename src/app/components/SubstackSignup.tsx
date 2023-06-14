"use client";

import { useEffect } from "react";
import { useTheme } from "../context";

const SubstackSignup = (): JSX.Element => {
  const { isMobile } = useTheme();

  useEffect(() => {
    (window as any).CustomSubstackWidget = {
      substackUrl: "https://dinnerpartyai.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "green",
    };

    // Create a new script element
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://substackapi.com/widget.js";
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
  });

  return <div id="custom-substack-embed" />;
};

export default SubstackSignup;
