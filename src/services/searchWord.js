import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchWordApi = createApi({
  reducerPath: 'searchWord',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.clinicaltrialskorea.com',
  }),
  keepUnusedDataFor: 100,
  endpoints: (builder) => ({
    getSearchWord: builder.query({
      query: (keyword) => `/api/v1/search-conditions/?name=${keyword}`,
    })
  })
});

export const { useGetSearchWordQuery } = searchWordApi;