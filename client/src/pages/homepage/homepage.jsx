import React, { useEffect } from "react";
import { connect } from "react-redux";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import {
  fetchClassificadosStart,
  addClassificadoStart,
} from "../../redux/classificado/classificado.actions";
import { toggleDialog } from "../../redux/dialog/dialog.actions";

import ErrorBoundary from "../../components/error-boundary/error-boundary";
import ClassificadoOverviewContainer from "../../components/classificado-overview/classificado-overview.container";
import ClassificadoCounter from "../../components/classificado-counter/classificado-counter";
import AddClassificadoDialog from "../../components/add-classificado-modal/add-classificado-dialog";

const Homepage = ({ fetchClassificadosStart, toggleDialog }) => {
  useEffect(() => {
    fetchClassificadosStart();
  }, [fetchClassificadosStart]);

  const handleOpen = () => {
    toggleDialog();
  };

  return (
    <div className="homepage">
      <Container className="content" maxWidth="md">
        <Grid className="homepage-classificados" container item xs={12}>
          <Grid className="homepage-title" item xs={8}>
            <h2>Classificados</h2>
          </Grid>
          <Grid
            className="homepage-add-button"
            xs={4}
            container
            item
            justify="flex-end"
          >
            <Box mt={2} mb={1}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => handleOpen()}
              >
                Novo classificado
              </Button>
              <AddClassificadoDialog />
            </Box>
          </Grid>
          <Grid className="homepage-classificados-list" item xs={12}>
            <Grid container justify="flex-start">
              <ErrorBoundary>
                <ClassificadoOverviewContainer />
              </ErrorBoundary>
            </Grid>
          </Grid>
          <Grid className="homepage-classificados-list" item xs={12}>
            <ClassificadoCounter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchClassificadosStart: () => dispatch(fetchClassificadosStart()),
  addClassificadoStart: (classificadoData) =>
    dispatch(addClassificadoStart(classificadoData)),
  toggleDialog: () => dispatch(toggleDialog()),
});

export default connect(null, mapDispatchToProps)(Homepage);
