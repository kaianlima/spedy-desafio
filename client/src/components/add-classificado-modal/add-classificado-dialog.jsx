import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import AddClassificadoForm from "../add-classificado-form/add-classificado-form";

import { selectDialogOpen } from "../../redux/dialog/dialog.selectors";
import { toggleDialog } from "../../redux/dialog/dialog.actions";

const AddClassificadoDialog = ({ dialogOpen, toggleDialog }) => {
  const handleClose = () => {
    toggleDialog();
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-novo-classificado"
    >
      <DialogTitle id="form-dialog-novo-classificado">
        Novo Classificado
      </DialogTitle>
      <DialogContent>
        <DialogContentText align="justify">
          Complete os seguintes dados para adicionar um novo classificado.
        </DialogContentText>
        <AddClassificadoForm open={dialogOpen} setOpen={toggleDialog} />
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = createStructuredSelector({
  dialogOpen: selectDialogOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDialog: () => dispatch(toggleDialog()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddClassificadoDialog);
