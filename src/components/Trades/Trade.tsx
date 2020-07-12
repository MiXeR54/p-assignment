import React from "react";
import { TradeCard } from "./TradeCard";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "white",
    minHeight: "100vh",
    marginTop: "1px",
  },
});

export const Trade: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TradeCard />
      <TradeCard />
      <TradeCard />
      <TradeCard />
    </Paper>
  );
};
