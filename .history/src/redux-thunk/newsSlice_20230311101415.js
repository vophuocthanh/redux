import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    errorMessage: "",
    query: "",
  },
  reducers: {},
  extraReducers: (builder) => {},
});
