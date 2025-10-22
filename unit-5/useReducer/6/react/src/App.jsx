import { useReducer, useState, useRef, useEffect } from "react";
import "./App.css";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("Dudu gimme those toys...");
  const audioRef = useRef(new Audio("/surfer_hawai.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    let t1, t2;
    if (isPlaying) {
      t1 = setTimeout(() => setText("I'll kill you dudu"), 40000);

      t2 = setTimeout(() => setText("Dudu gimme those toys..."), 52000);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: state.theme === "light" ? "white" : "black",
          transition: "background-color 0.9s ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className={isPlaying ? "slide" : ""}>
            <img src="/bubu.gif" alt="bubu" />
            <p style={{ color: state.theme === "light" ? "black" : "white" }}>
              {text}
            </p>
          </div>

          <div>
            <img src="/dudu.gif" alt="dudu" />
            <p style={{ color: state.theme === "light" ? "black" : "white" }}>
              No, these are mine...
            </p>
          </div>
        </div>

        <div>
          <button onClick={toggleMusic}>
            {isPlaying ? "⏸ Stop Music" : "▶ Play Music"}
          </button>
          <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
            Switch theme
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
