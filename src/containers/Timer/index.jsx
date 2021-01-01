import { useEffect } from "react";

export default function Timer(props) {
  const {
    time,
    selectedTime,
    started,
    handleButtonClick,
    handleDecrement,
    handleIncrement,
    handleResetTimer,
  } = props;

  useEffect(() => {
    document.title = timer;
  }, [time]);

  let minutes = Math.floor(time / 60000);
  let seconds = ((time % 60000) / 1000).toFixed(0);
  let timer = `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
  return (
    <>
      {timer}
      <div className="pomodoro__timer__controls">
        <div className="pomodoro__timer__controls__set-time">
          <input type="number" value={selectedTime / 60000} disabled />
        </div>
        <div className="pomodoro__timer__controls__increment">
          <button onClick={handleIncrement} disabled={started}>
            +
          </button>
        </div>
        <div className="pomodoro__timer__controls__decrement">
          <button onClick={handleDecrement} disabled={time < 60000 || started}>
            -
          </button>
        </div>
        <div className="pomodoro__timer__controls__toggle">
          <button onClick={handleButtonClick} disabled={time === 0}>
            {started && time > 0 ? "Stop" : "Start"}
          </button>
        </div>
        <div className="pomodoro__timer__controls__reset">
          <button onClick={handleResetTimer}>Reset</button>
        </div>
      </div>
    </>
  );
}
