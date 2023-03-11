import { takeLatest } from "redux-saga/effects";

export default function* newsSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
