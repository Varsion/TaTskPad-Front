import * as React from 'react';
import {
  Box, Divider, Toolbar, Typography, 
  Table, TableBody, Container, 
  TableCell, TableContainer, 
  TableRow, Paper,Button, Stack, Chip,
  Pagination, FormGroup, Modal, Tab, Tabs, TextField
} from '@mui/material';
import HeaderBar from "../../components/Items/HeaderBar";
import TabPanel from "../../components/Items/TabPanel";
import { GET_ROLES } from "../../actions/role";
import { useQuery } from '@apollo/client';

import { useNavigate } from 'react-router-dom';

import CreateRole from "../../components/Role/CreateRole";

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

interface RolesType {
  id: string;
  name: string;
  active?: boolean;
}

const Roles = () => {

  const organizationId = localStorage.getItem("organizationId");
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_ROLES, {
    variables: { organizationId }
  });

  const roles = data?.organization?.roles;

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  const enterPermission = (id: string) => {
    navigate(`/permission/${id}`);
  }
  

  React.useEffect(() => {
    if(roles){
      console.log(roles);
    }
  } , [roles]);


  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
      <Toolbar />
      <HeaderBar />
      <Box display={'flex'}>
        <Typography variant="h5">
          Roles
        </Typography>
        <Button variant="contained" sx={{ml:121}} onClick={handleModalOpen}>Create</Button>
      </Box>
      <Divider />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableBody>
            {
              roles?.length > 0 ?
                roles.map((role: RolesType, index: number) => {
                  return (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      key={index}
                    >
                      <TableCell component="th" scope="row">
                        {role.name}
                      </TableCell>
                      <TableCell align="right" sx={{display: 'flex'}} >
                        <Stack spacing={2} direction="row">
                          {
                            role.active ?
                              <Chip label="enabled" color="success" /> :
                                <Chip label="disabled" color="error" />
                          }
                          <Button variant="contained" onClick={() => enterPermission(role.id)}>Settings</Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                }) :
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    no roles now
                  </TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Pagination
        count={1}
        color="primary"
        sx={{ position: "absolute", bottom: 100, right: 150 }}
      />

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={0} centered>
            <Tab label="Create" />
          </Tabs>
          <Box>
            <TabPanel value={0} index={0}>
              <CreateRole />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default Roles;