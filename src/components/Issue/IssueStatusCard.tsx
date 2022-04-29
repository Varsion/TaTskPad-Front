import React from "react"
import { LoadingButton } from "@mui/lab"
import { Card, CardContent, Grid, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material"

import { SelectChangeEvent } from "@mui/material/Select";

const IssueStatusCard = () => {

  const [priority, setPriority] = React.useState('p1');
  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Grid container direction="column" alignItems="stretch" spacing={2}>
          <Grid item>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                label="Age"
                onChange={handlePriorityChange}
              >
                <MenuItem value={'p0'}>P0</MenuItem>
                <MenuItem value={'p1'}>P1</MenuItem>
                <MenuItem value={'p2'}>P2</MenuItem>
                <MenuItem value={'p3'}>P3</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={'story'}
                label="Type"
                onChange={handlePriorityChange}
              >
                <MenuItem value={'story'}>Story</MenuItem>
                <MenuItem value={'bug'}>Bug</MenuItem>
                <MenuItem value={'task'}>Task</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField id="standard-basic" label="Estimate" variant="standard" value={'1d'} fullWidth/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default IssueStatusCard