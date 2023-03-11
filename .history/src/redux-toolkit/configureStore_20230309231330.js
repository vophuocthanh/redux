import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// tạo middleware
// My custom middleware to logger store state
const loggerMiddleware = (store) => (next) => (action) => {
  // your code here
  console.log(action);
  action.payload = 10;
  delete action.payload;
  next(action);
};

// khi đi làm thường sử dụng redux-logger

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(loggerMiddleware),
});
store.subscribe(() => {
  // javascript observer pattern
  console.log(`current state: ${store.getState().counter.count}`);
});
store.dispatch(incrementByValue(1));
store.dispatch(incrementByValue(3));
store.dispatch(incrementByValue(5));
export default store;
