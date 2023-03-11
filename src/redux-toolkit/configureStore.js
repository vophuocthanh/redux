import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// tạo middleware
// My custom middleware to logger store state
// const loggerMiddleware = (store) => (next) => (action) => {
//   // your code here
//   console.log(action);
//   action.payload = 10;
//   delete action.payload;
//   next(action);
// };

// khi đi làm thường sử dụng redux-logger

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
// store.subscribe(() => {
//   // javascript observer pattern
//   console.log(`current state: ${store.getState().counter.count}`);
// });
// store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));
// sagaMiddleware.run(rootSaga);
export default store;
