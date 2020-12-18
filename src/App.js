import React, { useState, useEffect } from "react";
import "./styles.css";
import { Test } from "./Test";
import { Shuffledarray } from "./Shuffledarray";

function App() {
  const [hilo, setHilo] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Test />
      <Shuffledarray />
      <h1> {hilo} </h1>
      <h1> The count is {count}</h1>
      <button
        onClick={() => {
          setHilo("Higher");
          setCount(count + 1);
        }}
      >
        Higher
      </button>
      <button
        onClick={() => {
          setHilo("Lower");
          setCount(count + 1);
        }}
      >
        Lower
      </button>
    </div>
  );
}

export default App;
