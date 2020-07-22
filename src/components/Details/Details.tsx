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
import { fetchUSD } from "../../redux/middleware/thunks";
import { fetchInfo } from "../../redux/selectors/selectors";
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
  const tradingInfo = useSelector(fetchInfo);

  const fetchData = useCallback(() => {
    dispatch(fetchUSD());
    setTimeout(fetchData, random(6000));
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
