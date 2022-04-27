import React, { useState } from "react";
// import { makeStyles } from '@material-ui/styles';
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
interface PropsType {
  date: any;
  customerId: any;
}
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function MinTable({ date, customerId }: PropsType) {
  return (
    <Box margin={3}>
      {" "}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="body2">{customerId}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
