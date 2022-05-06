import * as React from 'react';
import {
  Divider, Toolbar, Typography, Container, 
  Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper,
  Checkbox, FormControlLabel, Button, Stack
} from '@mui/material';
import { GET_ROLE } from "../../actions/role";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import HeaderBar from "../../components/Items/HeaderBar";
import { NotifySuccess } from '../../components/Notify';

interface RoleType {
  id: string;
  name: string;
  description: string;
  active: boolean;
  permissions: PermissionType[];
}

interface PermissionType {
  scope: string;
  actions: ActionType[];
}

interface ActionType {
  key: string;
  value: boolean;
}
const Permissions = () =>{
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_ROLE, {
    variables: { id }
  })

  const role = data?.role;
  const permissions = role?.permissions;

  React.useEffect(() => {
    if(role){
      console.log(role);
    }
  }, [permissions, role]);

  const save = () => {
    NotifySuccess("Permission saved")
  }

  const disable = () => {
    NotifySuccess("Permission Disabled")
  }

  const enable = () => {
    NotifySuccess("Permission Enabled")
  }

  return (
    <Container sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'column', mt:10 }}>
      <Toolbar />
      <HeaderBar />
      <Typography variant="h5">
        {role?.name}
      </Typography>
      <Divider />
  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">Scope</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
            <Divider component={'tr'} />
          </TableHead>
          <TableBody>
            {
              permissions?.map((permission: PermissionType, index: number) => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={index}
                  >
                    <TableCell component="th" scope="row">
                      {permission.scope}
                    </TableCell>
                    <TableCell align="right">
                      {
                        permission.actions.map((action: ActionType, index: number) => {
                          return (
                            action.value ?
                              <FormControlLabel 
                                control={<Checkbox checked/>}
                                label={action.key}
                                key={index}
                              /> :
                              <FormControlLabel 
                                control={<Checkbox/>} 
                                label={action.key}
                                key={index} 
                              />

                          )
                        })
                      }
                    </TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Stack spacing={2} direction="row">
        {
          role?.active ?
            <Button variant="contained" color="error" onClick={disable}>Disable</Button> :
              <Button variant="contained" color="success" onClick={enable}>Enable</Button>
        }
        <Button variant="contained" color="primary" onClick={save}>Save</Button>
      </Stack>
    </Container>
  );
}

export default Permissions;