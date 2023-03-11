import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

export default store;
