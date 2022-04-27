import * as React from "react";
import {
  Box,
  Toolbar,
  Breadcrumbs,
  Link,
  Grid,
  TextField,
} from "@mui/material";
import RowTable from "../../components/RowTable/RowTable";
import SearchIcon from "@mui/icons-material/Search";

export default function Backlog() {
  return (
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
          Backlog
        </Link>
      </Breadcrumbs>
      <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
        <Grid item xs={8} sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search in Current Board"
            variant="outlined"
            size="small"
          />
          <SearchIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, fontSize: 30 }}
          />
        </Grid>
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
        <RowTable />
      </Box>
    </Box>
  );
}
