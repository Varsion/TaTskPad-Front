import React from "react";
import { Box, Breadcrumbs, Divider, FormControl, Grid, InputLabel, MenuItem, Toolbar, Typography, Link } from "@mui/material";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { useParams } from "react-router-dom";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CreateComment from "../../components/Comment/CreateComment";
import IssueStatusCard from "../../components/Issue/IssueStatusCard";

const Issue = () => {

  const { issueKey } = useParams<string>();

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
      <Box sx={{ display: "flex", flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2}>
          {/* Header */}
          <Grid item xs={8}>
            <Box sx={{minHeight: 600}}>
              <Typography variant="h5">
                Add daily payout schedule
              </Typography>
              <br />
              <Typography variant="h6"> Description </Typography>
              <br />
              <Typography variant="body1" gutterBottom>
                Add "daily" payout schedule option in payout account setting
                Add "daily" payout schedule option in payout account setting
                Add "daily" payout schedule option in payout account setting
                Add "daily" payout schedule option in payout account setting
                Add "daily" payout schedule option in payout account setting
                Add "daily" payout schedule option in payout account setting
              </Typography>
            </Box>
            <Divider />
            <Box>
              <CreateComment />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" alignItems="stretch">
              <Grid item>
                <Box sx={{ maxWidth: 300 }}>
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
                <Toolbar />
                <IssueStatusCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Box>
  )
}

export default Issue;