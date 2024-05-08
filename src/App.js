import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import { ThemeContext } from "./context/theme.context";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <BrowserRouter>
            <Main theme={themes[theme]} setTheme={setTheme} />
          </BrowserRouter>
        </ThemeContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
