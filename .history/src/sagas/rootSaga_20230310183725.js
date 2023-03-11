import { all } from "axios";
import { fork } from "redux-saga/effects";
import newsSaga from "./news/saga";

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
