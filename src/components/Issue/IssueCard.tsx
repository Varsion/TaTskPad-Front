import React from "react";
import { 
  Card, CardContent, 
  Typography, CardActions,
  Stack, Chip, Avatar 
} from "@mui/material";
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
          <Stack direction="row" spacing={1}>
            <Chip label={genre} />
            <Chip label={keyNumber} />
            <Chip label={priority} />
            {
              assignee ?
                <Chip avatar={<Avatar src={assignee?.avatar} />} label={assignee?.name} /> :
                <Chip avatar={<Avatar />} label={"未分配"} />
            }
          </Stack>
        </CardContent>
      </CardActions>
    </Card>
  )
}

export default IssueCard;
