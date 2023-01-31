import React, { useContext, useState, useEffect } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'
import { Stack } from '@mui/material'
import { INote } from '../../model/interface'
import { ReactComponent as Icon } from '../../assets/sad-face.svg'
import _ from 'lodash'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

const Notes = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  const [notes, setNotes] = useState<INote[]>([])

  useEffect(() => {
    getNotes(user.sub)
      .then((data: any) => {
        setNotes(data)
      })
      .catch(() => {
        setNotes([])
      })
  }, [])

  return (
    <div className="notes-container">
      {!_.isEmpty(notes) ? (
        <Stack spacing={0}>
          {notes && notes.map((note: INote) => <PrevNode note={note} />)}
        </Stack>
      ) : (
        <div className="notes-container__no-notes-found">
          <p className="notes-container__no-notes-message">
            No se encontrarón notas
          </p>
          <Icon
            className="notes-container__icon-sad-face"
            style={{
              color: 'rgba(255, 51, 102, 0.15)',
              transform: 'scale(0.6)',
            }}
          />
        </div>
      )}
      <SpeedDial
        ariaLabel="Create new note"
        sx={{ position: 'absolute' }}
        icon={<SpeedDialIcon />}
      />
    </div>
  )
}

export default Notes
