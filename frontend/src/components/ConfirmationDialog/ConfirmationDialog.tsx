import * as React from 'react'
import '../../scss/index.scss'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { IConfirmationDialog } from './interface'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ConfirmationDialog = ({
  message,
  title,
  open,
  handleAcept,
  onClose,
}: IConfirmationDialog) => {
  return (
    <div>
      <Dialog
        className="confirmationDialog_container"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => onClose()}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions className="confirmationDialog_actions">
          <ClearIcon
            className="confirmationDialog_icon"
            onClick={() => onClose()}
          />
          <DoneIcon
            className="confirmationDialog_icon"
            onClick={() => handleAcept()}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmationDialog
