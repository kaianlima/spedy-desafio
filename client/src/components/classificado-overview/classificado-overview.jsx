import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import ClassificadoItem from "../classificado-item/classificado-item";

import { selectClassificadosForPreview } from "../../redux/classificado/classificado.selectors";

const ClassificadoOverview = ({ classificados }) => {
  return classificados.map(({ id, ...otherProps }) => {
    return (
      <Grid className="classificado-overview" key={id} item>
        <Grid item xs={4}>
          <Box mb={3}>
            <ClassificadoItem key={id} {...otherProps} />
          </Box>
        </Grid>
      </Grid>
    );
  });
};

const mapStateToProps = createStructuredSelector({
  classificados: selectClassificadosForPreview,
});

export default connect(mapStateToProps)(ClassificadoOverview);
