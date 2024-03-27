import { useState } from "react";
export default function RepetitionExercise(props) {

  const {name, img} = props
  const [count, setCount] = useState(0);
  // setCount goes up one
  function goCount(){
    setCount((number) => number + 1)
   }
  // initilizes setCount to zero
  function resetCount(){
      setCount(0)
   }
  return (
    <div className="main">
      <h2>{name}</h2>
      <img src={img[0].name} alt={img[0].altText}></img>
      <p>{ // makes the count start at 00, turns the count to a string and pads the string with a zero unitl it hits a certain amount with 2 being the target length
          count.toString().padStart(2, "0")}</p>
      <div className="options">
      <button onClick={goCount}>+</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={// reloads the page so that the main menu comes back]
        () => window.location.reload()}>
        Back
      </button>
      </div>

    </div>
  );
}