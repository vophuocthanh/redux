import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducer from "./reducers";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  // gDm là getDefualtMiddleware
  // middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
  middleware: (gDM) => gDM().concat(logger),
});
// sagaMiddleware.run(rootSaga); // dùng hàm run để chạy redux saga

export default store;
