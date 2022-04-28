import React, { useState } from "react";
import {
  Box, Typography, Card, CardContent
} from "@mui/material";
interface PropsType {
  date: any;
  customerId: any;
}
export default function MinTable(props: PropsType) {

  const { date, customerId } = props;
  return (
    <Box margin={3} key={customerId}>
      {" "}
      <Card sx={{ minWidth: 275 }} key={customerId}>
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
