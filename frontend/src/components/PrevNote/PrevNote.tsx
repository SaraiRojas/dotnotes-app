import { Typography } from '@mui/material'
import '../../scss/index.scss'
import NoteContainer from '../NoteContainer/NoteContainer'

const PrevNode = () => {
  return (
    <NoteContainer>
      <Typography className={'NoteContainer_title'}>Title</Typography>
      <Typography className={'NoteContainer_date'}>01/01/2023</Typography>
      <Typography className={'NoteContainer_text'} paragraph={true}>
        Word of the Day
      </Typography>
    </NoteContainer>
  )
}

export default PrevNode
