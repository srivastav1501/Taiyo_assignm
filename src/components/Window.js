import * as React from 'react';
import { useTheme, Button , Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, TextField} from '@mui/material';


export default function ResponsiveDialog({close, open}) {
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

 

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
        maxWidth='sm'
      >
        <DialogTitle id="responsive-dialog-title">
          Add Task
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         <Stack spacing={3} margin={2}>
             <TextField label='Title' variant='outlined' />
             <TextField label='Description' variant='outlined' />
         </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color='error' variant='contained'  onClick={close}>
            Disagree
          </Button>
          <Button color='success' variant='contained' onClick={close} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}