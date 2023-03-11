import { createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "./requests";

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    // nếu mà 1 giá trị thì viết query bth, còn nếu có nhiều hơn 1 giá trị thfi phải dùng obejct ví dụ: {age, gender, .....}
    const response = await requestGetNews(query);
    console.log("response:", response);
    return response.data.hits;
  }
);
