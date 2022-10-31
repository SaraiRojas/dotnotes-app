import React, { useContext, useState, useEffect } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'
import { Stack } from '@mui/material'
import { INote } from '../../model/interface'

const Notes = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    getNotes().then((data: any) => {
      setNotes(data.notes)
    })
  }, [])

  return (
    <div className="notes-container">
      <Stack spacing={0}>
        {notes && notes.map((note: INote) => <PrevNode note={note} />)}
      </Stack>
    </div>
  )
}

export default Notes
