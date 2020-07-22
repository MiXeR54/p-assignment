import React, { useEffect } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import { TradeCard } from "./TradeCard";
import { allTrades, selectedTrade } from "../../redux/selectors/selectors";
import { getTrades } from "../../redux/middleware/thunks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    background: "white",
    minHeight: "100%",
    marginTop: "1px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      overflowX: "auto",
      minHeight: "100%",
    },
  },
}));

export const Trade: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const trades = useSelector(allTrades);
  const currentTradeId = useSelector(selectedTrade);

  useEffect(() => {
    dispatch(getTrades());
  }, [dispatch]);

  return (
    <Paper className={classes.root}>
      {trades.map((trade) => (
        <TradeCard key={trade.id} selected={currentTradeId} tradeInfo={trade} />
      ))}
    </Paper>
  );
};
