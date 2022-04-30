import * as React from 'react';
import {
  Divider, Toolbar, Typography, Container, 
  Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, FormControlLabel, Button, Stack
} from '@mui/material';
import HeaderBar from "../../components/Items/HeaderBar";

const Permissions = () =>{
  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
      <Toolbar />
      <HeaderBar />
      <Typography variant="h5">
        Admin
      </Typography>
      <Divider />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Scope</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
            <Divider />
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Board
              </TableCell>
              <TableCell align="right">
                <FormControlLabel control={<Checkbox />} label="view" />
                <FormControlLabel control={<Checkbox />} label="create" />
                <FormControlLabel control={<Checkbox />} label="update" />
                <FormControlLabel control={<Checkbox />} label="delete" />
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Project
              </TableCell>
              <TableCell align="right">
                <FormControlLabel control={<Checkbox />} label="view" />
                <FormControlLabel control={<Checkbox />} label="create" />
                <FormControlLabel control={<Checkbox />} label="update" />
                <FormControlLabel control={<Checkbox />} label="delete" />
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Task
              </TableCell>
              <TableCell align="right">
                <FormControlLabel control={<Checkbox />} label="view" />
                <FormControlLabel control={<Checkbox />} label="create" />
                <FormControlLabel control={<Checkbox />} label="update" />
                <FormControlLabel control={<Checkbox />} label="delete" />
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Customize Fields
              </TableCell>
              <TableCell align="right">
                <FormControlLabel control={<Checkbox />} label="view" />
                <FormControlLabel control={<Checkbox />} label="create" />
                <FormControlLabel control={<Checkbox />} label="update" />
                <FormControlLabel control={<Checkbox />} label="delete" />
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Workflow
              </TableCell>
              <TableCell align="right">
                <FormControlLabel control={<Checkbox />} label="view" />
                <FormControlLabel control={<Checkbox />} label="create" />
                <FormControlLabel control={<Checkbox />} label="update" />
                <FormControlLabel control={<Checkbox />} label="delete" />
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Select All</Button>
        <Button variant="outlined">Cancel All</Button>
        <Button variant="contained" color="success">Save</Button>
      </Stack>
    </Container>
  );
}

export default Permissions;