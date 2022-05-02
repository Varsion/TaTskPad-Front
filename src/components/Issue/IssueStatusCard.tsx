import React from "react";
import {
  Card,
  CardContent,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import "./Issue.css";
import { SelectChangeEvent } from "@mui/material/Select";

const IssueStatusCard = () => {
  const [priority, setPriority] = React.useState("p1");
  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Box>
          <Box className="message">详细信息</Box>
          <Box className="TopContainer">
            <Box className="container">
              <Box>经办人</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar />} label={"hello-1"} />
              </Box>
            </Box>
            <Box className="container">
              <Box>报告人</Box>
              <Box className="messageOne">
                <Chip avatar={<Avatar />} label={"hello-1"} />
              </Box>
            </Box>
            <Box className="container">
              <Box>标签</Box>
              <Box className="right-box">无</Box>
            </Box>
            <Box className="container">
              <Box>优先级</Box>
              <Box className="right-boxTwo">xxx</Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default IssueStatusCard;
