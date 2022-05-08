import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router";

interface Props {
  id: string;
  title: string;
  assignee?: {
    name: string;
    avatar: string;
  }
  keyNumber: string;
  status: string;
  genre: string;
  priority: string;
}
const IssueCard = (props: Props) => {
  const navigate = useNavigate();
  const { id, title, assignee, keyNumber, status, genre, priority } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActions onClick={() => navigate('/issue/'+ keyNumber)}>
        <CardContent >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  )
}

export default IssueCard;
