import * as React from 'react';
import {
  Box, Divider, Toolbar, Typography, Container, 
  Table, TableBody, TableHead,
  TableCell, TableContainer, 
  TableRow, Paper,Button, Stack, Pagination, 
  FormGroup, MenuItem, Modal, Tab, Tabs,
  FormControl, InputLabel, TextField,
} from '@mui/material';
import { NotifySuccess } from '../../components/Notify';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HeaderBar from "../../components/Items/HeaderBar";
import TabPanel from "../../components/Items/TabPanel";

interface MembersType {
  id: number;
  name: string;
  enterTime: string;
  role: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  minHeight: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};


const Members = () => {

  const [members, setMembers] = React.useState<MembersType[]>([
    {id: 1, name: 'jianhua', enterTime: '2022-05-01', role: 'Admin'},
    {id: 2, name: 'Jianhua 01', enterTime: '2022-05-04', role: 'Developer'},
    {id: 3, name: 'Jianhua 02', enterTime: '2022-05-04', role: 'Developer'},
    {id: 4, name: 'Jianhua 03', enterTime: '2022-05-04', role: 'Developer'},
  ]);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [inviteModal, setInviteModal] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [role, setRole] = React.useState('');
  const handleModalOpen = (currentRole:string, currentId:number) => {
    setModalOpen(true);
    setRole(currentRole);
    setId(currentId);
  };
  const handleModalClose = () => setModalOpen(false);

  const handleInviteModalClose = () => setInviteModal(false);
  const handleInviteModalOpen = () => setInviteModal(true);
  const handleInvite = () => {
    NotifySuccess('Invite email will send in later');
    setTimeout(() => {
      handleInviteModalClose();
    }, 5000);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleSubmit = () => {
    setMembers(members.map(member => {
      if (member.id === id) {
        member.role = role;
      }
      return member;
    }));
    NotifySuccess('Role Updated Success');
    setTimeout(() => {
      handleModalClose();
    }, 5000);
  }


  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
      <Toolbar />
      <HeaderBar />
      <Box display={'flex'}>
        <Typography variant="h5">
          Members
        </Typography>
        <Button variant="contained" sx={{ml:120}} onClick={handleInviteModalOpen}>Invite</Button>
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
                        <Button variant="contained" onClick={() => handleModalOpen(member.role, member.id)}>Settings</Button>
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
        <Pagination
          count={1}
          color="primary"
          sx={{ position: "absolute", bottom: 100, right: 150 }}
        />
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={0} centered>
            <Tab label="Member Role Update" />
          </Tabs>
          <Box>
            <TabPanel value={0} index={0}>
              <FormGroup sx={{
                marginTop: 10,
              }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={'Admin'}>Admin</MenuItem>
                    <MenuItem value={'Developer'}>Developer</MenuItem>
                    <MenuItem value={'Manger'}>Manger</MenuItem>
                  </Select>
                </FormControl>

                  <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                    <Button  
                      variant="contained"
                      onClick={handleSubmit}
                    >
                        Update
                    </Button>
                  </Box>
              </FormGroup>
            </TabPanel>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={inviteModal}
        onClose={handleInviteModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={0} centered>
            <Tab label="Member Role Update" />
          </Tabs>
          <Box>
            <TabPanel value={0} index={0}>
              <FormGroup sx={{
                marginTop: 10,
              }}>

                  <TextField fullWidth label="New Member Email" id="email" margin="normal" required/>


                  <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                    <Button  
                      variant="contained"
                      onClick={handleInvite}
                    >
                        Invite
                    </Button>
                  </Box>
              </FormGroup>
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default Members;