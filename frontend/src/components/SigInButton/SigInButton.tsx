import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { authentication } from '../../app/features/counter/authSlice'
import { useSelector } from 'react-redux'

const SignInButton = () => {
  const { logIn } = useContext(AuthContext)
  const authInfo = useSelector(authentication)
  console.log(authInfo)

  return (
    <Button
      className={'signInButton'}
      variant="outlined"
      onClick={() => logIn()}
    >
      Sign In
    </Button>
  )
}

export default SignInButton
