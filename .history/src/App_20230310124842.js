import React, { useEffect } from "react";
import HackerNews from "./components/HackerNews";

function App() {
  // Generator function
  useEffect(() => {
    function* demoGenerator() {
      let id = 1;
      while (true) {
        yield id;
        id++;
      }
    }
    const gen = demoGenerator();
    // console.log(gen.next());
  }, []);
  return <div>{/* <HackerNews></HackerNews> */}</div>;
}

export default App;
