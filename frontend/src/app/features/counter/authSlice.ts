import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useAuth0 } from '@auth0/auth0-react'

interface authState {
  isAuthenticated: boolean
  logIn: null | (() => void)
  logOut: null
  user: string
  isLoading: boolean
}

const initialState: authState = {
  isAuthenticated: true,
  logIn: null,
  logOut: null,
  user: '',
  isLoading: false,
}

export const logIn = createAsyncThunk('auth/logIn', async () => {
  const { loginWithRedirect } = useAuth0()
  return loginWithRedirect
})

export const isUserAuthenticated = createAsyncThunk(
  'auth/isUserAuthenticated',
  async () => {
    const isAuthenticated = false
    return isAuthenticated
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogOut(state, action) {
      state.logOut = action.payload
    },
    userInfo(state, action) {
      state.user = action.payload
    },
    isAuthLoading(state, action) {
      state.isLoading = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.logIn = action.payload
      })
      .addCase(isUserAuthenticated.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload
      })
  },
})

export const { userLogOut, userInfo, isAuthLoading } = authSlice.actions

export const authentication = (state: any) => state.auth

export default authSlice.reducer
