import { CardActionArea, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider'
import '../../scss/index.scss'
import NoteContainer from '../NoteContainer/NoteContainer'

const PrevNode = (note: any) => {
  const { setNoteInfo } = useContext(AuthContext)

  const handleClick = () => setNoteInfo(note)

  return (
    <CardActionArea component={Link} to="/title" onClick={handleClick}>
      <NoteContainer>
        <Typography className={'NoteContainer_title'}>
          {note.note.title}
        </Typography>
        <Typography className={'NoteContainer_date'}>
          {note.note.date.toString()}
        </Typography>
        <Typography className={'NoteContainer_text'} paragraph={true}>
          {note.note.note_text}
        </Typography>
      </NoteContainer>
    </CardActionArea>
  )
}

export default PrevNode
