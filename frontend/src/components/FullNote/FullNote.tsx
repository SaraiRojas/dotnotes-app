import { Typography } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'
import '../../scss/index.scss'
import { formatDateToString } from '../../utils/formaters'
import NoteContainer from '../NoteContainer/NoteContainer'

const FullNote = () => {
  const { noteInfo } = useContext(AuthContext)

  return (
    <NoteContainer cardHeight="100vh" cardWidth="90vw">
      <Typography className={'NoteContainer_title'}>
        {noteInfo.note.title}
      </Typography>
      <Typography className={'NoteContainer_date'}>
        {formatDateToString(noteInfo.note.date)}
      </Typography>
      <Typography className={'NoteContainer_text'} paragraph={true}>
        {noteInfo.note.note_text}
      </Typography>
    </NoteContainer>
  )
}

export default FullNote
