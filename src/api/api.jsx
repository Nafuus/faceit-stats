import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'pattern',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getPlayer: builder.query({
      query: ({ player }) => `/api/stats/${player}`,
    }),
    getMatches: builder.query({
      query: ({ player }) => `/api/matches/${player}`,
    }),
    getMaps: builder.query({
      query: ({ player }) => `/api/maps/${player}`,
    }),
  }),
})

export const { useGetPlayerQuery, useGetMatchesQuery, useGetMapsQuery } = api
