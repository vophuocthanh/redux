import { createSlice, combineReducers } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducer: {
    toggleDarkMode: (state, actions) => ({}),
  },
});
