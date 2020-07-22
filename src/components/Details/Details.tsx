import React from "react";
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
import { useSelector } from "react-redux";
import { fetchInfo } from "../../redux/selectors/selectors";

import { useFetch } from "../../hooks/useFetch";

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

export const Details = () => {
  const classes = useStyles();
  const tradingInfo = useSelector(fetchInfo);
  useFetch(60000);

  return (
    <Paper className={classes.root}>
      <Header />
      <Table className={classes.table}>
        <TableBody>
          {tradingInfo.bpi != null ? (
            <TableRow>
              <TableCell align="center">{tradingInfo.bpi.USD.code}</TableCell>
              <TableCell align="center">
                {tradingInfo.bpi.USD.rate_float}
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell align="center">USD</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AccountSwitcher />
    </Paper>
  );
};
