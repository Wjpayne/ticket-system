import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ticketTableStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },

  container: {
    marginTop: "50px",
  },

  head: {
    fontSize: "20px",
    fontWeight: "bold"
  }


}));

export const TicketTable = () => {
  const classes = ticketTableStyles();
  return (
    <div>
      <TableContainer className={classes.container} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead >
            <TableRow>
              <TableCell className = {classes.head}align="right"># </TableCell>
              <TableCell className = {classes.head} align="right">Subject</TableCell>
              <TableCell className = {classes.head} align="right">Status</TableCell>
              <TableCell className = {classes.head} align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">problem</TableCell>
              <TableCell align="right">pending</TableCell>
              <TableCell align="right">02-01-2021</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
