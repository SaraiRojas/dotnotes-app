export interface Icontext {
  isAuthenticated: boolean
  logIn: Function
  logOut: Function
  user: Iuser
  isLoading: boolean
}

export interface INoteInfocontext {
  noteInfo: any
  setNoteInfo: Dispatch<SetStateAction<any[]>>
}
