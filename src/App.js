import React, { useState } from "react";

// components
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import WeightExercise from "./components/WeightExercise"
import ExerciseSet from "./components/ExerciseSet"

// images
import runningImage from "./images/running_duration.png"
import pushupsImage from "./images/repetition_pushups.png"
import planksImage from "./images/planks_duration.png"
import holdPose from "./images/weight_holdPose.png"
import liftPose from "./images/weight_liftPose.png"
import breakPose from "./images/weight_breakPose.png"

import "./App.css"

function App() {
  // create the state for the selected workout
  // it's null because nothing is in there at the moment
  const [selectedWorkout, setSelectedWorkout] = useState(null);

 const workouts = [
  {
    name: "Push-ups",
    type: "repetition",
    img: [{ name: pushupsImage, altText: "person doing push-ups" }]
  },
  {
    name: "Running",
    type: "duration",
    img: [{ name: runningImage, altText: "person running" }]
  },
  {
    name: "Planks",
    type: "duration",
    img: [{ name: planksImage, altText: "person doing planks" }]
  },
  {
    name: "Weight-Lifting",
    type: "weights",
    img: [
      { name: holdPose, altText: "person hplding weights" },
      { name: liftPose, altText: "person lifting weights" },
      { name: breakPose, altText: "person taking a break" }
    ]
  },
];
  // makes it so the value in selectedWorkout is based on what object is clicked
  function handleWorkoutClick(workout) {
    setSelectedWorkout(workout)
  }
  // changes what gets rendered on the page
  function renderWorkout() {
      if (selectedWorkout) { // if the button is pressed, based on the type a component will be rendered
        if (selectedWorkout.type === "duration") {
          return <DurationExercise name={selectedWorkout.name} img={selectedWorkout.img} />
      } else if(selectedWorkout.type === "repetition") {
          return <RepetitionExercise name={selectedWorkout.name}  img={selectedWorkout.img} />
      } else if(selectedWorkout.type === "weights") {
         return <WeightExercise selectedWorkout={selectedWorkout} />;
      }
      } 
      else { // this is just the default main menu if nothing is pressed
        return ( 
              <div className="content">
              <h1>Workouts</h1>
              <h2>Please Choose an exercise</h2>
              <ul className="workout-list">
                {workouts.map((workout) => (
                <li key={workout.name}>
                  <button onClick={() => handleWorkoutClick(workout)}
                    className={`Button-${workout.name}`}>{workout.name}</button>
                </li>
              ))}
              </ul>
            </div>
              )
          }
        }
     
  return (
    <div className="main">
      
          {// returns the renderworkout function to be placed in content
          renderWorkout()}
     
    </div>
  );
}

export default App;





