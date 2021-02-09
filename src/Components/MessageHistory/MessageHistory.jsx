import { makeStyles } from "@material-ui/core";
import React from "react";

const messageStyles = makeStyles(() => ({
  messageHistory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& nth-child(even)": {
      flexDirection: "row-reverse",
    },
    marginTop: "30px",
  },

  textMessage: {
    fontWeight: "bold",
  },

  message: {
    padding: "1rem",
    width: "80%",
    border: "1px solid #ced4da",
    borderRadius: "5px",
  },
}));

export const MessageHistory = ({ msg }) => {
  if (!msg) return null;

  const classes = messageStyles();
  return msg.map((row, i) => (
    <div>
      <div key={i} className={classes.messageHistory}>
        <div>
          <div className={classes.textMessage}>{row.sender}</div>
          <div className={classes.textMessage}>
            {row.msgAt && new Date(row.msgAt).toLocaleString()}
          </div>
        </div>
        <div className={classes.message}>{row.message}</div>
      </div>
    </div>
  ));
};
