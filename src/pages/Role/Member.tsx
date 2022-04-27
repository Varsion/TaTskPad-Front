import * as React from 'react';
import {
  Box, Divider, Toolbar, Typography, Container, 
  Table, TableBody, TableHead,
  TableCell, TableContainer, 
  TableRow, Paper,Button, Stack, Pagination
} from '@mui/material';

export default function Members(){
  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
    <Toolbar />
    <Box display={'flex'}>
      <Typography variant="h5">
        Members
      </Typography>
      <Button variant="contained" sx={{ml:120}}>Invite</Button>
    </Box>
    <Divider />
    <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }}>
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">Members Name</TableCell>
            <TableCell component="th" scope="row">Enter Time</TableCell>
            <TableCell component="th" scope="row">Role</TableCell>
            <TableCell component="th" scope="row" align="right">Action</TableCell>
          </TableRow>
          <Divider />
        </TableHead>
        <TableBody>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Jianhua
            </TableCell>
            <TableCell component="th" scope="row">
              2022-04-04
            </TableCell>
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
              ChongYaaa
            </TableCell>
            <TableCell component="th" scope="row">
              2022-04-04
            </TableCell>
            <TableCell component="th" scope="row">
              Developer
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
              Varsion
            </TableCell>
            <TableCell component="th" scope="row">
              2022-04-01
            </TableCell>
            <TableCell component="th" scope="row">
              Developer
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
              Nemo
            </TableCell>
            <TableCell component="th" scope="row">
              2022-04-01
            </TableCell>
            <TableCell component="th" scope="row">
              Developer
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

    <Box>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Box>

  </Container>
  );
}