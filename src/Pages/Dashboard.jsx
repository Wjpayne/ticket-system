import { Grid, makeStyles, Button, Typography, Breadcrumbs, Link } from "@material-ui/core";
import React from "react";
import { TicketTable } from "../Components/TicketTable/TicketTable";

const dashboardStyles = makeStyles(() => ({
  add: {
    marginTop: "200px",
    fontSize: "1.2rem",
    backgroundColor: "#585858",
    color: "#ffb347",
  },
  text: {
    marginTop: "30px",
    fontSize: "20px"
  },
}));

export const Dashboard = () => {
  const classes = dashboardStyles();
  return (
    <div>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Breadcrumbs aria-label = "breadcrumb">
            <Link color = "inherit" href = "/">Home</Link>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Button className={classes.add}>Add New Ticket</Button>
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
