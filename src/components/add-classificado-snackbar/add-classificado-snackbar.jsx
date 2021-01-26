import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { selectSnackbarOpen } from "../../redux/snackbar/snackbar.selectors";
import { toggleSnackbar } from "../../redux/snackbar/snackbar.actions";

const AddClassificadoSnackbar = ({ snackbarOpen, toggleSnackbar }) => {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      onClose={toggleSnackbar}
    >
      <Alert onClose={toggleSnackbar} severity="success" variant="filled">
        Classificado adicionado!
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = createStructuredSelector({
  snackbarOpen: selectSnackbarOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackbar: () => dispatch(toggleSnackbar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddClassificadoSnackbar);
