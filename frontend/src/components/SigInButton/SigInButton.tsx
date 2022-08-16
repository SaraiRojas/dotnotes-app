import React from 'react'
import Button from '@mui/material/Button'
import '../../scss/index.scss'
import { useAuth0 } from "@auth0/auth0-react"

const SignInButton = () => {

  const { loginWithRedirect  } = useAuth0()
  
  return (
    <Button className={'Button'} variant="outlined" onClick={() => loginWithRedirect()}>
      Sign In
    </Button>
  )
}

export default SignInButton
