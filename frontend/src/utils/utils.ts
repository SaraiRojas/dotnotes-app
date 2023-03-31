import { INote } from '../model/interface'
import { formatDateToString } from './formaters'

export const noteDate = (note: INote) => {
  const date = note.created_at ?? note.updated_at
  return date && formatDateToString(new Date(date))
}
