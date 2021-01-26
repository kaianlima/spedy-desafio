import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { addClassificadoStart } from "../../redux/classificado/classificado.actions";
import { toggleSnackbar } from "../../redux/snackbar/snackbar.actions";
import { toggleDialog } from "../../redux/dialog/dialog.actions";

const validate = (values) => {
  const errors = {};
  if (!values.titulo) {
    errors.titulo = "Obrigatório";
  } else if (values.titulo.length > 20) {
    errors.titulo = "Máximo de 20 caracteres";
  }

  if (!values.descricao) {
    errors.descricao = "Obrigatório";
  } else if (values.descricao.length > 100) {
    errors.descricao = "Máximo de 100 caracteres";
  }

  return errors;
};

const AddClassificadoForm = ({
  addClassificadoStart,
  toggleSnackbar,
  toggleDialog,
}) => {
  return (
    <Formik
      initialValues={{
        titulo: "",
        descricao: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);

          addClassificadoStart(values);
          toggleSnackbar();
          toggleDialog();
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box mb={2}>
            <Grid container spacing={2}>
              <Grid item>
                <Field
                  component={TextField}
                  name="titulo"
                  type="text"
                  label="Título"
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="descricao"
                  type="text"
                  label="Descrição"
                  multiline
                />
              </Grid>
            </Grid>
          </Box>
          {isSubmitting && <LinearProgress />}
          <Grid>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addClassificadoStart: (classificadoData) =>
    dispatch(addClassificadoStart(classificadoData)),
  toggleSnackbar: () => dispatch(toggleSnackbar()),
  toggleDialog: () => dispatch(toggleDialog()),
});

export default connect(null, mapDispatchToProps)(AddClassificadoForm);
