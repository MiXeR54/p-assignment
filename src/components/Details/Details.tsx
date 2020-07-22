import React, { useEffect, useCallback } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { FetchUSD } from "../../redux/middleware/thunks";
import { FetchInfo } from "../../redux/selectors/selectors";
import { random } from "../../helpers/random";

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
  const dispatch = useDispatch();
  const tradingInfo = useSelector(FetchInfo);

  const FetchData = useCallback(() => {
    dispatch(FetchUSD());
    setTimeout(FetchData, random(6000));
  }, [dispatch]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

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
