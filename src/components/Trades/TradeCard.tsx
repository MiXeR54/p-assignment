import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, CardActionArea, Paper, Avatar } from "@material-ui/core";

import { Trade } from "../../types/types";
import { selectIsSeller } from "../../redux/selectors/selectors";
import { markAsRead } from "../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  image: {
    width: 64,
    height: 64,
  },
  greenBullet: {
    display: "inline-block",
    margin: "2px 10px 2px 2px",
    transform: "scale(3)",
    color: "green",
  },
  bullet: {
    display: "inline-block",
    margin: "2px 10px 2px 2px",
    transform: "scale(3)",
    color: "gray",
  },
  text: {
    textAlign: "center",
  },
  succesText: {
    textAlign: "center",
    color: "green",
  },
  info: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

interface TraidingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: number | null;
  tradeInfo: Trade;
}

export const TradeCard: React.FC<TraidingCardProps> = ({ tradeInfo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isSeller = useSelector(selectIsSeller);
  const history = useHistory();

  const clickHandler = useCallback(() => {
    history.push(`/sell/trades/${tradeInfo.id}`);
    dispatch(markAsRead(tradeInfo.id));
  }, [dispatch, history, tradeInfo]);

  return (
    <CardActionArea onClick={clickHandler}>
      <Paper variant="outlined" square className={classes.paper}>
        <Grid container direction="row" spacing={3} justify="center">
          <Grid item className={classes.info}>
            {(isSeller && tradeInfo.chat.gotUnreads.seller) ||
            (!isSeller && tradeInfo.chat.gotUnreads.buyer) ? (
              <Typography>
                <span className={classes.greenBullet}>•</span>
              </Typography>
            ) : (
              <Typography>
                <span className={classes.bullet}>•</span>
              </Typography>
            )}
          </Grid>
          <Grid item className={classes.info}>
            <Grid item>
              <Typography color="textSecondary">
                {tradeInfo.buyerName} is buying
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{tradeInfo.paymentMethod}</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">{tradeInfo.amount}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Avatar className={classes.image}>R</Avatar>

            {tradeInfo.isPaid ? (
              <Typography className={classes.succesText} color="primary">
                PAID
              </Typography>
            ) : (
              <Typography className={classes.text} color="textSecondary">
                NOT PAID
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </CardActionArea>
  );
};
