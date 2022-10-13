import { CardActionArea, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider'
import { INote } from '../../model/interface'
import '../../scss/index.scss'
import { formatDateToString } from '../../utils/formaters'
import NoteContainer from '../NoteContainer/NoteContainer'

const PrevNode = ({ note }: { note: INote }) => {
  const { setNoteInfo } = useContext(AuthContext)

  const handleClick = () => setNoteInfo(note)

  return (
    <CardActionArea component={Link} to="/title" onClick={handleClick}>
      <NoteContainer cardHeight="125px">
        <Typography className={'NoteContainer_title'}>{note.title}</Typography>
        <Typography className={'NoteContainer_date'}>
          {note.created_at ? note.created_at : '-'}
        </Typography>
        <Typography className={'NoteContainer_text'} paragraph={true}>
          {note.content}
        </Typography>
      </NoteContainer>
    </CardActionArea>
  )
}

export default PrevNode
