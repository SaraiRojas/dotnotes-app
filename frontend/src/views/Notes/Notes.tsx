import { Button } from '@mui/material'
import React, { useContext } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'

const Notes = () => {
  const { logOut } = useContext(AuthContext)

  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  return (
    <main>
      <h1>WELCOME TO DOTNOTES</h1>
      <Button
        className={'Button'}
        variant="outlined"
        onClick={() => logOut({ returnTo: window.location.origin })}
      >
        Sign Out
      </Button>
    </main>
  )
}

export default Notes
