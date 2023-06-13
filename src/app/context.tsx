"use client";

import React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) => {},
  isMobile: false,
  setIsMobile: (isMobile: boolean) => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Listen for window resize events
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setDarkMode, isMobile, setIsMobile }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
