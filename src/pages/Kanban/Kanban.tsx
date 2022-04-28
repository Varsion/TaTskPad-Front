import * as React from "react";
import { Box } from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import Board from "./Board";
import Backlog from "./Backlog";
import IssuePage from "./IssuePage";

export default function Kanban() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      {/* <Board /> */}
      <Backlog />
      {/* <IssuePage /> */}
    </Box>
  );
}
