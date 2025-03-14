import React, { useState, useEffect } from 'react';
import ClockDisplay from './thecomponent/component2';
import ClockControls from './thecomponent/component1';
import './app.css';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(false);
  const [is12Hour, setIs12Hour] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handle12Hour = () => setIs12Hour(true);
  const handle24Hour = () => setIs12Hour(false);

  return (
    <div>
      <ClockDisplay time={time} is12Hour={is12Hour} />
      <ClockControls
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        on12Hour={handle12Hour}
        on24Hour={handle24Hour}
      />
    </div>
  );
};

export default LiveClock;