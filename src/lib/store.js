import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import postsApi from "./apiSlice/postsApi";
const store = configureStore({
  reducer: {
    posts: postSlice,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postsApi.middleware),
});

export default store;
