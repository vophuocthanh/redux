import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handlers";
import { getNews } from "./newsSlice";
// watcher saga
export default function* newsSaga() {
  yield takeLatest(getNews.type, handleGetUser);
}
