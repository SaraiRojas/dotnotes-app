import { Button, Typography } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'
import '../../scss/index.scss'
import { formatDateToString } from '../../utils/formaters'
import NoteContainer from '../NoteContainer/NoteContainer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useNavigate } from 'react-router-dom'
import DropDownMenu from '../DropDownMenu/DropDownMenu'

const FullNote = () => {
  const { noteInfo } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <NoteContainer cardHeight="100vh" cardWidth="90vw">
      <div className="fullNote_actions">
        <ArrowBackIcon
          className="fullNote_icon"
          onClick={() => navigate('/notes')}
        />
        <DropDownMenu Name={MoreHorizIcon} />
      </div>
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
