import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const globalOptions = useSelector((state) => state.global);
  console.log("App ~ globalOptions:", globalOptions);
  const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
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
    <div>
      <Card></Card>
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}

export default App;
