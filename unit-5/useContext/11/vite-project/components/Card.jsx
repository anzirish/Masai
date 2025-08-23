import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Card() {
  const theme = useContext(ThemeContext);
  const duduHappyImg =
    "https://media.tenor.com/nyldlvA52xYAAAAj/dudu-dance.gif";
  const duduAngryImg =
    "https://media.tenor.com/XOtYEOucXZgAAAAj/dudu-happy-dancing.gif";
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid aqua",
          borderRadius: "12px",
          transition: "background-color 0.4s ease",
          padding: "50px",
          boxShadow: "2px 2px 6px rgba(0,0,0,0.5)",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        <img
          src={theme === "light" ? duduAngryImg : duduHappyImg}
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
    </>
  );
}
