import { useState, useEffect } from "react";
import { useInterval } from "./hooks/useInterval";

function App() {
  const [time, setTime] = useState(1500000);
  const [started, setStarted] = useState(false);

  useInterval(() => setTime(time - 1000), started ? 1000 : null);

  const handleButtonClick = () => {
    setStarted(!started);
  };

  const handleResetTimer = () => {
    setStarted(false);
    setTime(1500000);
  };

  const Timer = () => {
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    return (
      <>
        {minutes < 10 ? <span>0{minutes}</span> : <span>{minutes}</span>}:
        {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
      </>
    );
  };

  const handleIncrement = () => {
    setTime(time + 60000);
  };

  const handleDecrement = () => {
    setTime(time - 60000);
  };

  return (
    <div className="pomodoro">
      <div className="pomodoro__timer">
        <Timer />
      </div>
      <input
        type="number"
        value={Math.floor(time / 60000)}
        disabled
        // onChange={(e) => setTime(e.target.value * 60000)}
      />
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleButtonClick}>{started ? "Stop" : "Start"}</button>
      <button onClick={handleResetTimer}>Reset</button>
    </div>
  );
}

export default App;
