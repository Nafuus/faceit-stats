import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const faceitApi = createApi({
  reducerPath: 'faceit',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://open.faceit.com/data/v4/',
    prepareHeaders: (headers) => {
      const token = '0240485b-8113-4540-b823-8ee55352673c'
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getFaceitStats: builder.query({
      query: ({ player }) => `players?nickname=${player}&game=cs2`,
    }),
    getMatches: builder.query({
      query: ({ playerId }) =>
        `players/${playerId}/games/cs2/stats?offset=0&limit=20`,
    }),
    getMatchRoomPlayer: builder.query({
      query: ({ matchId }) => `/matches/${matchId}`,
    }),
    getMatchRoom: builder.query({
      query: ({ matchId }) => `/matches/${matchId}/stats`,
    }),
  }),
})

export const {
  useGetFaceitStatsQuery,
  useGetMatchesQuery,
  useGetMatchRoomPlayerQuery,
  useGetMatchRoomQuery,
} = faceitApi
