import React, { useState } from "react";
// import { makeStyles } from '@material-ui/styles';
import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Table,
  TableBody,
} from "@mui/material";
interface PropsType {
  date: any;
  customerId: any;
  amount: number;
  price: number;
}

export default function MinTable({
  date,
  customerId,
  amount,
  price,
}: PropsType) {
  return (
    <Box
      margin={3}
      style={{
        border: "1px solid #64b5f6",
        padding: "10",
      }}
    >
      {" "}
      {/* <Typography variant="h6" gutterBottom component="div">
        To-do list
      </Typography> */}
      <Table size="small" aria-label="purchases">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Total price ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={date}>
            <TableCell component="th" scope="row">
              {date}
            </TableCell>
            <TableCell>{customerId}</TableCell>
            <TableCell align="right">{amount}</TableCell>
            <TableCell align="right">
              {Math.round(amount * price * 100) / 100}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
