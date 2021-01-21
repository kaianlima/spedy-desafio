import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import DrawerButton from "../drawer-button/drawer-button";
import DrawerList from "../drawer-list/drawer-list";

import { toggleDrawer } from "../../redux/drawer/drawer.actions";
import { selectDrawerOpen } from "../../redux/drawer/drawer.selectors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const Header = ({ toggleDrawer, drawerOpen }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <DrawerButton />
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <DrawerList />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  drawerOpen: selectDrawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
