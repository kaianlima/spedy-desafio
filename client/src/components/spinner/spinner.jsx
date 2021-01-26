import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Spinner = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center" item xs={12}>
      <Box my={2}>
        <CircularProgress />
      </Box>
    </Grid>
  );
};

export default Spinner;
