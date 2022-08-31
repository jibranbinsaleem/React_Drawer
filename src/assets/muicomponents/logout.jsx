import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog( props ) {

  return (
    <div>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            sx: { background: '#0D7E8A',  borderRadius: 2, opacity:'75%'},
          }}

      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} sx={{color:'black'}}>Yes</Button>
          <Button onClick={props.handleClose} sx={{color:'black'}} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
