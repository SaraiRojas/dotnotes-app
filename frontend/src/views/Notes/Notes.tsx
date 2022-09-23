import { Button } from '@mui/material'
import React, { useContext } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'

const Notes = () => {
  const { logOut } = useContext(AuthContext)

  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  getNotes()

  return (
    <main>
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
