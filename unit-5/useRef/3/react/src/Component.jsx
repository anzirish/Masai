import { useState } from "react";
import { useRef } from "react";

const Component = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "blue";
      setFocused(true);
    }
  };

  return (
    <>
      <input ref={inputRef} placeholder="Hiiiiiiiiiiiiiii"></input>
      <br />
      <p style={{ display: focused ? "block" : "none" }}>Focused!</p>
      <br />
      <button onClick={handleFocus}>Set Focus</button>
    </>
  );
};
export { Component };
