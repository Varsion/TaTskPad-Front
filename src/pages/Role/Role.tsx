import * as React from 'react';
import {
  Box, Divider, Toolbar, Typography, 
  Table, TableBody, Container, 
  TableCell, TableContainer, 
  TableRow, Paper,Button, Stack
} from '@mui/material';

export default function Role(){
  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
    <Toolbar />
    <Box display={'flex'}>
      <Typography variant="h5">
        Roles
      </Typography>
      <Button variant="contained" sx={{ml:121}}>Add New</Button>
    </Box>
    <Divider />
    <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Admin
            </TableCell>
            <TableCell align="right" sx={{display: 'flex'}} >
              <Stack spacing={2} direction="row">
                <Button variant="outlined" color="error">Disabled</Button>
                <Button variant="contained">Update</Button>
              </Stack>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Developer For Project_1
            </TableCell>
            <TableCell align="right" sx={{display: 'flex'}} >
              <Stack spacing={2} direction="row">
                <Button variant="outlined" color="success">Enable</Button>
                <Button variant="contained">Update</Button>
              </Stack>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Coach
            </TableCell>
            <TableCell align="right" sx={{display: 'flex'}} >
              <Stack spacing={2} direction="row">
              <Button variant="outlined" color="error">Disabled</Button>
                <Button variant="contained">Update</Button>
              </Stack>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Viewer
            </TableCell>
            <TableCell align="right" sx={{display: 'flex'}} >
              <Stack spacing={2} direction="row">
              <Button variant="outlined" color="error">Disabled</Button>
                <Button variant="contained">Update</Button>
              </Stack>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Manager
            </TableCell>
            <TableCell align="right" sx={{display: 'flex'}} >
              <Stack spacing={2} direction="row">
              <Button variant="outlined" color="error">Disabled</Button>
                <Button variant="contained">Update</Button>
              </Stack>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    <br />
  </Container>
  );
}