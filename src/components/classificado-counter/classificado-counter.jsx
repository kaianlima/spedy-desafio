import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import { selectClassificadosForPreview } from "../../redux/classificado/classificado.selectors";

const ClassificadoCounter = ({ classificados }) => {
  return (
    <Box mb={2}>
      <Card>
        <CardHeader
          title={classificados.length + " Classificados"}
        ></CardHeader>
      </Card>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  classificados: selectClassificadosForPreview,
});

export default connect(mapStateToProps)(ClassificadoCounter);
