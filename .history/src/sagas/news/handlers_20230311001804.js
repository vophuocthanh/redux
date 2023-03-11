import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";
// worker saga
export default function* handleGetNews({ payload, type }) {
  let query = "";
  try {
    const newsQuery = yield select((state) => state.news.query);
    if (newsQuery === "") query = payload;
    else query = "react";
    yield put(setLoading(true));
    const response = yield call(requestGetNews, query); // xử lí gọi thằng requests
    const { hits } = response.data;
    yield put(setNews(hits)); // sau khi trả về dữ liệu thì sẽ put
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
