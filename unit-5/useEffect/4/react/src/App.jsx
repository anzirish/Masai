import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(10);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCurrentTime((prev) => prev + 1);

      setElapsedTime((prev) => {
        let newTime = prev - 1;
        if (newTime <= 0) {
          setRunning(false);
          return 0;
        }
        if (newTime == 2) {
          // peak audio length is 2
          const audio = new Audio("/plasma_gun_shot.mp3"); // file in public/
          audio.play();
        }
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setRunning(true);
  };
  const stopTimer = () => {
    setRunning(false);
  };

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Enter seconds"
          value={input}
          onChange={(e) => {
            stopTimer();
            setInput(e.target.value);
            setCurrentTime(0);
            setElapsedTime(e.target.value);
          }}
          style={{ marginInline: "50px", padding: "5px" }}
        ></input>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <p>Current time : {currentTime}</p>
        <p>Elapsed Time : {elapsedTime}</p>
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button disabled={isRunning || Number(elapsedTime) == 0} onClick={startTimer}>
          Start
        </button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </>
  );
}

export default App;
