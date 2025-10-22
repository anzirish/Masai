import { useState, useRef } from "react";

export function useTimer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); 

  const startTimer = () => {
    if (isRunning) return; 
    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer(); 
    setTimer(0);
  };

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
}
