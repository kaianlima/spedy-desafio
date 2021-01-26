import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import AddClassificadoSnackbar from "./components/add-classificado-snackbar/add-classificado-snackbar";

import BackgroundImage from "./assets/background-texture.jpg";

import "./App.css";

const Homepage = lazy(() => import("./pages/homepage/homepage"));

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    height: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" component={Homepage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <AddClassificadoSnackbar />
    </div>
  );
};

export default App;
