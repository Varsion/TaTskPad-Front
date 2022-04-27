import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Toolbar,
  Breadcrumbs,
  Link,
  TextField,
  Grid,
  Button,
  Typography,
  Stack,
  InputLabel,
  Tab,
  Collapse,
  MenuItem,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DoneAllIcon from "@mui/icons-material/DoneAll";
export default function IssuePage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
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
          Issue
        </Link>
      </Breadcrumbs>
      <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          {/* Header */}
          <Grid item xs={8}>
            <Typography variant="h6" component="h4">
              Add daily payout schedule
            </Typography>
            <h4>描述</h4>
            <Box>
              Add "daily" payout schedule option in payout account setting
            </Box>
            <Box
              style={{
                display: "flex",
                marginTop: "10px",
                width: "800px",
                height: "500px",
              }}
            >
              <img src="https://source.unsplash.com/random" alt="descript" />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          {/* Header */}
        </Grid>
      </Box>
    </Box>
  );
}
