import { useEffect, useState } from "react";
import ThemeBox from "./ThemeBox";

export default function ThemeApp() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeBox theme={theme} />
      <ThemeBox theme={theme} />
      <ThemeBox theme={theme} />
      
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch theme
      </button>
    </>
  );
}
