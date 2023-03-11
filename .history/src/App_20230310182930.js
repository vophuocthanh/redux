import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// redux saga architecture
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch();
  }, [dispatch]);
  return <div></div>;
}

export default App;
