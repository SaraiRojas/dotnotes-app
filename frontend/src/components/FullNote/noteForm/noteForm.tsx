import { useAuthContext } from '../../../context/AuthContextProvider'
import '../../../scss/index.scss'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { INote } from '../../../model/interface'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import { InitNewNoteValues } from '../../../utils/utils'
import { INoteForm } from './interface'
import { saveNewNote, updateNote } from '../../../api/Notes'
import { useNoteInfoContext } from '../../../context/NoteInfoContextProvider'

const NoteForm = ({ setIsEditable, isNewNote }: INoteForm) => {
  const { user } = useAuthContext()
  const { noteInfo, setNoteInfo } = useNoteInfoContext()

  const navigate = useNavigate()

  const [values, setValues] = useState<INote>(noteInfo)

  const handleChange = (value: string, key: string) => {
    const newValues = {
      ...noteInfo,
      [key]: value,
    }
    setValues(newValues)
  }

  const handleSaveNote = () => {
    const body = {
      title: values.title,
      content: values.content,
      user_id: user.sub,
    }
    isNewNote ? saveNewNote(body) : updateNote(body, noteInfo.id)
  }

  return (
    <>
      <div className="fullNote_actions">
        <DoneIcon
          className="fullNote_icon"
          onClick={() => {
            setIsEditable(false)
            handleSaveNote()
          }}
        />
        <ClearIcon
          className="fullNote_icon"
          onClick={() => {
            isNewNote ? navigate('/notes') : setIsEditable(false)
            setNoteInfo(InitNewNoteValues)
          }}
        />
      </div>
      <div className="fullNote_editableContainer">
        <input
          type={'text'}
          className="fullNote_editableTitle"
          value={values.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, 'title')
          }
        />
        <textarea
          className="fullNote_editableText"
          value={values.content}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(e.target.value, 'content')
          }
        />
      </div>
    </>
  )
}

export default NoteForm
