import { takeEvery, takeLatest } from "redux-saga/effects";
import handleGetNews from "./handlers";
import { getNews } from "./newsSlice";
// watcher saga
export default function* newsSaga() {
  yield takeEvery(getNews.type, handleGetNews);
}
