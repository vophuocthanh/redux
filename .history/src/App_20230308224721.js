import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions:", globalOptions);
  return (
    <div>
      <Card></Card>
      <button>Toggle dark mode</button>
    </div>
  );
}

export default App;
