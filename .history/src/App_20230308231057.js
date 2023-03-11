import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions:", globalOptions);
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {};
  return (
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
