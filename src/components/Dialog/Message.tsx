import React from "react";
import { makeStyles, Typography, Avatar } from "@material-ui/core";

import { Message as MessageType } from "../../types/types";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: "flex",
    width: "80%",
    float: "right",
    padding: 15,
    justifyContent: "flex-end",
  },
  income: {
    float: "left",
    flexDirection: "row-reverse",
    "& span": {
      float: "left",
    },
  },
  avatar: {
    margin: 10,
  },
  message: {
    border: "1px solid",
    borderColor: palette.divider,
    padding: 15,
  },
  timeStamp: {
    color: palette.text.secondary,
    fontSize: 12,
    float: "right",
    marginTop: 3,
  },
}));

export const Message: React.FC<MessageType> = ({ text, income, time }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${income && classes.income}`}>
      <div>
        <div className={classes.message}>
          <Typography>{text}</Typography>
        </div>
        <span className={classes.timeStamp}>{time.toString()}</span>
      </div>
      <Avatar className={classes.avatar} />
    </div>
  );
};
