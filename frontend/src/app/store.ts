import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/counter/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
