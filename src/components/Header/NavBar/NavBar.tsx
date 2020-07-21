import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { CollapsedNavbar } from "./CollapsedNavbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  active: {
    textDecoration: "underline",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CompanyName
          </Typography>

          <CollapsedNavbar />
          <div className={classes.buttonBar}>
            <Grid container justify="flex-end" direction="row" spacing={2}>
              <Grid item>
                <Typography variant="h6">
                  <NavLink
                    to="/buy"
                    activeClassName={classes.active}
                    className={classes.link}
                  >
                    Buy bitcoin
                  </NavLink>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  <NavLink
                    to="/sell"
                    activeClassName={classes.active}
                    className={classes.link}
                  >
                    Sell bitcoin
                  </NavLink>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Wallet</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Support</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Your account</Typography>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
