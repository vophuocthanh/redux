import { createSlice, createAction } from "@reduxjs/toolkit";

const otherAction = createAction("updateLoading");

const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    errorMessage: "",
    query: "",
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
    setErrorMessage: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});

export const { setNews, setLoading, getNews, setErrorMessage, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
