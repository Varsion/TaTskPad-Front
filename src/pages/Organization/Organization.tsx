import React, { useEffect } from 'react';
import HeaderBar from '../../components/Items/HeaderBar';
import { useQuery } from '@apollo/client';
import { 
  Box, Grid, Toolbar, Breadcrumbs, Container, Pagination,
  Button, Typography, Stack, Modal, Tab, Tabs
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import TabPanel from '../../components/Items/TabPanel';
import CreateOrganization from '../../components/OrganizationForms/CreateOrganization';
import JoinOrganization from '../../components/OrganizationForms/JoinOrganization';
import OrganizationCard from '../../components/OrganizationForms/OrganizationCard';
import { GET_ORGANIZATION } from '../../actions/organization';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Organization = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const {data, loading, error} = useQuery(GET_ORGANIZATION);
  const [modalOpen, setModalOpen] = React.useState(false);

  const Organizations = data?.account?.organizations


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  useEffect(() => {
    if (Organizations) {
    }
    if (error) {
    }
  }, [Organizations, error])

  return (
    <Box sx={{flexGrow: 1}}>
      <HeaderBar />
      <Toolbar />
      <br />
      <Box sx={{ flexGrow: 2}}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography variant="h5" color="text.primary">Organization</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={8}>
            <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />} onClick={handleModalOpen}>New</Button>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {
              loading ? <p>Loading...</p> :
                Organizations.length > 0 ? (
                  Organizations.map((org: any, index: number) => (
                    <OrganizationCard id={org.id} name={org.name} logoUrl={org.logoUrl} key={index}/>
                  ))) : (
                    <Grid item xs={12}>
                      <Toolbar />
                      <Stack 
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Typography variant="subtitle1" color="text.primary">No Organizations</Typography>
                        <Typography variant="subtitle1" color="text.primary">Join one or Create one now?</Typography>
                        <Button sx={{float: "right"}} variant="contained" endIcon={<AddIcon />} onClick={handleModalOpen}>New</Button>
                      </Stack>
                    </Grid>
                  )
            }
          </Grid>
          <Pagination count={1} color="primary" sx={{position: 'absolute', bottom: 100, right:150}} />
        </Container>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs value={tabValue} onChange={handleChange} centered>
            <Tab label="Create" />
            <Tab label="Join" />
          </Tabs>
          <Box>
            <TabPanel value={tabValue} index={0}>
              <CreateOrganization />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <JoinOrganization />
            </TabPanel>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default Organization