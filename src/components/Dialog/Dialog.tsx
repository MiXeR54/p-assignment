import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "20px",
  },
  info: {
    paddingTop: "25px",
  },
  posRep: {
    color: "green",
  },
  negRep: {
    color: "red",
  },
});

export const Dialog: React.FC = () => {
  const classes = useStyles();
  const posRep = <span className={classes.posRep}>+35</span>;
  const negRep = <span className={classes.negRep}>-35</span>;
  return (
    <div className={classes.root}>
      <Grid
        className={classes.info}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Amazon Gift Card</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Chanaar {posRep} / {negRep}
          </Typography>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};
