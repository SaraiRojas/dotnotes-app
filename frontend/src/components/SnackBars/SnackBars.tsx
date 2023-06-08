import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  open,
  openSnackBar,
  props,
} from '../../app/features/counter/snackBarsSlice'

export const Snackbars = () => {
  const isSnackBarOpen = useSelector(open)
  const snackBarProps = useSelector(props)

  const dispatch = useDispatch()

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(openSnackBar(false))
  }

  return (
    <Snackbar
      open={isSnackBarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Alert elevation={6} variant="filled" severity={snackBarProps.severity}>
        {snackBarProps.message}
      </Alert>
    </Snackbar>
  )
}
