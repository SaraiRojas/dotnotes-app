export interface Icontext {
  isAuthenticated: boolean
  logIn: Function
  logOut: Function
  user: Iuser
  isLoading: boolean
  noteInfo: any
  setNoteInfo: Dispatch<SetStateAction<any[]>>
}
