import React from "react";
import { useTheme } from "../context/theme.context";

const MainPage = () => {
  const { theme, toggleTheme, themes } = useTheme();
  console.log(themes[theme]);

  return (
    <div
      style={{ backgroundColor: themes[theme].body, color: themes[theme].text }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Main Component</h1>
      <p>This is the main component using the theme.</p>
    </div>
  );
};

export default MainPage;
