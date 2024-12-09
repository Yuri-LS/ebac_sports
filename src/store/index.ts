import { configureStore } from '@reduxjs/toolkit'

import cartFavReducer from './reducers/cart&fav'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cartFav: cartFavReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
