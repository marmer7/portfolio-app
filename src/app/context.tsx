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

  // Set initial theme from local storage
  React.useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  // Save theme to local storage when it changes
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, setDarkMode, isMobile, setIsMobile }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
