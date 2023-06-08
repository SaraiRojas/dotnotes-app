import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/counter/authSlice'
import notesReducer from './features/counter/notesSlice'
import snackBarsReducer from './features/counter/snackBarsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: notesReducer,
    snackBars: snackBarsReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
