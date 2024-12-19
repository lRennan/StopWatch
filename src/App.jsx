// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0); // Tempo total em milissegundos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10); // Incrementa 10ms a cada intervalo
      }, 10); // Intervalo de 10ms
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${milliseconds < 100 ? "0" : ""}${milliseconds < 10 ? "0" : ""}${milliseconds}`;
  };

  return (
    <div className="container">
      <div className="timer">
        <h1>{formatTime(time)}</h1>
        <div className="buttons">
          <button className="btn" onClick={toggleTimer}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="btn" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
