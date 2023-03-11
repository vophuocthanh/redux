import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";
// worker saga
export default function* handleGetNews({ payload, type }) {
  try {
    const query = select((state) => state.news.query);
    console.log("function*handleGetNews ~ query:", query);
    yield put(setLoading(true));
    const response = yield call(requestGetNews, payload); // xử lí gọi thằng requests
    const { hits } = response.data;
    yield put(setNews(hits)); // sau khi trả về dữ liệu thì sẽ put
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
