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
  const [isDarkMode, setDarkMode] = React.useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });
  const [isMobile, setIsMobile] = React.useState(false);

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
