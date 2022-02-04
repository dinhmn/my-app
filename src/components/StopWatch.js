import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <div>Timer {count}s</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
