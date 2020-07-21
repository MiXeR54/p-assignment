import React, { useState, useCallback } from "react";
import { Typography, Switch, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { switchUser } from "../../redux/actions/actions";

const useStyles = makeStyles({
  switcher: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const AccountSwitcher = () => {
  const classes = useStyles();
  const [isSeller, setIsSeller] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchHandler = useCallback(() => {
    setIsSeller(!isSeller);
    dispatch(switchUser(!isSeller));
    history.push("/sell/trades/:trade?");
  }, [isSeller, dispatch, history]);

  return (
    <Typography component="div" className={classes.switcher}>
      <Typography>Buyer</Typography>
      <Switch checked={isSeller} onChange={switchHandler} name="checked" />
      <Typography>Seller</Typography>
    </Typography>
  );
};
