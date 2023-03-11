import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const store = configureStore({
  reducer,
});
store.subscribe(() => {
  // javascript observer pattern
  console.log(`current state: ${store.getState().counter.count}`);
});
export default store;
