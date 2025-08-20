import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProfileCard from "./ProfileCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App age={20} />
  </StrictMode>
);
