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
    getMatchRoom: builder.query({
      query: ({ matchId }) => `/matches/${matchId}/stats`,
    }),
  }),
})

export const {
  useGetFaceitStatsQuery,
  useGetMatchesQuery,
  useGetMatchRoomQuery,
} = faceitApi

// matches/{match_id} - матч рума
// matches/{match_id}/stats - статистика всех игроков
// player/{player_id}/history - история матчей(я так понимаю надо брать айди матча отсюда и пихать в matches/{match_id}
// player/{player_id}/hub - хабы игрока в которых он играет
// ranking/games/{games_id}/redigions - топ эло
// search/players - поисковик игроков. Ищет приблизительно тех кого ты пишешь
//   https://open.faceit.com/data/v4/matches/{match_id}/stats

// 7d7afa91-9fff-4326-b4f9-c7cbfced029c - мой айдишник
// 6f7a1cca-df43-4d80-98e5-d83bcaacfd82 - k0ngen
// 93306681-bce6-4369-8c41-e0bdba2597ed - m0NESY
// api key - 0240485b-8113-4540-b823-8ee55352673c

// https://faceitanalyser.com?key=<key>/api/stats/<playerid>
// wg2Q11sN8mj1Ux0I3SgXNZOLhnM6ROXQ65S7qse5
