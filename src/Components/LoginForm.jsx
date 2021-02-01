import {
  Button,
  Divider,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

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
  divider: {
    marginTop: "40px",
  },
  button: {
    color: "#ffb347",
    width: "150px",
    height: "50px",
    fontSize: "30px",
    marginTop: "20px",
    textTransform: "none",
  },
}));

export default function LandingPage() {
  const classes = landingPageStyles();
  return (
    <div className={classes.div}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>Client Login</Typography>
        <Divider className={classes.divider} />
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
          />
        </form>

        <Button className={classes.button}>Login</Button>
      </Paper>
    </div>
  );
}
