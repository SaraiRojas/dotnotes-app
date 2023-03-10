export interface IConfirmationDialog {
  message: string
  title?: string
  open: boolean
  handleAccept: Function
  onClose: Function
}
