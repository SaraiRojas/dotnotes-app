export interface Icontext {
  isAuthenticated: boolean
  logIn: any
  logOut: any
  user: Iuser
  isLoading: boolean
  noteInfo: any
  setNoteInfo: Dispatch<SetStateAction<any[]>>
}
