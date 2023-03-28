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

export interface ISnackBarscontext {
  displayAlert: function
}

export interface IAlertProps {
  message: string
  severity: error | warning | info | success
}
