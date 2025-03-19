import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => "/posts",
    }),
    getById: build.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery } = postsApi;
export default postsApi;
