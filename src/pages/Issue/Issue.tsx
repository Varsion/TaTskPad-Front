import React from "react";
import { 
  Box, Breadcrumbs, Toolbar, Link 
} from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { useParams } from "react-router-dom";
import IssueContent from "../../components/Issue/IssueContent";

const Issue = () => {

  const { keyNumber } = useParams<string>();

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/#/">
          Projects
        </Link>
        <Link underline="hover" color="inherit" href="/#/">
          TaTskPad
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/#/"
          aria-current="page"
        >
          Issue
        </Link>
      </Breadcrumbs>
      <IssueContent keyNumber={keyNumber} />
    </Box>
    </Box>
  )
}

export default Issue;