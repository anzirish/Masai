import {  useState } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Card />
      </ThemeContext.Provider>
      <button onClick={changeTheme}>
        {theme === "light"
          ? `Dudu don't like light theme`
          : `Dudu is happy. Irritate him`}
      </button>
    </>
  );
}
