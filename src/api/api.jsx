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

// wg2Q11sN8mj1Ux0I3SgXNZOLhnM6ROXQ65S7qse5 - key
// https://faceitanalyser.com/api/stats/player?key=API_KEY

// 7d7afa91-9fff-4326-b4f9-c7cbfced029c - мой айдишник
// 6f7a1cca-df43-4d80-98e5-d83bcaacfd82 - k0ngen
// 93306681-bce6-4369-8c41-e0bdba2597ed - m0NESY
