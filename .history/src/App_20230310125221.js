import React, { useEffect } from "react";
import HackerNews from "./components/HackerNews";

function App() {
  // Generator function
  useEffect(() => {
    function* demoGenerator() {
      console.log("running");
      let id = 1;
      while (true) {
        yield id;
        id++;
      }
    }
    const gen = demoGenerator();
    console.log(gen.next());
    console.log(gen.return(2));
  }, []);
  return <div>{/* <HackerNews></HackerNews> */}</div>;
}

export default App;
