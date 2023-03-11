import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App({ ...props }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Counter></Counter>
    </div>
  );
}

export default App;
