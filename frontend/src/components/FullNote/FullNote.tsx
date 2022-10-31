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
import React, { useState } from 'react'
import { INote } from '../../model/interface'
import { IMenuActions } from '../DropDownMenu/interfaces'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog'

const FullNote = () => {
  const { noteInfo } = useContext(AuthContext)

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<INote>(noteInfo)
  const [isEditable, setIsEditable] = useState(false)

  const handleChange = (value: string, key: string) => {
    const newValues = {
      ...noteInfo.note,
      [key]: value,
    }
    setValues(newValues)
  }

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
        <div className="fullNote_actions">
          {!isEditable ? (
            <ArrowBackIcon
              className="fullNote_icon"
              onClick={() => navigate('/notes')}
            />
          ) : (
            <DoneIcon
              className="fullNote_icon"
              onClick={() => setIsEditable(false)}
            />
          )}
          {!isEditable ? (
            <DropDownMenu Name={MoreHorizIcon} actions={noteActions} />
          ) : (
            <ClearIcon
              className="fullNote_icon"
              onClick={() => setIsEditable(false)}
            />
          )}
        </div>
        {!isEditable ? (
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
        ) : (
          <div className="fullNote_editableContainer">
            <input
              type={'text'}
              className="fullNote_editableTitle"
              value={values.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value, 'title')
              }
            />
            <Typography className={'NoteContainer_date'}>
              {noteInfo.created_at}
            </Typography>
            <textarea
              className="fullNote_editableText"
              value={values.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(e.target.value, 'text')
              }
            />
          </div>
        )}
      </NoteContainer>
    </>
  )
}

export default FullNote
