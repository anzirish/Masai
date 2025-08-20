import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App({
  name = "Tanishq",
  age,
  bio = "Tanishq D is a passionate software engineer who thrives on building creative and impactful solutions. With a deep love for nature and a curious mind, he blends logic with imagination in everything he does. His journey is fueled by learning, growth, and meaningful connections, with  as his closest companion.",
}) {
  return <ProfileCard name={name} age={age} bio={bio} />;
}

export default App;