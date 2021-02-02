import {
  Breadcrumbs,
  Button,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Header } from "../Components/Layout/Header"

const addTicketStyles = makeStyles((theme) => ({
  div: {
    position: "relative",
    height: "1300px",
  },

  paper: {
    backgroundColor: "#585858",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "500px",
    outline: "none",
  },

  title: {
    fontSize: "30px",
    marginTop: "20px",
    color: "#ffb347",
  },
  input: {
    width: "400px",
    backgroundColor: "white",
    "& .Mui-focused": {
      color: "#585858",
    },
  },

  form: {
    marginTop: "20px",
  },

  button: {
    color: "#ffb347",
    width: "150px",
    height: "50px",
    fontSize: "30px",
    marginTop: "20px",
    textTransform: "none",
  },

  date: {
    width: "400px",
    backgroundColor: "	#E0E0E0",
    "& .Mui-focused": {
      color: "#585858",
    },
    height: "40px",
  },
  breadcrumb: {
    left: "30%",
    position: "relative",
    top: "25%"

  },
  link: {
    color: "#585858",
    cursor: "pointer"
    
  },
  current: {
    color: "black"
  }
}));

export const AddTicket = () => {
  const classes = addTicketStyles();

  const initialData = {
    subject: "",
    date: "",
    issue: "",
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {}, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = ((e) => {
    e.preventDefault();
    console.log("submitted", formData)
  })
  return (
    <div>
      <Header />
      <div className={classes.div}>
        <Breadcrumbs className = {classes.breadcrumb} aria-label = "breadcrumb">
          <Link className = {classes.link}>Home</Link>
          <Typography className = {classes.current}>Add New Ticket</Typography>
        </Breadcrumbs>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Add New Ticket</Typography>

          <form className={classes.form}>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              margin="normal"
              id="subject"
              label="Subject"
              name="subject"
              className={classes.input}
              onChange={handleChange}
              value={formData.subject}
            />

            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              type="date"
              margin="normal"
              id="date"
              name="date"
              className={classes.date}
              onChange={handleChange}
              value={formData.date}
            />

            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              multiline
              rows={6}
              variant="filled"
              margin="normal"
              required
              id="issue"
              label="Please explain your issue"
              name="issue"
              className={classes.input}
              onChange={handleChange}
              value={formData.issue}
            />
          </form>

          <Button onClick = {handleSubmit} className={classes.button}>Submit</Button>
        </Paper>
      </div>
    </div>
  );
};
