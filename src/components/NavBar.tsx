import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  Grid,
} from "@material-ui/core";

export const NavBar: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Paxful
          </Typography>
          <Grid container justify="flex-end" direction="row" spacing={2}>
            <Grid item>
              <Typography variant="h6">Buy bitcoin</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Sell bitcoin</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Wallet</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Support</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Your</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
