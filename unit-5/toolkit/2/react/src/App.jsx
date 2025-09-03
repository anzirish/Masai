import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { ListTask } from "./components/ListTask";

function App() {

  return (
    <>
      <AddTask />
      <ListTask />
    </>
  );
}

export default App;
