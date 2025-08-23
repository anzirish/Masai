import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      ></div>
    </>
  );
};
