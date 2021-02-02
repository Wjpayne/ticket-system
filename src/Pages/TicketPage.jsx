import {
  Breadcrumbs,
  Link,
  makeStyles,
  Typography,
  Grid,
  Paper,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header } from "../Components/Layout/Header"

const ticketPageStyles = makeStyles((theme) => ({
  breadcrumb: {
    left: "25%",
    position: "relative",
    width: "200px",
  },
  link: {
    color: "#585858",
    cursor: "pointer",
  },

  div: {
    position: "relative",
    height: "1300px",
    top: "200px",
  },
  current: {
    color: "black",
  },
  paper: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "1000px",
    width: "1000px",
    outline: "none",
    overflow: "scroll"
  },
  text: {
    fontWeight: "bold",
    marginTop: "30px"
    
  },

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

  button: {
      marginTop: "20px"
  },

  form: {
      position: "absolute",
      marginTop: "40px",
      left: "50%",
      transform: "translateX(-50%)"
  },

  input: {
    "& .Mui-focused": {
        color: "#585858",
      },
  }
}));

export const TicketPage = () => {
  const classes = ticketPageStyles();

  const [reply, setReply] = useState("")

  useEffect(() => {}, [reply])

  const handleOnChange = (e) => {

    setReply(e.target.value)

  }

  const onSubmit = () => {

    console.log("success")

  }


  return (
    <div className={classes.div}>
      <Header />
      <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
        <Link className={classes.link}>Home</Link>
        <Typography className={classes.current}>Ticket</Typography>
      </Breadcrumbs>
      <Paper className={classes.paper}>
        <Grid container direction="column" alignItems="flex-start">
          <div className={classes.text}>Subject: </div>
          <div className={classes.text}>Ticket Open: </div>
          <div className={classes.text}>Status: </div>
        </Grid>
        <div className={classes.messageHistory}>
          <div>
            <div className={classes.textMessage}>Client</div>
            <div className={classes.textMessage}>Date</div>
          </div>
          <div className={classes.message}>Message</div>
        </div>

        <form className = {classes.form}>
          <FormControl>
            <FormGroup>
              <FormLabel component="legend">Please reply with a message here or update the ticket</FormLabel>
              <TextField
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                id = "reply"
                name = "reply"
                label = "Reply..."
                rows = {10}
                multiline
                className = {classes.input}
                value = {reply}
                onChange = {handleOnChange}

              ></TextField>
              <Button onClick = {onSubmit} className = {classes.button}>Reply</Button>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
    </div>
  );
};
