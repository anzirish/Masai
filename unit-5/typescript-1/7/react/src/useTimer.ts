import { useEffect, useRef, useState } from "react";
type IntervalRef = ReturnType<typeof setInterval> | null;
export const useTimer = (Intialduration: number = 0) => {
  const [timer, setTimer] = useState<number>(Intialduration);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<IntervalRef>(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  };

  useEffect(() => {
    if (timer === 0) {
     resetTimer()
    }
  }, [timer]);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(Intialduration);
  };

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};
