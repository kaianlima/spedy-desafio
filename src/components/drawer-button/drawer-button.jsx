import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { toggleDrawer } from "../../redux/drawer/drawer.actions";
import { selectDrawerOpen } from "../../redux/drawer/drawer.selectors";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}));

const DrawerButton = ({ toggleDrawer, drawerOpen }) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer}
        edge="start"
        className={clsx(classes.menuButton, drawerOpen && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  drawerOpen: selectDrawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerButton);
