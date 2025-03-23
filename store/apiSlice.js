import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getPatient: builder.query({
      query: () => `https://jsonplaceholder.typicode.com/users`,
    }),
  }),
});

export const { useGetPatientQuery } = apiSlice;
