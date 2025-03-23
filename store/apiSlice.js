import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (page = 1) => `albums?_page=${page}&_limit=10`,
      transformResponse: () => "test",
    }),
  }),
});

export const { useGetAlbumsQuery } = apiSlice;
