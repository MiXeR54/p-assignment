import React from "react";
import { Paper, makeStyles, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "white",
    minHeight: "100vh",
    marginTop: "1px",
  },
  info: {
    paddingTop: "30px",
  },
  button: {
    margin: "20px",
  },
});

export const Details: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid
        className={classes.info}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">You are trading with Chanaar</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="textSecondary">
            Started 23 minutes ago
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Release bitcoins
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
