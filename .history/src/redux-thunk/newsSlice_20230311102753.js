import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    console.log(" newsSlice.js:6 ~ thunkAPI:", thunkAPI);
    console.log(" newsSlice.js:6 ~ query:", query);
    const response = await requestGetNews(query);
  }
);

const initialState = { hits: [], loading: true, errorMessage: "", query: "" };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
