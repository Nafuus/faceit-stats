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
  },
})

export const { getData } = faceitDataSlice.actions

export default faceitDataSlice.reducer
