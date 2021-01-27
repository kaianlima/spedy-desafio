import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { formatDate } from "../../App.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 270,
    minHeight: 255,
    boxShadow: "0 5px 8px 0 rgba(0,0,0,0.3)",
    backgroundColor: "transparent",
    "&:hover": {
      boxShadow: "0 10px 16px 0 rgba(0,0,0,0.3)",
    },
  },
  cardHeader: {
    minHeight: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.primary.dark,

    color: theme.palette.primary.contrastText,
    "& .MuiTypography-colorTextSecondary": {
      color: "rgba(255, 255, 255, 0.54)",
    },
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
