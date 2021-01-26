import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { formatDate } from "../../App.utils";

const useStyles = makeStyles(() => ({
  root: {
    width: 285,
    minHeight: 255,
  },
  cardHeader: {
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardTitle: {
    minHeight: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));

const ClassificadoItem = ({ titulo, dataCadastro, descricao }) => {
  const classes = useStyles();

  const date = formatDate(dataCadastro);

  return (
    <Card className={classes.root}>
      <Box className={classes.cardHeader}>
        <CardHeader title={titulo} subheader={date} align="center" />
      </Box>
      <CardContent>
        <Typography align="justify">{descricao}</Typography>
      </CardContent>
    </Card>
  );
};

export default ClassificadoItem;
