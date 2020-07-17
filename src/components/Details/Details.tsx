import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Button,
  Switch,
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
});

export const Details: React.FC = () => {
  const [isSeller, setIsSeller] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

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
