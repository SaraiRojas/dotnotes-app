import React from 'react'
import Button from '@mui/material/Button'

interface ISignInButton {
  width?: string
}

const SignInButton = ({ width }: ISignInButton) => {
  return (
    <Button
      variant="outlined"
      style={{
        borderRadius: '14px',
        borderWidth: '3px',
        color: '#FF3366',
        borderColor: '#FF3366',
        width: width,
        textTransform: 'none',
        fontFamily: 'Manrope',
        fontSize: '1.5em',
        fontWeight: 'bold',
      }}
    >
      Sign In
    </Button>
  )
}

SignInButton.defaultProps = {
  width: '200px',
}

export default SignInButton
