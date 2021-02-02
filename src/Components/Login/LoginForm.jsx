import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const landingPageStyles = makeStyles((theme) => ({
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
    marginTop: "60px",
  },

  button: {
    color: "#ffb347",
    width: "150px",
    height: "50px",
    fontSize: "30px",
    marginTop: "20px",
    textTransform: "none",
  },

  forget: {
    color: "white",
    position: "relative",
    top: "15px",
  },
}));

export default function LandingPage() {
  const classes = landingPageStyles();

  //set state for form

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in the form");
    }
  };
  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Client Login</Typography>

        <form className={classes.form}>
          <TextField
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
            margin="normal"
            required
            id="email"
            label="Enter Email"
            name="email"
            autoComplete="email"
            className={classes.input}
            onChange={handleOnChange}
            value={email}
          />

          <TextField
            InputProps={{
              disableUnderline: true,
            }}
            variant="filled"
            margin="normal"
            required
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
            className={classes.input}
            onChange={handleOnChange}
            value={password}
          />
        </form>

        <Button onClick={handleSubmit} className={classes.button}>
          Login
        </Button>
      </Paper>
    </div>
  );
}
