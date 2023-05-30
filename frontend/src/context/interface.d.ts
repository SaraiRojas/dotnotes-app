export interface Icontext {
  isAuthenticated: boolean
  logIn: Function
  logOut: Function
  user: Iuser
  isLoading: boolean
}
export interface ISnackBarscontext {
  displayAlert: function
}

export interface IAlertProps {
  message: string
  severity: error | warning | info | success
}
