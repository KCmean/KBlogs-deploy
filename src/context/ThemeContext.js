"use client";

import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return(
    <ThemeContext.Provider value={{ mode, toggleMode }}>
    <div className={`theme ${mode}`}>{children}</div>
  </ThemeContext.Provider>
  );

};
