import React, { useContext, useState, useEffect } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'
import { Stack } from '@mui/material'
import { INote } from '../../model/interface'
import { ReactComponent as Icon } from '../../assets/sad-face.svg'
import _ from 'lodash'

const Notes = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  const [notes, setNotes] = useState<INote[]>(null)

  useEffect(() => {
    getNotes(user.sub)
      .then((data: any) => {
        console.log(data)
        setNotes(data)
      })
      .catch((error) => {
        setNotes([])
      })
  }, [])

  return !_.isEmpty(notes) ? (
    <div className="notes-container">
      <Stack spacing={0}>
        {notes && notes.map((note: INote) => <PrevNode note={note} />)}
      </Stack>
    </div>
  ) : (
    <div className="notes-container__no-notes-found">
      <p className="notes-container__no-notes-message">
        No se encontrarón notas
      </p>
      <Icon
        className="notes-container__icon-sad-face"
        style={{ color: 'rgba(255, 51, 102, 0.15)', transform: 'scale(0.8)' }}
      />
    </div>
  )
}

export default Notes
