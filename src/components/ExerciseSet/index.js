import React, { useState } from 'react';

export default function ExerciseSet(props) {
  // Define the workouts state and filter out any workouts that are not of type 'duration', 'repetition', or 'weights'
    const [workouts] = useState(() => {
    const filteredWorkouts = props.workouts.filter((workout) => 
      workout.type === 'duration' || workout.type === 'repetition' || workout.type === 'weights'
    );
    return filteredWorkouts;
  });

  // Define the selectedWorkouts state as an empty array
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  // Define the handleAddWorkout function, which takes a workout as an argument and adds its name to the selectedWorkouts array
  function handleAddWorkout(workout) {
    setSelectedWorkouts((prevState) => [...prevState, workout.name]);
  }

  // Define the clearSelectedWorkouts function, which sets the selectedWorkouts state to an empty array
  function clearSelectedWorkouts() {
    setSelectedWorkouts([]);
  }

  // Return the JSX that makes up the ExerciseSet component
  return (
    <div>
      <h2>Make a customized set by selecting from the following workouts</h2>

      {/* Display the filtered workouts as a list of buttons */}
      <ul className='workout-list'>
        {workouts.map((workout) => (
          <li key={workout.name}>
            <button onClick={() => handleAddWorkout(workout)}>{workout.name}</button>
          </li>
        ))}
      </ul>

      {/* Display the selected workouts as an ordered list */}
      <h3>Selected Workouts:</h3>
      <ol className='list'>
        {selectedWorkouts.map((workout) => (
          <li key={workout}>{workout}</li>
        ))}
      </ol>

      {/* Display the 'Clear Selection' and 'Start Set' buttons if at least one workout has been selected */}
      {selectedWorkouts.length > 0 && (
        <>
          <button onClick={clearSelectedWorkouts}>Clear Selection</button>
          <button onClick={() => console.log("thanks for testing")}>Start Set</button>
        </>
      )}

      {/* Display the 'Back' button, which reloads the page when clicked */}
      <button onClick={() => window.location.reload()}>
        Back
      </button>
    </div>
  );
}


