import React, { useState } from "react";

export const DarkMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div style={isDarkMode ? { backgroundColor: "#333", color: "white" } : {}}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        DARK/LIGHT
      </button>
      {children}
    </div>
  );
};
