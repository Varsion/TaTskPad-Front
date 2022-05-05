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
        <Link underline="hover" color="inherit" href="/organization">
          Organizations
        </Link>
        <Link underline="hover" color="inherit" href="/project">
          TaTskPad
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          aria-current="page"
        >
          {keyNumber}
        </Link>
      </Breadcrumbs>
      <IssueContent keyNumber={keyNumber} />
    </Box>
    </Box>
  )
}

export default Issue;