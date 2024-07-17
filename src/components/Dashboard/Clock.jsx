/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import downArrow from "../../assets/downArrow.png";
import upArrow from "../../assets/upArrow.png";

const Clock = () => {
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null);

  const timerProps = {
    strokeWidth: 6,
    colors: "#FF6A6A",
    size: 100,
  };

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);

  const increaseDuration = (increment) => {
    setDuration((prevDuration) => prevDuration + increment);
  };

  const decreaseDuration = (decrement) => {
    if (remainingTime > decrement)
      setDuration((prevDuration) => prevDuration - decrement);
  };

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return (
      <div className="flex flex-col items-center text-white">
        <div className="text-lg">
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    );
  };

  return (
    <div className="absolute bg-[#1E2343] rounded-2xl w-7/12 flex justify-around p-2">
      <div>
        <CountdownCircleTimer
          {...timerProps}
          key={key}
          isPlaying={isPlaying}
          duration={duration}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {remainingTime && children}
        </CountdownCircleTimer>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <button
          className="cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <p className="text-white hover:underline decoration-[#FF6A6A]">{isPlaying ? "Pause" : "Start"}</p>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => setKey((prevKey) => prevKey + 1)}
        >
          <p className="text-white hover:underline decoration-[#FF6A6A]">Restart</p>
        </button>
        <button
          className="cursor-pointer hover:underline decoration-[#FF6A6A]"
          onClick={() => {
            setDuration(0);
            setRemainingTime(duration);
            setIsPlaying(false);
            setKey(0);
          }}
        >
          <p className="text-white">Reset</p>
        </button>
      </div>
      <div className="flex items-center">
        {[
          {
            label: "Hours",
            value: Math.floor(duration / 3600),
            increment: 3600,
            decrement: 3600,
          },
          {
            label: "Minutes",
            value: Math.floor((duration % 3600) / 60),
            increment: 60,
            decrement: 60,
          },
          {
            label: "Seconds",
            value: duration % 60,
            increment: 1,
            decrement: 1,
          },
        ].map(({ label, value, increment, decrement }) => (
          <div key={label} className="flex flex-col space-y-3 items-center">
            <p className="mr-7">{label}</p>
            <button
              className="cursor-pointer"
              onClick={() => increaseDuration(increment)}
            >
              <img src={upArrow} alt="upArrow" className="h-2 mr-6"/>
            </button>
            <span className="text-white text-sm mr-6">{value}</span>
            <button
              className="cursor-pointer"
              onClick={() => decreaseDuration(decrement)}
            >
              <img src={downArrow} alt="downArrow" className="h-2 mr-6"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock;
