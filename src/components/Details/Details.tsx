import React, { useState, useEffect } from "react";
import {
  Paper,
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

import { AccountSwitcher } from "./AccounSwitcher";
import { Header } from "./Header";

const useStyles = makeStyles({
  root: {
    background: "white",
    minHeight: "100%",
    marginTop: "1px",
  },
  table: {
    display: "flex",
    justifyContent: "center",
  },
});

const initialState = {
  code: "USD",
  description: "United States Dollar",
  rate: "0",
  rate_float: 0,
};

export const Details = () => {
  const classes = useStyles();
  const [USD, setUSD] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
        .then((response) => response.json())
        .then((data) => setUSD({ ...data.bpi.USD }));
    }, Math.floor(Math.random() * 60));
    return () => clearTimeout(timer);
  }, [USD]);

  return (
    <Paper className={classes.root}>
      <Header />
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell align="center">{USD.code}</TableCell>
            <TableCell align="center">{USD.rate_float}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <AccountSwitcher />
    </Paper>
  );
};
