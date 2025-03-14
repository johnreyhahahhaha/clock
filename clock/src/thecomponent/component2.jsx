import React from 'react';

const ClockDisplay = ({ time, is12Hour }) => {
  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: is12Hour ? 'numeric' : '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return <h1>{formattedTime}</h1>;
};

export default ClockDisplay;