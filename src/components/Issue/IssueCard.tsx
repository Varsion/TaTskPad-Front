import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const IssueCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Card
        </Typography>
      </CardContent>
    </Card>
  )
}

export default IssueCard;
