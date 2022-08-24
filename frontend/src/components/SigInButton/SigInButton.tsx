import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'

const SignInButton = () => {
  const { logIn } = useContext(AuthContext)

  return (
    <Button className={'Button'} variant="outlined" onClick={() => logIn()}>
      Sign In
    </Button>
  )
}

export default SignInButton
