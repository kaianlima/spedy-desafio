import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

import { selectClassificadosForPreview } from "../../redux/classificado/classificado.selectors";

const ClassificadoCounter = ({ classificados }) => {
  return (
    <Box>
      <Typography variant="h5">
        {classificados.length + " Classificados"}
      </Typography>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  classificados: selectClassificadosForPreview,
});

export default connect(mapStateToProps)(ClassificadoCounter);
