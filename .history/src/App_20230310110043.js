import React, { useEffect } from "react";
import HackerNews from "./components/HackerNews";

function App() {
  // Generator function
  useEffect(() => {
    function* demoDenerator() {}
  }, []);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
