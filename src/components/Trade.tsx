import React from "react";
import { TradeCard } from "./TradeCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "10px",
  },
});

export const Trade = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TradeCard />
      <TradeCard />
      <TradeCard />
      <TradeCard />
    </div>
  );
};
