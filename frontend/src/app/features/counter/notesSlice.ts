import { createSlice } from '@reduxjs/toolkit'
import { INote } from '../../../model/interface'
import { INIT_NEW_NOTE_VALUES } from '../../../utils/constants'

interface notesState {
  noteInfo: INote
}

const initialState: notesState = {
  noteInfo: INIT_NEW_NOTE_VALUES,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteToBeOPen(state, action) {
      state.noteInfo = action.payload
    },
  },
})

export const { noteToBeOPen } = notesSlice.actions

export const noteInfo = (state: any) => state.notes.noteInfo

export default notesSlice.reducer
