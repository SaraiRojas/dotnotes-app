import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useAuth0 } from '@auth0/auth0-react'

interface authState {
  isAuthenticated: boolean
  logIn: null
  logOut: null
  user: string
  isLoading: boolean
}

const initialState: authState = {
  isAuthenticated: false,
  logIn: null,
  logOut: null,
  user: '',
  isLoading: false,
}

export const logIn = createAsyncThunk('auth/logIn', async () => {
  const { loginWithRedirect } = useAuth0()
  return loginWithRedirect
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export const authentication = (state: any) => state.auth

export default authSlice.reducer
