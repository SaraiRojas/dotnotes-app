import React, { useContext, useState } from 'react'
import { IAlertProps, ISnackBarscontext } from './interface'
import { Alert, Snackbar } from '@mui/material'

export const SnackBarsContext = React.createContext({} as ISnackBarscontext)

export const SnackBarsContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [open, setOpen] = useState(false)
  const [props, setProps] = useState<IAlertProps>({
    message: '',
    severity: 'success',
  })

  const displayAlert = (message: string, severity: string) => {
    setOpen(true)
    setProps({
      message,
      severity,
    })
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <SnackBarsContext.Provider
      value={{
        displayAlert,
      }}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Alert elevation={6} variant="filled" severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </SnackBarsContext.Provider>
  )
}

export const useSnackBarsContext = () => useContext(SnackBarsContext)
