import React, { useEffect } from "react";
import HackerNews from "./components/HackerNews";

function App() {
  // Generator function
  useEffect(() => {
    function* demoDenerator() {
      yield 1;
      yield 2;
    }
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
