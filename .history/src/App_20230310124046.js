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
    const gen = demoGenerator();
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    console.log(gen.next());
    const gen2 = demoGenerator();
  }, []);
  return <div>{/* <HackerNews></HackerNews> */}</div>;
}

export default App;
