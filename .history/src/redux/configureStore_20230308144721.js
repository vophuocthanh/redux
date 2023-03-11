import { createStore, combineReducers } from "redux";
import counterReducer from "./counter";

const reducer = combineReducers({
  // key: value
  counter: counterReducer,
});
