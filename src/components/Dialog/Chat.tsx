import React, { useEffect, Fragment, useState } from "react";
import {
  InputBase,
  Paper,
  makeStyles,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";
import { Message } from "./Message";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTrade, sendMessage, deleteTrade } from "../../redux/actions";
import { selectIsSeller, selectCurrentTrade } from "../../redux/selectors";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(({ spacing, palette, breakpoints }) => ({
  root: {
    minHeight: "82vh",
    paddingTop: 20,
    backgroundColor: palette.action.hover,
    [breakpoints.up("md")]: {
      padding: 20,
    },
    [breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  heading: {
    textAlign: "center",
  },
  circleIcon: {
    color: "#ffffff",
    // borderRadius: "50%",
    padding: "8px",
    float: "left",
    marginLeft: 20,
    cursor: "pointer",
  },
  success: {
    color: palette.success.main,
    fontWeight: "bold",
  },
  error: {
    color: palette.error.main,
    fontWeight: "bold",
  },
  divider: {
    marginTop: 20,
  },
  chat: {
    marginTop: 5,
    maxHeight: "60vh",
    minHeight: "60vh",
    overflowX: "auto",
    [breakpoints.up("md")]: {
      maxHeight: "60vh",
      minHeight: "60vh",
    },
  },
  input: {
    marginLeft: spacing(1),
    flex: 1,
  },
  rootInput: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "95%",
  },
}));

export const Chat: React.FC = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trade } = useParams();
  const isSeller = useSelector(selectIsSeller);
  const [message, setMessage] = useState<string>("");
  const history = useHistory();
  const currentTrade = useSelector(selectCurrentTrade);

  useEffect(() => {
    if (trade) {
      dispatch(selectTrade(parseInt(trade)));
    }
  }, [trade, dispatch]);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const newMessage = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (message.length > 0) {
      const timeStamp = new Date();
      dispatch(
        sendMessage({
          income: !isSeller,
          text: message,
          time: `${timeStamp.getHours()} : ${timeStamp.getMinutes()} : ${timeStamp.getSeconds()}`,
        })
      );
      setMessage("");
    }
  };

  return (
    <div className={classes.root}>
      {currentTrade ? (
        <Fragment>
          <div className={classes.heading}>
            <div className={classes.circleIcon}>
              <IconButton>
                <DeleteIcon
                  // className={classes.icon}
                  onClick={() => {
                    dispatch(deleteTrade(currentTrade.id));
                    history.push("/sell/trades");
                  }}
                />
              </IconButton>
            </div>
            <div>
              <Typography variant="h4">{currentTrade.paymentMethod}</Typography>
              <Typography color="textSecondary" variant="h5" gutterBottom>
                {currentTrade.buyerName}
                <span className={classes.success}> +37 </span>/
                <span className={classes.error}> -1 </span>
              </Typography>
            </div>
            <Divider className={classes.divider} variant="middle" />
          </div>
          <div className={classes.chat}>
            {currentTrade.chat.messages.map((message) => (
              <Message
                key={message.time}
                text={message.text}
                income={message.income}
                time={message.time}
              />
            ))}
          </div>
          <Paper
            component="form"
            onSubmit={newMessage}
            className={classes.rootInput}
          >
            <InputBase
              className={classes.input}
              placeholder="Type your message"
              onChange={changeMessage}
              value={message}
            />
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          </Paper>
        </Fragment>
      ) : (
        <Typography variant="h6" color="initial">
          No trade selected...
        </Typography>
      )}
    </div>
  );
};
