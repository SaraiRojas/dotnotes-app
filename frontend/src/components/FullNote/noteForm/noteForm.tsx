import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContextProvider'
import '../../../scss/index.scss'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { INote } from '../../../model/interface'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import { InitNewNoteValues } from '../../../utils/utils'
import {INoteForm} from './interface'

const NoteForm = ({setIsEditable, isNewNote}:INoteForm) => {
  const { noteInfo, setNoteInfo } = useContext(AuthContext)

  const navigate = useNavigate()

  const [values, setValues] = useState<INote>(noteInfo)

  // console.log(noteInfo)

  const handleChange = (value: string, key: string) => {
    const newValues = {
      ...noteInfo,
      [key]: value,
    }
    setValues(newValues)
  }

  return (
    <>
      <div className="fullNote_actions">
        <DoneIcon
          className="fullNote_icon"
          onClick={() => {setIsEditable(false)}}
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
            handleChange(e.target.value, 'text')
          }
        />
      </div>
    </>
  )
}

export default NoteForm
