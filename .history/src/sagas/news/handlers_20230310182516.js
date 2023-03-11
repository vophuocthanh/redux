import { call, put } from "redux-saga/effects";
import { setNews } from "./newsSlice";
import requestGetNews from "./requests";
export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetNews);
    const { hits } = response.data;
    yield put(setNews);
  } catch (error) {
    console.log(error);
  }
}
