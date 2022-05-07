import React from "react";
import { 
  Box, Toolbar 
} from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";

const Issue = () => {

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />

    </Box>
    </Box>
  )
}

export default Issue;