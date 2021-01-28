import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Box from "@material-ui/core/Box";

import ClassificadoItem from "../classificado-item/classificado-item";

import { selectClassificadosForPreview } from "../../redux/classificado/classificado.selectors";

const ClassificadoOverview = ({ classificados }) => {
  return classificados.map(({ id, ...otherProps }) => {
    return id % 3 === 2 ? (
      <Box mx={1} mb={2.5}>
        <ClassificadoItem key={id} {...otherProps} />
      </Box>
    ) : (
      <Box mx={2.5} mb={2.5}>
        <ClassificadoItem key={id} {...otherProps} />
      </Box>
    );
  });
};

const mapStateToProps = createStructuredSelector({
  classificados: selectClassificadosForPreview,
});

export default connect(mapStateToProps)(ClassificadoOverview);
