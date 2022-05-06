import * as React from 'react';
import {
  Box, Divider, Toolbar, Typography, Container, 
  Table, TableBody, TableHead,
  TableCell, TableContainer, 
  TableRow, Paper,Button, Stack, Pagination
} from '@mui/material';
import HeaderBar from "../../components/Items/HeaderBar";

interface MembersType {
  id: number;
  name: string;
  enterTime: string;
  role: string;
}

const Members = () => {

  const [members, setMembers] = React.useState<MembersType[]>([
    {id: 1, name: 'jianhua', enterTime: '2022-05-01', role: 'Admin'},
    {id: 2, name: 'Jianhua 01', enterTime: '2022-05-04', role: 'Developer'},
    {id: 3, name: 'Jianhua 02', enterTime: '2022-05-04', role: 'Developer'},
    {id: 4, name: 'Jianhua 03', enterTime: '2022-05-04', role: 'Developer'},
  ]);


  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
      <Toolbar />
      <HeaderBar />
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

            {
              members.map((member, index) => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={index}
                  >
                    <TableCell component="th" scope="row">
                      {member.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {member.enterTime}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {member.role}
                    </TableCell>
                    <TableCell align="right" sx={{display: 'flex'}} >
                      <Stack spacing={2} direction="row">
                        <Button variant="contained">Settings</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <Box>
        <Pagination count={1} variant="outlined" shape="rounded" />
      </Box>

    </Container>
  );
}

export default Members;