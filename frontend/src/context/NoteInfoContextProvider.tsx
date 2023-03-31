import React, { useContext, useState } from 'react'
import { INote } from '../model/interface'
import { INIT_NEW_NOTE_VALUES } from '../utils/constants'
import { INoteInfocontext } from './interface'

export const NoteInfoContext = React.createContext({} as INoteInfocontext)

export const NoteInfoContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [noteInfo, setNoteInfo] = useState<INote>(INIT_NEW_NOTE_VALUES)

  return (
    <NoteInfoContext.Provider
      value={{
        noteInfo,
        setNoteInfo,
      }}
    >
      {children}
    </NoteInfoContext.Provider>
  )
}

export const useNoteInfoContext = () => useContext(NoteInfoContext)
