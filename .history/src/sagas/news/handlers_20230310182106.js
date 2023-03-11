import { call } from "redux-saga/effects";
export default function* handleGetUser(action) {
  try {
    const response = yield call();
  } catch (error) {
    console.log(error);
  }
}
