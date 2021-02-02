import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { TicketTable } from "../Components/TicketTable/TicketTable";

const ticketListStyles = makeStyles(() => ({
  breadcrumb: {
    left: "25%",
    position: "relative",
    width: "200px",
  },
  link: {
    color: "#585858",
    cursor: "pointer",
  },
  current: {
    color: "black",
  },
  div: {
    position: "relative",
    height: "1300px",
    top: "200px",
  },
  add: {
    fontSize: "1.2rem",
    backgroundColor: "#585858",
    color: "#ffb347",
    height: "57px",
    top: "20px"
  },

  text: {
    marginTop: "30px",
    fontSize: "20px",
  },

  search: {
    backgroundColor: "white",
    "& .Mui-focused": {
      color: "#585858",
    },
    borderRadius: "5px",
    top: "-20px",
  },

  table: {
    marginTop: "100px",
  },
}));

export const TicketList = () => {
  const classes = ticketListStyles();

  const [value, setValue] = useState("");
//   const [dispTicket, setDispTicket] = useState([]);



  useEffect(() => {}, [value, ]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.div} style={{ padding: 30 }}>
      <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
        <Link className={classes.link}>Home</Link>
        <Typography className={classes.current}>Tickets</Typography>
      </Breadcrumbs>
      <Grid
        spacing={8}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button className={classes.add}>Add New Ticket</Button>
        </Grid>
        <Grid item>
          <form>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              className={classes.search}
              label="Search..."
              variant="filled"
              id="search"
              name="search"
              value={value}
              onChange={handleOnChange}
            ></TextField>
          </form>
          <Grid item>
            <TicketTable className={classes.table} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};