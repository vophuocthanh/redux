import React from "react";
import HackerNews from "./components/HackerNews";
// redux saga architecture
function App() {
  // const hits = useSelector((state) => state.news.hits);
  // console.log(" App ~ hits:", hits);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
