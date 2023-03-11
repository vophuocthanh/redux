import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const globalOptions = useSelector((state) => state.global);
  // console.log("App ~ globalOptions:", globalOptions);
  // const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
  return (
    <div>
      <Card></Card>
      {/* <button onClick={handleToggleDarkMode}>Toggle dark mode</button> */}
    </div>
  );
}

export default App;
