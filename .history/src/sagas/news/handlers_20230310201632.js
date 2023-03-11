import { call, put } from "redux-saga/effects";
import { setNews } from "./newsSlice";
import requestGetNews from "./requests";
// worker saga
export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetNews); // xử lí gọi thằng requests
    const { hits } = response.data;
    yield put(setNews(hits)); // sau khi trả evef thì se put
  } catch (error) {
    console.log(error);
  }
}
