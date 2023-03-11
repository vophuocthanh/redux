import { configureStore, combineStore } from "@reduxjs/toolkit";
import newsSlice from "./news/newsSlice";

const reducer = combineStore({
  news: newsSlice,
});

export default reducer;
