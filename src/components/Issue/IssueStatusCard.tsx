import React from "react";
import {
  Card, CardContent, Chip, Box, Avatar, Stack
} from "@mui/material";
import "./Issue.css";

const IssueStatusCard = () => {

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Box>
          <Box className="message">Details</Box>
          <Box className="TopContainer">
            <Box className="container">
              <Box sx={{width:50}}>Assignee</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar />} label={"hello-1"} />
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Author</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar />} label={"hello-1"} />
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Labels</Box>
              <Stack direction="row" spacing={2} className="messageOne">
                <Chip color="primary" label="prod" size="small" />
                <Chip label="need" size="small" />
              </Stack>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Priority</Box>
              <Box className="right-boxTwo">xxx</Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IssueStatusCard;
