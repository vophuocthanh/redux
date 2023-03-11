import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    console.log("thunkAPI:", thunkAPI);
    console.log("query:", query);
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);
// fulfilled | pending | rejected
const initialState = { hits: [], loading: true, errorMessage: "", query: "" };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleFetchNews.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.loading = false;
    });
    builder.addCase(handleFetchNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleFetchNews.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
