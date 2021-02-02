import { Grid, makeStyles, Button, Typography, Breadcrumbs } from "@material-ui/core";
import React from "react";
import { TicketTable } from "../Components/TicketTable/TicketTable";
import { Header } from "../Components/Layout/Header"
import { Link } from "react-router-dom"
const dashboardStyles = makeStyles(() => ({
  add: {
    fontSize: "1.2rem",
    backgroundColor: "#585858",
    color: "#ffb347",
  },
  text: {
    marginTop: "30px",
    fontSize: "20px"
  },

  div: {
    position: "relative",
    top: "400px"
  },
  breadcrumb: {
    left: "30%",
    position: "absolute",
    top: "-25%"

  },
  link: {
    color: "#585858",
    cursor: "pointer"
    
  },
  current: {
    color: "black"
  }
}));

export const Dashboard = () => {
  const classes = dashboardStyles();
  return (
    <div className = {classes.div}>
      <Header />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
        <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
      </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button component = {Link} to = "/add-ticket"  className={classes.add}>Add New Ticket</Button>
          <Typography className={classes.text}>Total tickets: 50</Typography>
          <Grid item>
            <Typography className={classes.text}>
              Recently added tickets
            </Typography>
            <Grid item>
                <TicketTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
