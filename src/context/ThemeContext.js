"use client"


import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const [toggleLimit, setToggleLimit] = useState(false);

  const toggle = () => {
    if (!toggleLimit) {
      setMode((prev) => (prev === "dark" ? "light" : "dark"));
      setToggleLimit(true);
      setTimeout(() => {
        setToggleLimit(false);
      }, 300); // Reset the toggle limit after 1 second
    }
  };  

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode} `}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
