import "./App.css";
import { useTimer } from "./useTimer";

function App() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer(15);

  return (
    <>
      {isRunning ? (
        <>
          <img
            src="https://media.tenor.com/vuWWt6dEWowAAAAj/bubududu-sleep.gif"
            alt=""
          />
          <p>Dudu taking nap after a long time ...</p>
        </>
      ) : (
        <>
          <img
            src="https://media.tenor.com/6BRKr2vbe54AAAAM/dudu-bubu.gif"
            alt=""
          />
          <p>Dudu is exhausted start the timer to let him take a nap ...</p>
          
        </>
      )}
      <p>Current timer is : {timer} sec</p>
      <button onClick={startTimer}>Start timer</button>
      <button onClick={stopTimer}>Stop timer</button>
      <button onClick={resetTimer}>REset timer</button>
    </>
  );
}

export default App;
