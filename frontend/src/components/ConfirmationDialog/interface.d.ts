export interface IConfirmationDialog {
  message: string
  title?: string
  open: boolean
  handleAcept: Function
  onClose: Function
}
