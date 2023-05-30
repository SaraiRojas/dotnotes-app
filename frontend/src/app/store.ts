import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/counter/authSlice'
import notesReducer from './features/counter/notesSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
