import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    errỏ: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { setNews, setLoading, getNews } = newsSlice.actions;
export default newsSlice.reducer;
