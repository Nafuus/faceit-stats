import { createSlice } from '@reduxjs/toolkit'

const faceitDataSlice = createSlice({
  name: 'faceitData',
  initialState: {},
  reducers: {
    getData: (state, action) => {
      return {
        player: action.payload.data,
        matches: action.payload.matches,
        maps: action.payload.maps,
        faceitStats: action.payload.faceitStats,
      }
    },
    getMatchId: (state, action) => {
      return {
        ...state,
        matchId: action.payload,
      }
    },
  },
})

export const { getData, getMatchId } = faceitDataSlice.actions

export default faceitDataSlice.reducer
