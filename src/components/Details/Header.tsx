import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  info: {
    paddingTop: "30px",
  },
  button: {
    margin: "20px",
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
};
