import React from 'react'
import { useRef, useState } from 'react';


export default function DurationExercise(props) {
  const {name, img} = props
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)
  // mutable value that persists through component renders
  // available across all these functions and can be used to clear the interval at the appropriate time.
  
  // starts the timer if it's not already running
  // starts a new interval every 10 milliseconds that updates the timer by adding 10 to the previous time
  function startTimer() {
    if (!running) { 
      intervalRef.current = setInterval(function() {
        setTime(function(prevTime) {
          return prevTime + 10
        })
      }, 10)
      setRunning(true)
    }
  }

  // stops the timer by clearing the interval and setting the running to false
  function stopTimer() {
    clearInterval(intervalRef.current)
    setRunning(false)
  }
  // stops the timer and resets the timer to 0 
  function resetTimer() {
    clearInterval(intervalRef.current)
    setTime(0)
    setRunning(false)
  }
  
  // makes it so the time appears hh:mm:ss.sss
  function formatTime(time) {
    const date = new Date(time)
    return date.toISOString().substring(11, 23)
  }
  return (
    <div className="main">
      <h2>{name}</h2>
    <img src={img[0].name} alt={img[0].altText}></img>
      <p>{formatTime(time)}</p>
      <div className='options'>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
       <button onClick={// reloads the page back to the main menu
        () => window.location.reload()}>Back
      </button>
      </div>
    </div>
  );
}
