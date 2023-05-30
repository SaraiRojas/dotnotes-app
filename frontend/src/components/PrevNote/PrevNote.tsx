import { CardActionArea, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { noteToBeOPen } from '../../app/features/counter/notesSlice'
import { INote } from '../../model/interface'
import '../../scss/index.scss'
import { noteDate } from '../../utils/utils'
import NoteContainer from '../NoteContainer/NoteContainer'

const PrevNode = ({ note }: { note: INote }) => {
  const dispatch = useDispatch()

  const handleClick = () => dispatch(noteToBeOPen(note))

  return (
    <CardActionArea
      className={'NoteContainer'}
      component={Link}
      to="/title"
      onClick={handleClick}
    >
      <NoteContainer cardHeight="125px">
        <Typography className={'NoteContainer_title'}>{note.title}</Typography>
        <Typography className={'NoteContainer_date'}>
          {noteDate(note)}
        </Typography>
        <Typography className={'NoteContainer_text'} paragraph={true}>
          {note.content}
        </Typography>
      </NoteContainer>
    </CardActionArea>
  )
}

export default PrevNode
