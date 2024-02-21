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
import { useNavigate } from 'react-router-dom'
import LoadingNodes from '../../components/LoadingNotes/LoadingNodes'
import { useQuery, gql } from '@apollo/client'

const USER_NOTES = gql`
  query UserNotes($userId: String!) {
  userNotes(userId: $userId) {
    content
    id
    user_id
    title
  }
}
`

const Notes = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  const userId = user.sub
  const { loading, data } = useQuery(USER_NOTES, {
    variables: { userId },
  })

  const notes = data?.userNotes
  console.log(notes)

  const navigate = useNavigate()

  // const [notes, setNotes] = useState<INote[]>([])

  // useEffect(() => {
  //   getNotes(user.sub)
  //     .then((data: any) => {
  //       setNotes(data)
  //     })
  //     .catch(() => {
  //       setNotes([])
  //     })
  // }, [])

  const renderNotes = () => {
    return notes ? (
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
      {loading ? <LoadingNodes /> : renderNotes()}
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
