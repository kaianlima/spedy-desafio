import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import Header from "./components/header/header";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import AddClassificadoSnackbar from "./components/add-classificado-snackbar/add-classificado-snackbar";

import "./App.css";

const Homepage = lazy(() => import("./pages/homepage/homepage"));

const App = () => {
  return (
    <div>
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
