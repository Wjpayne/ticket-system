import {
  Breadcrumbs,
  makeStyles,
  Typography,
  Grid,
  Paper,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  TextField,
  CircularProgress,

} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header } from "../Components/Layout/Header";
import { Link } from "react-router-dom";
import { fetchSingleTicket } from "../Components/TicketTable/TicketActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MessageHistory } from "../Components/MessageHistory/MessageHistory";
import { Alert } from "@material-ui/lab";
import {replyOnTicket} from "../Components/TicketTable/TicketActions"

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
    overflow: "scroll",
  },
  text: {
    fontWeight: "bold",
    marginTop: "30px",
  },

  button: {
    marginTop: "20px",
  },

  form: {
    position: "absolute",
    marginTop: "40px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  input: {
    "& .Mui-focused": {
      color: "#585858",
    },
  },
}));

export const TicketPage = () => {
  const classes = ticketPageStyles();
  const { ID } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedTicket } = useSelector(
    (state) => state.tickets
  );

  const { user:{name} } = useSelector(
    (state) => state.user
  );
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
   const  msgObj = {
      message,
      sender: name
    }
    dispatch(replyOnTicket(ID, msgObj ))
    setMessage("")
    
  };

  useEffect(() => {
    dispatch(fetchSingleTicket(ID));
  }, [ID, dispatch, message]);

  return (
    <div className={classes.div}>
      <Header />
      <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
        <Link to="/dashboard" className={classes.link}>
          Home
        </Link>
        <Typography className={classes.current}>Ticket</Typography>
      </Breadcrumbs>
      <Paper className={classes.paper}>
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            {isLoading && <CircularProgress />}
            {error && <Alert variant="error"></Alert>}
          </Grid>

          <div className={classes.text}>Subject: {selectedTicket.subject} </div>
          <div className={classes.text}>
            Ticket Open: {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()} 
          </div>
          <div className={classes.text}>Status: {selectedTicket.status} </div>
        </Grid>
        {selectedTicket.conversations && (
          <MessageHistory msg={selectedTicket.conversations} />
        )}

        <form className={classes.form} >
          <FormControl>
            <FormGroup>
              <FormLabel component="legend">
                Please reply with a message here or update the ticket
              </FormLabel>
              <TextField
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                id="reply"
                name="reply"
                label="Reply..."
                rows={10}
                multiline
                value={message}
                onChange={handleChange}
                className={classes.input}
              ></TextField>
              <Button onClick = {onSubmit}  className={classes.button}>
                Reply
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
    </div>
  );
};
