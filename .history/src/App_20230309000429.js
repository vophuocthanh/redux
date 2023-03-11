import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const globalOptions = useSelector((state) => state.global);
  // console.log("App ~ globalOptions:", globalOptions);
  // const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <Card></Card>
      <button onClick={() => setDarkMode(true)}>Toggle dark mode</button>
    </div>
  );
}

export default App;
