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
          <Box className="message">任务卡片细节</Box>
          <Box className="TopContainer">
            <Box className="container">
              <Box sx={{width:50}}>经办人</Box>
              <Box className="messageOne">
                {
                  assignee ? 
                    <Chip avatar={<Avatar src={assignee?.avatar} />} label={assignee?.name} /> :
                      <Chip avatar={<Avatar />} label={"no assignee"} />
                }
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>创建人</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar src={author?.avatar} />} label={author?.name} />
              </Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>标签</Box>
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
              <Box sx={{width:50}}>优先级</Box>
              <Box className="right-boxTwo">{priority}</Box>
            </Box>
            <Box className="container">
              <Box sx={{width:50}}>原始预估时间</Box>
              <Box className="right-boxTwo">{estimate}</Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IssueStatusCard;
