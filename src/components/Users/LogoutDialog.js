import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function LogoutDialog({open,handleClose}) {
  console.log(open)
  return (

    <div>
    <Dialog
    open={open}
    onClose={open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"You need to login again !!!"}
    </DialogTitle>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Okay
      </Button>
    </DialogActions>
  </Dialog>
  </div>

  )
}
