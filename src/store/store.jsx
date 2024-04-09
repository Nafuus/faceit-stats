import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'
import { faceitApi } from '../api/faceitApi'
import faceitDataReducer from './faceitDataSlice'

const store = configureStore({
  reducer: {
    faceitData: faceitDataReducer,
    [api.reducerPath]: api.reducer,
    [faceitApi.reducerPath]: faceitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, faceitApi.middleware),
})

export default store
