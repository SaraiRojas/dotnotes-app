import { Typography } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'
import '../../scss/index.scss'
import { formatDateToString } from '../../utils/formaters'
import NoteContainer from '../NoteContainer/NoteContainer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useNavigate } from 'react-router-dom'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import { useState } from 'react'
import { IMenuActions } from '../DropDownMenu/interfaces'
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog'
import { InitNewNoteValues } from '../../utils/utils'
import NoteForm from './noteForm/noteForm'

const FullNote = ({isNewNote = false}:{isNewNote?: boolean}) => {
  const { noteInfo, setNoteInfo } = useContext(AuthContext)

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [isEditable, setIsEditable] = useState(isNewNote)

  const noteActions: IMenuActions[] = [
    { label: 'Editar', action: () => setIsEditable(true) },
    { label: 'Eliminar', action: () => setOpen(true) },
  ]

  return (
    <>
      <ConfirmationDialog
        message="¿Desea eliminar la nota?"
        open={open}
        handleAcept={() => setOpen(false)}
        onClose={() => setOpen(false)}
      />
      <NoteContainer cardHeight="100vh" cardWidth="90vw">
      {isEditable ? (
          <NoteForm
            setIsEditable={setIsEditable}
            isNewNote={isNewNote}
          />
        ) : (
          <>
            <div className="fullNote_actions">
              <ArrowBackIcon
                className="fullNote_icon"
                onClick={() => {navigate('/notes'), setNoteInfo(InitNewNoteValues)}}
              />
              <DropDownMenu Name={MoreHorizIcon} actions={noteActions} />
            </div>
            <div className="fullNote_editableContainer">
              <Typography className={'NoteContainer_title'}>
                {noteInfo.title}
              </Typography>
              <Typography className={'NoteContainer_date'}>
                {noteInfo.created_at}
              </Typography>
              <Typography className={'NoteContainer_text'} paragraph={true}>
                {noteInfo.content}
              </Typography>
            </div>
          </>        
        )}
      </NoteContainer>
    </>
  )
}

export default FullNote
