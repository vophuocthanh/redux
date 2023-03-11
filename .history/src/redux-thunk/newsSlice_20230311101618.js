import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const handleFetchNews = createAsyncThunk();

const initialState = { hits: [], loading: true, errorMessage: "", query: "" };

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
