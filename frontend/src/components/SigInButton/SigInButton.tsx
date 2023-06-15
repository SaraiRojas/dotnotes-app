import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import '../../scss/index.scss'

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      className={'signInButton'}
      variant="outlined"
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </Button>
  )
}

export default SignInButton
