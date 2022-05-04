import React from "react";
import {
  Card, CardContent, Chip, Box, Avatar, Stack
} from "@mui/material";
import "./Issue.css";
import { useQuery } from "@apollo/client";
import { GET_ISSUE_DETAILS } from "../../actions/issue";

interface IssueStatusProps {
  keyNumber: string;
}

const IssueStatusCard = (props: IssueStatusProps) => {
  const { keyNumber } = props;
  const { data } = useQuery(GET_ISSUE_DETAILS, {
    variables: { keyNumber }
  });

  const assignee = data?.issue?.assignee;
  const author = data?.issue?.author;
  const labels = data?.issue?.labels;
  const priority = data?.issue?.priority;
  const estimate = data?.issue?.estimate;

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Box>
          <Box className="message">Details</Box>
          <Box className="TopContainer">
            <Box className="container">
              <Box sx={{width:50}}>Assignee</Box>
              <Box className="messageOne">
                {
                  assignee ? 
                    <Chip avatar={<Avatar src={assignee?.avatar} />} label={assignee?.name} /> :
                      <Chip avatar={<Avatar />} label={"no assignee"} />
                }
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Author</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar src={author?.avatar} />} label={author?.name} />
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Labels</Box>
              <Stack direction="row" spacing={2} className="messageOne">
                {
                  labels?.map((label: string) => (
                    <Chip label={label} size="small" />
                  ))
                }
                <Chip color="primary" label="prod" />
                <Chip label="need" size="small" />
              </Stack>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Priority</Box>
              <Box className="right-boxTwo">{priority}</Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>Estimate</Box>
              <Box className="right-boxTwo">{estimate}</Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IssueStatusCard;
