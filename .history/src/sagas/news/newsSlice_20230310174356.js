import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
  },
  reducers: {
    setNews: (state, { payload }) => ({
      ...state,
      hits: payload,
      loading: payload,
    }),
  },
});
