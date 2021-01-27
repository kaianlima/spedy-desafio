import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

const useStyles = makeStyles(() => ({
  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  homeCardTop: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
}));

const Homepage = ({ fetchClassificadosStart, toggleDialog }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchClassificadosStart();
  }, [fetchClassificadosStart]);

  const handleOpen = () => {
    toggleDialog();
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Grid className="homepage-classificados" container item xs={12}>
        <Card className={classes.card}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            my={2}
          >
            <Box className="homepage-title" ml={2}>
              <Typography variant="h3">Classificados</Typography>
            </Box>
            <Box mt={1} mr={2}>
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
          </Box>
          <Grid className="homepage-classificados-list" item xs={12}>
            <Grid container justify="space-around">
              <ErrorBoundary>
                <ClassificadoOverviewContainer />
              </ErrorBoundary>
            </Grid>
          </Grid>
          <Box className="homepage-classificados-list" my={2} ml={3}>
            <ClassificadoCounter />
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchClassificadosStart: () => dispatch(fetchClassificadosStart()),
  addClassificadoStart: (classificadoData) =>
    dispatch(addClassificadoStart(classificadoData)),
  toggleDialog: () => dispatch(toggleDialog()),
});

export default connect(null, mapDispatchToProps)(Homepage);
