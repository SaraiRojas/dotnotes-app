import { Button } from '@mui/material'
import React, { useContext, useState, useEffect } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'

const Notes = () => {
  const { logOut } = useContext(AuthContext)

  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  const [notes, setNotes] = useState<any>(null)

  useEffect(() => {
    getNotes().then((data) => {
      setNotes(data)
    })
  }, [])

  return (
    <main>
      <Button
        className={'Button'}
        variant="outlined"
        onClick={() => logOut({ returnTo: window.location.origin })}
      >
        Sign Out
      </Button>
      {notes && notes.map((note: any) => <PrevNode note={note} />)}
    </main>
  )
}

export default Notes
