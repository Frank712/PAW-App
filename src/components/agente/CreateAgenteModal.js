import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import CreateAgenteForm from './CreateAgenteForm';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({
  openCreateModal,
  setOpenCreateModal,
  setSnack,
  configCreateAgente,
  setRefresh
}) {


  const handleClose = () => {
    setOpenCreateModal(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openCreateModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {configCreateAgente.type === 'CREATE' ? 'Crear Agente' : 'Actualizar Agente'}
        </DialogTitle>
        <DialogContent dividers>
          <CreateAgenteForm
            setOpenCreateModal={setOpenCreateModal}
            type={configCreateAgente.type}
            agente={configCreateAgente.item}
            setSnack={setSnack}
            setRefresh={setRefresh}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
