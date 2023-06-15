import React, { useState, useEffect } from 'react'
import '../../scss/index.scss'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'
import { Stack } from '@mui/material'
import { INote } from '../../model/interface'
import { ReactComponent as Icon } from '../../assets/sad-face.svg'
import _ from 'lodash'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import { useNavigate } from 'react-router-dom'
import LoadingNodes from '../../components/LoadingNotes/LoadingNodes'
import { useAuth0 } from '@auth0/auth0-react'

const Notes = () => {
  const { user } = useAuth0()

  const navigate = useNavigate()

  const [notes, setNotes] = useState<INote[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (user?.sub) {
      getNotes(user.sub)
        .then((data: any) => {
          setNotes(data)
        })
        .catch(() => {
          setNotes([])
        })
        .finally(() => setIsLoading(false))
    }
  }, [])

  const renderNotes = () => {
    return !_.isEmpty(notes) ? (
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
    )
  }

  return (
    <div className="notes-container">
      {isLoading ? <LoadingNodes /> : renderNotes()}
      <SpeedDial
        ariaLabel="Create new note"
        sx={{ position: 'absolute' }}
        icon={<SpeedDialIcon />}
        onClick={() => navigate('/new_note')}
      />
    </div>
  )
}

export default Notes
