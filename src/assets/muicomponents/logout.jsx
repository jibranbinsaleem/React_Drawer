// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog( props ) {

//   return (
//     <div>
      
//       <Dialog
//         open={props.open}
//         onClose={props.handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         PaperProps={{
//             sx: { background: '#0D7E8A',  borderRadius: 2, opacity:'75%'},
//           }}

//       >
//         {/* <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle> */}
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to logout?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={props.handleClose} sx={{color:'black'}}>Yes</Button>
//           <Button onClick={props.handleClose} sx={{color:'black'}} autoFocus>
//             No
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AlertDialog( props ) {

  let  { open, handleClose } = props;

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // PaperProps={{
        //                 sx: { background: '#0D7E8A',  borderRadius: 2, opacity:'75%'},
        //               }}
            
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} margin='0'>
          Logout
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to logout?
          </Typography>
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{color:'black'}}>
            Confirm 
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
