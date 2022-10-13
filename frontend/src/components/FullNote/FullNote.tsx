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

const FullNote = () => {
  const { noteInfo } = useContext(AuthContext)

  const navigate = useNavigate()

  const [values, setValues] = useState<INote>(noteInfo)

  const handleChange = (value: string, key: string) => {
    const newValues = {
      ...noteInfo.note,
      [key]: value,
    }
    setValues(newValues)
  }

  return (
    <NoteContainer cardHeight="100vh" cardWidth="90vw">
      <div className="fullNote_actions">
        <ArrowBackIcon
          className="fullNote_icon"
          onClick={() => navigate('/notes')}
        />
        <DropDownMenu Name={MoreHorizIcon} />
      </div>
      <div>
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
      <div className="fullNote_editableContainer">
        <input
          type={'text'}
          className="fullNote_editableTitle"
          value={values.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e.target.value, 'title')
          }
        />
        <textarea className="fullNote_editableText"></textarea>
      </div>
    </NoteContainer>
  )
}

export default FullNote
