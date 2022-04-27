import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent
} from "@mui/material";
interface PropsType {
  date: any;
  customerId: any;
  key: any;
}
export default function MinTable(props: PropsType) {

  const { date, customerId, key } = props;
  return (
    <Box margin={3} key={key}>
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
