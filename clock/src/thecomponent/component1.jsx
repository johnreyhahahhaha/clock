import React from 'react';

const ClockControls = ({ isRunning, onStart, onStop, on12Hour, on24Hour }) => {
  return (
    <div>
      <button onClick={onStart} disabled={isRunning}>Start</button>
      <button onClick={onStop} disabled={!isRunning}>Stop</button>
      <button onClick={on12Hour}>12-hour</button>
      <button onClick={on24Hour}>24-hour</button>
    </div>
  );
};

export default ClockControls;