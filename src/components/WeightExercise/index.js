import React, { useState, useEffect } from 'react';

export default function WeightExercise(props) {
  // Destructure the props to extract the name and image
  const { name, img } = props.selectedWorkout;

  // State variables to keep track of the input values and exercise state
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [holdTime, setHoldTime] = useState(0);
  const [isLifting, setIsLifting] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [timer, setTimer] = useState(0);

    // code for handling form submission
  function handleSubmit(event) {
  event.preventDefault(); // don't let the form submit normally
    setIsLifting(true); // start lifting
    setTimer(3); // set countdown to 3 seconds
  }

  // code for handling changes in weight input
  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  // code for handling changes in reps input
  function handleRepsChange(event) {
    setReps(event.target.value);
  }

  // code for handling changes in hold time input
  function handleHoldTimeChange(event) {
   setHoldTime(event.target.value);
  }

  // countdown effects for lifting, holding, and breaking
  // lifting
  useEffect(() => {
    let timerId;
    if (isLifting && timer > 0) {
    timerId = setTimeout(() => {
    setTimer(timer - 1);
    }, 1000);
    } else if (isLifting && timer === 0) {
    setIsLifting(false);
    setIsHolding(true);
    setTimer(holdTime); // start holding for the specified hold time
    }
    return () => {
    clearTimeout(timerId);
    };
    }, [isLifting, holdTime, timer]);


    //holding
    useEffect(() => {
    let timerId;
    if (isHolding && timer > 0) {
    timerId = setTimeout(() => {
    setTimer(timer - 1);
    }, 1000);
    } else if (isHolding && timer === 0) {
    setIsHolding(false);
    setIsBreaking(true);
  }
  return () => {
  clearTimeout(timerId);
  };
  }, [isHolding, timer]);

//breaking
  useEffect(() => {
  let timerId;
  if (isBreaking && timer < 60) {
  timerId = setTimeout(() => {
  setTimer(timer + 1);
  }, 1000);
  } else if (isBreaking && timer === 60) {
  setIsBreaking(false);
  setReps(reps - 1); // increment the reps
  }
  return () => {
  clearTimeout(timerId);
  };
  }, [isBreaking, reps, timer]);

  // code for handling restart button click
  function handleRestartClick() {
    setIsBreaking(false);
    setReps(reps - 1); // increment the reps
    setTimer(0);
  }

 return (
  <div className="main">
    <h2>{name}</h2>
    <br/>
    <img src={isLifting ? img[1].name : isHolding ? img[0].name : img[2].name} alt={isLifting ? img[1].altText : isHolding ? img[0].altText : img[2].altText}  />
    <br/>
    <form className='list' onSubmit={handleSubmit}>
      <label>
        Weight:
        <input type="number" value={weight} onChange={handleWeightChange} />
      </label>
      <br />
      <label>
        Reps:
        <input type="number" value={reps} onChange={handleRepsChange} />
      </label>
      <br />
      <label>
        Hold time:
        <input type="number" value={holdTime} onChange={handleHoldTimeChange} />
      </label>
      <br />
      {!isLifting && !isHolding && !isBreaking && <button type="submit">Start exercise</button>}
      {isLifting && <p>Lifting in {timer}...</p>}
      {isHolding && <p>Hold for {timer}...</p>}
      {isBreaking && (
        <div>
          <p>Take a Break...</p>
          <button onClick={handleRestartClick}>Keep Going?</button>
        </div>
      )}
    </form>
      <button onClick={// reloads the page so that the main menu comes back]
        () => window.location.reload()}>
        Back
      </button>
    
    
  </div>
);

    }