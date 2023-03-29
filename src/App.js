import { ThemeProvider } from "@mui/system";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./core/theme";
import HomePage from "./pages/homePage";

export default function App() {
  const [themeMode, setThemeMode] = React.useState("light");

  function handleThemeChange(e) {
    if (e.target.value === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                themeMode={themeMode}
                onChangeTheme={handleThemeChange}
              />
            }
          ></Route>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
