import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, CardActionArea, Paper, Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "20px",
  },
  image: {
    width: 64,
    height: 64,
  },
  bullet: {
    display: "inline-block",
    margin: "2px 10px 2px 2px",
    transform: "scale(3)",
    color: "green",
  },
  action: {
    maxWidth: 350,
  },
  text: {
    textAlign: "center",
  },
});

export const TradeCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <CardActionArea className={classes.action}>
      <Paper variant="outlined" square className={classes.paper}>
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Typography>{bull}</Typography>
          </Grid>
          <Grid item>
            <Grid item>
              <Typography color="textSecondary">Max is buying</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Amazon Gift Card</Typography>
            </Grid>
            <Grid item>
              <Typography color="textSecondary">70 USD (50 BTC)</Typography>
            </Grid>
          </Grid>
          <Grid item>
            {/* <Grid container> */}
            <Avatar className={classes.image}>R</Avatar>
            <Typography className={classes.text} color="textSecondary">
              PAID
            </Typography>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </CardActionArea>
  );
};
