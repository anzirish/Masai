import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddItems from "./components/AddItem";
import ListItems from "./components/ListItems";

function App() {
  return (
    <>
      <AddItems />
      <ListItems/>
    </>
  );
}

export default App;
