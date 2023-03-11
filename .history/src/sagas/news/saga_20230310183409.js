import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";

export default function* newsSaga() {
  yield takeLatest(getNews.type, fetchUser);
}
