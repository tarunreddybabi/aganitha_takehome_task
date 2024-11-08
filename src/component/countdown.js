import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time >= 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer); 
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const stopTimer = () => {
    setIsRunning(false);
    setTime(0); 
  };

  return (
    <div>
      <h1>{time} seconds</h1>
      <div style={{display:"flex",gap:"10px"}}>
        
      <button  onClick={startTimer} >Start</button>
      <button  onClick={pauseTimer} >{isRunning?"Pause":"Play"}</button>
      <button  onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
