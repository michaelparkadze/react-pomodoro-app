import { useState } from "react";
import { useInterval } from "./hooks/useInterval";
import TaskList from "./containers/TaskList";
import Timer from "./containers/Timer";

function App() {
  const [time, setTime] = useState(1500000);
  const [selectedTime, setSelectedTime] = useState(1500000);
  const [started, setStarted] = useState(false);

  useInterval(() => setTime(time - 1000), started && time > 0 ? 1000 : null);

  const handleButtonClick = () => {
    setStarted(!started);
  };

  const handleResetTimer = () => {
    setStarted(false);
    setTime(1500000);
    setSelectedTime(1500000);
  };

  const handleIncrement = () => {
    setTime(selectedTime + 60000);
    setSelectedTime(selectedTime + 60000);
  };

  const handleDecrement = () => {
    if (time > 60000) {
      setSelectedTime(selectedTime - 60000);
      setTime(selectedTime - 60000);
    }
  };

  return (
    <div className="pomodoro">
      <div className="pomodoro__timer">
        {/* <Timer
          time={time}
          selectedTime={selectedTime}
          started={started}
          handleButtonClick={handleButtonClick}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleResetTimer={handleResetTimer}
        /> */}
      </div>
      <div className="pomodoro__tasks">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
