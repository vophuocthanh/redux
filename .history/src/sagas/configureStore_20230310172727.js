import { configureStore, combineStore } from "@reduxjs/toolkit";

const reducer = combineStore({});

const store = configureStore({
  reducer,
});
