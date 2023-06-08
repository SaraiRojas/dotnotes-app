import { createSlice } from '@reduxjs/toolkit'
import { IAlertProps } from './interface'

interface snackBarsState {
  isSnackBarOpen: boolean
  snackBarProps: IAlertProps
}

const initialState: snackBarsState = {
  isSnackBarOpen: false,
  snackBarProps: {
    message: '',
    severity: 'success',
  },
}

export const snackBarsSlice = createSlice({
  name: 'snackBars',
  initialState,
  reducers: {
    openSnackBar(state, action) {
      state.isSnackBarOpen = action.payload
    },
    handleSnackBars(state, action) {
      state.snackBarProps = { ...action.payload }
      state.isSnackBarOpen = true
    },
  },
})

export const { openSnackBar, handleSnackBars } = snackBarsSlice.actions

//Selectors

export const open = (state: any) => state.snackBars.isSnackBarOpen

export const props = (state: any) => state.snackBars.snackBarProps

export default snackBarsSlice.reducer
