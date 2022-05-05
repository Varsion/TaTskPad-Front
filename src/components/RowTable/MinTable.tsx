import React from "react";
import {
  Box, Typography, Card, CardContent, Grid, Chip,
  Stack, CardActionArea, Avatar
} from "@mui/material";
interface IssueType {
  id: string;
  title: string;
  keyNumber: string;
  status: string;
  genre: string;
  priority: string;
  assignee: {
    name: string;
    avatar: string;
  }
}
export default function MinTable(props: IssueType) {

  const { id, title, keyNumber, status, genre, priority, assignee } = props;

  const handleClick = () => {

  }

  return (
    <Box margin={3} key={id}>
      {" "}
      <Card sx={{ minWidth: 275 }} key={id}>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Grid container>
              <Grid item xs={3}>
                <Stack direction="row" spacing={1}>
                  <Chip variant="outlined" label={keyNumber} />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2">{title}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Stack direction="row" spacing={1}>
                  {
                    genre === "story" ?
                      <Chip color="primary" label="story" /> :
                        genre === "task" ?
                          <Chip color="secondary" label="task" /> :
                            genre === "bug" ?
                              <Chip color="error" label="bug" /> : null
                  }
                  <Chip color="warning" label={status} /> 
                  <Chip label={priority} /> 
                  {
                    assignee ? 
                      <Chip avatar={<Avatar src={assignee.avatar} />} label={assignee.name} /> :
                      <Chip avatar={<Avatar />} label={'no assignee'} /> 
                  }
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
