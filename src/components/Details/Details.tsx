import React, { useState, useEffect } from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Button,
  Switch,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { switchUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  root: {
    background: "white",
    minHeight: "100%",
    marginTop: "1px",
  },
  info: {
    paddingTop: "30px",
  },
  button: {
    margin: "20px",
  },
  Switcher: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

export const Details: React.FC = () => {
  const [isSeller, setIsSeller] = useState(true);
  const [USD, setUSD] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice/USD.json")
        .then((response) => response.json())
        .then((data) => setUSD({ ...data.bpi.USD }));
    }, 3000);
    return () => clearTimeout(timer);
  }, [USD]);

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
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell align="center">{USD.code}</TableCell>

            <TableCell align="center">{USD.rate_float}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography component="div" className={classes.Switcher}>
        <div>Buyer</div>
        <Switch
          checked={isSeller}
          onChange={() => {
            setIsSeller(!isSeller);
            dispatch(switchUser(!isSeller));
            history.push("/sell/trades/:trade?");
          }}
          name="checkedC"
        />
        <div>Seller</div>
      </Typography>
    </Paper>
  );
};
