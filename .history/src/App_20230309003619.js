import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions:", globalOptions);
  // const dispatch = useDispatch();
  // const [darkMode, setDarkMode] = useDarkMode();
  // useEffect(() => {
  //   dispatch(toggleDarkMode(darkMode));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const handleToggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   dispatch(toggleDarkMode(!darkMode));
  // };
  return (
    <div>
      <Card></Card>
      <Counter></Counter>
      <SwitchDarkMode></SwitchDarkMode>
    </div>
  );
}

function SwitchDarkMode() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <button
      className="p-4 m-3 rounded bg-cyan-300"
      onClick={handleToggleDarkMode}
    >
      Toggle dark mode
    </button>
  );
}

export default App;
