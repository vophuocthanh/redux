import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "./sagas/news/newsSlice";
// redux saga architecture
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return <div></div>;
}

export default App;
