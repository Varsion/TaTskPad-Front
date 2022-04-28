import React from "react";
import { Box } from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { useParams } from "react-router-dom";

const CreateIssue = () => {

  const { projectId } = useParams<string>();

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        Issue
      </Box>
    </Box>
  )
}

export default CreateIssue;