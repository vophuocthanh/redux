import { call } from "@reduxjs/toolkit";
export default function* handleGetUser(action) {
  try {
    const response = yield call;
  } catch (error) {
    console.log(error);
  }
}
