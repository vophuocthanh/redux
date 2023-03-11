import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const { count } = useSelector((state) => state.couter.count);
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Counter count={count}></Counter>
    </div>
  );
}

export default App;
