// import React, { createContext, useState } from "react";
// import { themes } from "../theme/theme";

// const ThemeContext = createContext(undefined);
// const ThemeDispatchContext = createContext(undefined);

// function ThemeProvider({ children }) {
//   const getTheme = localStorage.getItem("theme") || "dark";

//   const [theme, setTheme] = useState({
//     value: themes[getTheme],
//   });

//   return (
//     <ThemeContext.Provider value={theme}>
//       <ThemeDispatchContext.Provider value={setTheme}>
//         {children}
//       </ThemeDispatchContext.Provider>
//     </ThemeContext.Provider>
//   );
// }
// export { ThemeProvider, ThemeContext, ThemeDispatchContext };

import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const lightTheme = {
  name: "light",
  body: "#FFFFFF",
  text: "#343434",
  dark: "#000000",
  secondaryText: "#7F8DAA",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#DCE4F2",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#dce4f2",
  imageClothes: "#dce4f2",
  avatarMisc: "#e9ecf2",
  avatarShoes: "#ccd2e3",
};

const darkTheme = {
  name: "dark",
  body: "#1D1D1D",
  text: "#FFFFFF",
  dark: "#000000",
  secondaryText: "#8D8D8D",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#292A2D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#292A2D",
  imageClothes: "#000000",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
};

const themes = { light: lightTheme, dark: darkTheme };

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  console.log(theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme, ThemeContext };
