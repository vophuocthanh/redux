import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.pyloadpayload,
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { setNews } = newSlice.actions;
export default newSlice.reducer;
