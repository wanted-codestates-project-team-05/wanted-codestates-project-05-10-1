import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchWordApi = createApi({
  reducerPath: 'searchWord',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getSearchWord: builder.query({
      query: (keyword) => `/api/v1/search-conditions/?name=${keyword}`,
      keepUnusedDataFor: 15,
    })
  })
});

export const { useGetSearchWordQuery } = searchWordApi;