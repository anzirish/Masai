import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialState = { isVisible: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_VISIBLITY":
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p style={{ display: state.isVisible ? "block" : "none" }}>
        Hello World!
      </p>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBLITY" })}>
        Toggle Message
      </button>
    </>
  );
}

export default App;
