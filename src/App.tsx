import "./App.css";
import { PomodoroTimer } from "./components/Pomodoro/PomodoroTimer";

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <h1>Pomodoro</h1>
        <PomodoroTimer
          time={1500}
          shortRestTime={300}
          longRestTime={500}
          cycles={4}
        />
      </div>
    </>
  );
}

export default App;
