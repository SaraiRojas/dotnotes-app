import { useAuthContext } from '../../../context/AuthContextProvider'
import '../../../scss/index.scss'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { INote } from '../../../model/interface'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import { INIT_NEW_NOTE_VALUES } from '../../../utils/constants'
import { INoteForm } from './interface'
import { getUserCode, saveNewNote, updateNote } from '../../../api/Notes'
import { useSnackBarsContext } from '../../../context/SnackBarsProvider'
import { useDispatch, useSelector } from 'react-redux'
import { noteInfo, noteToBeOPen } from '../../../app/features/counter/notesSlice'

const NoteForm = ({ setIsEditable, isNewNote }: INoteForm) => {
  const { user } = useAuthContext()
  const dispatch = useDispatch()
  const note = useSelector(noteInfo)
  const { displayAlert } = useSnackBarsContext()

  const navigate = useNavigate()

  const [values, setValues] = useState<INote>(note)
  const [userCode, setUserCode] = useState<number>(0)

  useEffect(() => {
    if (isNewNote) {
      getUserCode(user.sub).then((userInfo) => {
        setUserCode(userInfo)
      })
    }
  }, [])

  const handleChange = (value: string, key: string) => {
    const newValues = {
      ...values,
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
    isNewNote
      ? saveNewNote({ ...body, userid: userCode })
          .then(() => {
            dispatch(noteToBeOPen({
              ...note,
              title: values.title,
              content: values.content,
            }))
            setIsEditable(false)
          })
          .catch(() => {
            displayAlert('Something went wrong. Try again', 'error')
          })
      : updateNote(body, note.id)
          .then(() => {
            dispatch(noteToBeOPen({
              ...note,
              title: values.title,
              content: values.content,
            }))
            setIsEditable(false)
          })
          .catch(() => {
            displayAlert('Something went wrong. Try again', 'error')
          })
  }

  return (
    <>
      <div className="fullNote_actions">
        <DoneIcon className="fullNote_icon" onClick={() => handleSaveNote()} />
        <ClearIcon
          className="fullNote_icon"
          onClick={() => {
            isNewNote
              ? (navigate('/notes'), dispatch(noteToBeOPen(INIT_NEW_NOTE_VALUES)))
              : setIsEditable(false)
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
