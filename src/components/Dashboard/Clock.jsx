import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useEffect, useState } from "react";
export default function Clock() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0); // in seconds
  const [remainingTime, setRemainingTime] = useState(null);
  useEffect(() => {
    if (remainingTime === 0) {
      // console.log("Time is up!");
      setRemainingTime(null);
      setIsPlaying(false);
      setDuration((duration) => duration + 5);
    }
  }, [remainingTime]);
  const decreaseSecond = () => {
    if (remainingTime >= 1) {
      setDuration(remainingTime - 1);
    }
  };
  const increaseSecond = () => {
    setDuration(remainingTime + 1);
  };
  const increaseMinute = () => {
    setDuration(remainingTime + 60);
  };
  const decreaseMinute = () => {
    if (remainingTime > 60) {
      setDuration(remainingTime - 60);
    } else {
      setDuration(0);
    }
  };
  const increaseHour = () => {
    setDuration(remainingTime + 3600);
  };
  const decreaseHour = () => {
    if (remainingTime > 3600) {
      setDuration(remainingTime - 3600);
    } else {
      setDuration(0);
    }
  };
  return (
    <div>
      <h1>Clock</h1>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={duration}
        colors={["#004777"]}
      >
        {({ remainingTime }) => {
          setRemainingTime(remainingTime);
          return remainingTime;
        }}
      </CountdownCircleTimer>
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Start</button>
      )}

      <button disabled={isPlaying} onClick={decreaseSecond}>
        -1 second
      </button>
      <button disabled={isPlaying} onClick={increaseSecond}>
        +1 second
      </button>
      <button disabled={isPlaying} onClick={increaseMinute}>
        +1 minute
      </button>
      <button disabled={isPlaying} onClick={decreaseMinute}>
        -1 minute
      </button>
      <button disabled={isPlaying} onClick={increaseHour}>
        +1 hour
      </button>
      <button disabled={isPlaying} onClick={decreaseHour}>
        -1 hour
      </button>
    </div>
  );
}