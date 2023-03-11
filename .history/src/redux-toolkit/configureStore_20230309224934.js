import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
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
store.dispatch(incrementByValue(1));
export default store;
