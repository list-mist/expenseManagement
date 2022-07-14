import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { UserAuthApi } from '../components/Services/UserAuthApi'
import authSlice from '../features/authSlice'
import refreshData from '../features/refreshData'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [UserAuthApi.reducerPath]: UserAuthApi.reducer,
    auth : authSlice,
    refreshData : refreshData
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserAuthApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)