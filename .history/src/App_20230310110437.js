import React, { useEffect } from "react";
import HackerNews from "./components/HackerNews";

function App() {
  // Generator function
  useEffect(() => {
    function* demoGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }
    demoGenerator();
  }, []);
  return <div>{/* <HackerNews></HackerNews> */}</div>;
}

export default App;
